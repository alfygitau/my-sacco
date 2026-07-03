import React, { useState } from "react";
import {
  Building2,
  Mail,
  Smartphone,
  Eye,
  Search,
  MapPin,
  ShieldCheck,
  FileText,
  Plus,
  Edit2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrganizations } from "../../sdk/organizations/orgnaization";
import { useToast } from "../../contexts/ToastProvider";

export default function Organizations() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [organizations, setOrganizations] = useState([]);

  const handleResetFilters = () => {
    console.log("Resetting search filters...");
  };

  const handleAddOrganization = () => {
    navigate("/admin/add-organization");
  };

  const { isFetching } = useQuery({
    queryKey: ["orgnizations"],
    queryFn: async () => {
      const response = await getOrganizations();
      return response?.data?.data;
    },
    onSuccess: (data) => {
      setOrganizations(data);
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
    <div className="space-y-6 bg-slate-50 text-slate-800">
      {/* Dynamic Action Header Unit */}
      <div className="flex sm:w-full flex-row sm:flex-col justify-between items-start sm:items-start gap-4 bg-white border border-slate-200/80 p-5 rounded-2xl shadow-3xs">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Building2 className="text-primary size-5" /> Organization Register
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Onboard, review regulatory licensing status, and control runtime
            flags for tenant organizations.
          </p>
        </div>
        <button
          onClick={handleAddOrganization}
          className="inline-flex items-center gap-1.5 h-10 sm:w-full px-4 bg-primary hover:bg-primary text-white text-xs uppercase font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          <Plus size={15} strokeWidth={2.5} /> Register New Organization
        </button>
      </div>

      {/* Main Framework Responsive Layout Container */}
      <div className="bg-white border border-slate-200/80 rounded-2xl shadow-3xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase tracking-widest select-none">
                <th className="py-4.5 px-6">Organization Meta</th>
                <th className="py-4.5 px-6">Contact Gateways</th>
                <th className="          py-4.5 px-6">Compliance</th>
                <th className="py-4.5 px-6">Physical Location</th>
                <th className="py-4.5 px-6">Status</th>
                <th className="py-4.5 px-6 text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs tracking-tight">
              {isFetching ? (
                [...Array(10)].map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-b border-slate-100 animate-pulse"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-xl bg-slate-200 shrink-0" />
                        <div className="flex flex-col space-y-2">
                          <div className="h-3 w-16 bg-slate-200 rounded" />
                          <div className="h-4 w-32 bg-slate-200 rounded" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-2">
                        <div className="h-3 w-28 bg-slate-200 rounded" />
                        <div className="h-3 w-36 bg-slate-200 rounded" />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-2">
                        <div className="h-3 w-24 bg-slate-200 rounded" />
                        <div className="h-3 w-20 bg-slate-200 rounded" />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-2">
                        <div className="h-3 w-32 bg-slate-200 rounded" />
                        <div className="h-3 w-24 bg-slate-200 rounded" />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-5 w-20 bg-slate-200 rounded-md" />
                    </td>
                    <td className="py-4 px-6 text-right pr-8">
                      <div className="size-8 rounded-xl bg-slate-200 ml-auto" />
                    </td>
                  </tr>
                ))
              ) : organizations && organizations.length > 0 ? (
                organizations.map((org) => (
                  <tr
                    key={org.id}
                    className="group transition-colors hover:bg-slate-50/40"
                  >
                    {/* Col 1: Organization Identity & Profiles */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col space-y-0.5">
                          <span className="font-mono w-fit px-2 text-[9px] font-bold py-0.5 bg-slate-100 text-slate-500 rounded">
                            {org.org_code} • {org.org_type}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm tracking-tight">
                              {org.org_name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Col 2: Communication Gateways */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-1">
                        <span className="font-medium text-slate-700 flex items-center gap-1.5">
                          <Smartphone size={11} className="text-slate-400" />{" "}
                          {org.phone}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <Mail size={11} className="text-slate-400" />{" "}
                          {org.email}
                        </span>
                        <div className="flex gap-2 pt-0.5">
                          <span
                            className={`text-[8px] font-extrabold uppercase tracking-wider px-1.5 py-0.25 rounded-sm bg-indigo-50 text-primary border border-indigo-100/40`}
                          >
                            SMS Node:{" "}
                            {org?.settings?.sms_notifications ? "ON" : "OFF"}
                          </span>
                          <span className="text-[8px] font-extrabold uppercase tracking-wider px-1.5 py-0.25 rounded-sm bg-slate-100 text-slate-600">
                            Guarantors Ceiling:{" "}
                            {org?.settings?.max_guarantors ?? 0}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Col 3: Compliance & Asset Registration */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-1">
                        <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <ShieldCheck size={12} className="text-emerald-500" />{" "}
                          {org.license_number}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase flex items-center gap-1">
                          <FileText size={10} className="text-slate-400" /> Reg:{" "}
                          {org.registration_number}
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono">
                          Est: {org.registration_date}
                        </span>
                      </div>
                    </td>

                    {/* Col 4: Localization & Base Address */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-0.5">
                        <span className="font-semibold text-slate-800 flex items-center gap-1">
                          <MapPin
                            size={11}
                            className="text-slate-400 shrink-0"
                          />
                          {org.address}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium pl-3.5">
                          {org.city}, {org.county} County ({org.country})
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono pl-3.5">
                          {org.timezone} • {org.primary_currency}
                        </span>
                      </div>
                    </td>

                    {/* Col 5: Security & Deployment Lifecycles */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-1.5">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border w-fit ${
                            org.status === "Suspended"
                              ? "bg-red-50 border-red-100 text-red-600"
                              : org.status === "Active"
                                ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                                : "bg-amber-50 border-amber-100 text-amber-600"
                          }`}
                        >
                          <span
                            className={`size-1 rounded-full ${org.status === "Suspended" ? "bg-red-500" : org.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`}
                          />
                          {org.status}
                        </span>
                      </div>
                    </td>

                    {/* Col 6: Profile Record Inspect Triggers */}
                    <td className="py-4 px-6 text-right pr-8">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/organizations/${org?.id}`)
                          }
                          className="size-8 rounded-xl border border-slate-200/60 inline-flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-3xs bg-white cursor-pointer"
                          title="Inspect Registry Assets"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/admin/edit-organization/${org?.id}`)
                          }
                          className="size-8 rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm bg-white cursor-pointer"
                          title="Edit Parameters"
                        >
                          <Edit2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-36 px-6 text-center select-none"
                  >
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-4">
                      <div className="w-14 h-14 bg-slate-50 border border-slate-200/60 rounded-2xl flex items-center justify-center text-slate-400 shadow-3xs">
                        <Search
                          strokeWidth={1.75}
                          size={22}
                          className="text-slate-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                          No organizations found
                        </h3>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                          We couldn't find any enterprise entries matching your
                          current system criteria parameters.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        className="h-9 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-xl transition-all active:scale-95 cursor-pointer"
                      >
                        Clear System Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
