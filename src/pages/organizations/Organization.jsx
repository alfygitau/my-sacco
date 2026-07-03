import React, { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Globe,
  Mail,
  Smartphone,
  Building2,
  Settings,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useQuery } from "react-query";
import { useToast } from "../../contexts/ToastProvider";
import { getOrganization } from "../../sdk/organizations/orgnaization";
import { useParams } from "react-router-dom";

export default function OrganizationProfile() {
  const { showToast } = useToast();
  const [organization, setOrganization] = useState({});
  const { id } = useParams();

  const { isFetching } = useQuery({
    queryKey: ["get organization", id],
    queryFn: async () => {
      const response = await getOrganization(id);
      return response.data?.data;
    },
    onSuccess: (data) => {
      setOrganization(data);
    },
    onError: (error) => {
      showToast({
        title: "Organizations processing failed",
        type: "error",
        position: "top-right",
        description: error?.response?.data?.message || error.message,
      });
    },
  });

  return (
    <>
      {isFetching ? (
        <LoadOrganization />
      ) : (
        <div className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="size-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {organization?.org_code ?? ""}
                </p>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  {organization?.org_name ?? ""}
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  View details of the organization onto the ecosystem platform.
                </p>
              </div>
            </div>
          </div>
          {/* CARD 1: IDENTITY & SYSTEM META */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
            <SectionHeader
              title="Organization Identity & Metadata"
              icon={<Building2 size={16} />}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <DetailRow
                label="Organization Name"
                value={organization?.org_name}
              />
              <DetailRow
                label="Organization Code"
                value={organization?.org_code}
                isMono={true}
              />
              <DetailRow
                label="Business Entity Type"
                value={organization?.org_type}
              />

              <div className="md:col-span-3 flex flex-col space-y-1">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Profile Description
                </span>
                <p className="text-sm font-medium text-slate-600 leading-relaxed bg-slate-50/50 rounded-xl p-4 border border-slate-100/60">
                  {organization?.description ||
                    "No description provided for this entity registry."}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: COMMUNICATIONS & LOCALE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sub-Card: Communication Gateways */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
              <SectionHeader
                title="Contact Gateways"
                icon={<Smartphone size={16} />}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 shrink-0 text-slate-400">
                    <Mail size={16} />
                  </div>
                  <DetailRow
                    label="Primary Email Address"
                    value={organization?.email}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 shrink-0 text-slate-400">
                    <Smartphone size={16} />
                  </div>
                  <DetailRow
                    label="Primary Phone Line"
                    value={organization?.phone}
                  />
                </div>
              </div>
            </div>

            {/* Sub-Card: Physical Localization */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
              <SectionHeader
                title="Physical Location & Locale"
                icon={<MapPin size={16} />}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 shrink-0 text-slate-400">
                    <MapPin size={16} />
                  </div>
                  <DetailRow
                    label="Base Street Address"
                    value={organization?.address}
                  />
                </div>

                <DetailRow
                  label="City / Region"
                  value={`${organization?.city || ""}, ${organization?.county || ""}`}
                />
                <DetailRow
                  label="Country & Currency"
                  value={`${organization?.country || "KE"} (${organization?.primary_currency || "KES"})`}
                />
              </div>
            </div>
          </div>

          {/* CARD 3: COMPLIANCE & GOVERNANCE */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
            <SectionHeader
              title="Compliance & Asset Registration"
              icon={<ShieldCheck size={16} />}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
              <DetailRow
                label="License Identifier"
                value={organization?.license_number}
                isMono={true}
              />
              <DetailRow
                label="System Registration No."
                value={organization?.registration_number}
                isMono={true}
              />

              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Establishment Date
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 tracking-tight">
                  <Calendar size={14} className="text-slate-400" />
                  <span>{organization?.registration_date || "—"}</span>
                </div>
              </div>

              <DetailRow
                label="Target Timezone"
                value={organization?.timezone}
              />
            </div>
          </div>

          {/* CARD 4: PARAMETERS & ENGINE SETTINGS */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
            <SectionHeader
              title="Operational Configuration"
              icon={<Settings size={16} />}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <div className="flex flex-col space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  SMS Service Status
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wide w-fit px-2.5 py-1 rounded-lg border ${
                    organization?.settings?.sms_notifications
                      ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                      : "bg-slate-100 border-slate-200 text-slate-500"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${organization?.settings?.sms_notifications ? "bg-emerald-500" : "bg-slate-400"}`}
                  />
                  SMS Broadcasts:{" "}
                  {organization?.settings?.sms_notifications
                    ? "ENABLED"
                    : "DISABLED"}
                </span>
              </div>

              <div className="flex flex-col space-y-1 justify-center px-4">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Guarantor Ceiling Limit
                </span>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  {organization?.settings?.max_guarantors ?? 0}{" "}
                  <span className="text-xs font-medium text-slate-400">
                    Guarantors Max
                  </span>
                </span>
              </div>

              <div className="flex flex-col space-y-1 justify-center px-4">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Active Lifecycle State
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border w-fit ${
                    organization?.status === "Active"
                      ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                      : organization?.status === "Suspended"
                        ? "bg-red-50 border-red-100 text-red-600"
                        : "bg-amber-50 border-amber-100 text-amber-600"
                  }`}
                >
                  {organization?.status || "Pending"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const LoadOrganization = () => {
  return (
    <div className="w-full space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3 w-full">
          <div className="size-9 rounded-xl border border-slate-200 bg-slate-50 shrink-0" />
          <div className="space-y-2 w-full max-w-md">
            <div className="h-3 w-16 bg-slate-200 rounded" />
            <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
            <div className="h-3 w-5/6 bg-slate-200 rounded" />
          </div>
        </div>
      </div>

      {/* Card 1: Identity Skeleton */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Organization Identity & Metadata"
          icon={<Building2 size={16} />}
          isSkeleton={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          <SkeletonDetailRow />
          <SkeletonDetailRow />
          <SkeletonDetailRow />
          <div className="md:col-span-3 flex flex-col space-y-2">
            <div className="h-3 w-28 bg-slate-200 rounded-md" />
            <div className="h-16 w-full bg-slate-50 rounded-xl border border-slate-100/60 flex flex-col justify-center px-4 space-y-2">
              <div className="h-3.5 w-full bg-slate-200/80 rounded" />
              <div className="h-3.5 w-2/3 bg-slate-200/80 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Comm & Location Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
          <SectionHeader
            title="Contact Gateways"
            icon={<Smartphone size={16} />}
            isSkeleton={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-xl bg-slate-200/60 border border-slate-100 shrink-0" />
              <SkeletonDetailRow />
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-xl bg-slate-200/60 border border-slate-100 shrink-0" />
              <SkeletonDetailRow />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
          <SectionHeader
            title="Physical Location & Locale"
            icon={<MapPin size={16} />}
            isSkeleton={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="size-8 rounded-xl bg-slate-200/60 border border-slate-100 shrink-0" />
              <SkeletonDetailRow />
            </div>
            <SkeletonDetailRow />
            <SkeletonDetailRow />
          </div>
        </div>
      </div>

      {/* Card 3: Compliance Skeleton */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Compliance & Asset Registration"
          icon={<ShieldCheck size={16} />}
          isSkeleton={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
          <SkeletonDetailRow />
          <SkeletonDetailRow />
          <div className="flex flex-col space-y-2">
            <div className="h-3 w-28 bg-slate-200 rounded-md" />
            <div className="flex items-center gap-1.5">
              <div className="size-3.5 bg-slate-200 rounded-full" />
              <div className="h-4 w-24 bg-slate-200 rounded-md" />
            </div>
          </div>
          <SkeletonDetailRow />
        </div>
      </div>

      {/* Card 4: Config Skeleton */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Operational Configuration"
          icon={<Settings size={16} />}
          isSkeleton={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          <div className="flex flex-col space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100/60 justify-center">
            <div className="h-3 w-24 bg-slate-200 rounded" />
            <div className="h-6 w-36 bg-slate-200/80 rounded-lg mt-1" />
          </div>
          <div className="flex flex-col space-y-2 justify-center px-4">
            <div className="h-3 w-28 bg-slate-200 rounded" />
            <div className="h-5 w-32 bg-slate-200 rounded-md" />
          </div>
          <div className="flex flex-col space-y-2 justify-center px-4">
            <div className="h-3 w-28 bg-slate-200 rounded" />
            <div className="h-6 w-20 bg-slate-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonSectionHeader = ({ title, icon, isSkeleton = false }) => (
  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
    <div
      className={`${isSkeleton ? "text-slate-300" : "text-slate-400"} shrink-0`}
    >
      {icon}
    </div>
    <h3
      className={`text-xs font-bold uppercase tracking-widest select-none ${isSkeleton ? "text-slate-300" : "text-slate-400"}`}
    >
      {title}
    </h3>
  </div>
);

const DetailRow = ({ label, value, isMono = false }) => (
  <div className="flex flex-col space-y-1">
    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
      {label}
    </span>
    <span
      className={`text-sm font-semibold text-slate-800 tracking-tight ${isMono ? "font-mono text-xs" : ""}`}
    >
      {value || "—"}
    </span>
  </div>
);

const SkeletonDetailRow = () => (
  <div className="flex flex-col space-y-2">
    <div className="h-3 w-28 bg-slate-200 rounded-md" />
    <div className="h-4 w-40 bg-slate-200 rounded-lg" />
  </div>
);

// Reusable Inner Section Header Component
const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
    <div className="text-slate-400 shrink-0">{icon}</div>
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest select-none">
      {title}
    </h3>
  </div>
);
