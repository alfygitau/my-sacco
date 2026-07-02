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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Organizations() {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const [organizations, setOrganizations] = useState([
    {
      id: "org-1",
      org_code: "BA208",
      org_name: "Baraka SACCO Ltd",
      org_type: "SACCO",
      description: "Community-based SACCO serving Nairobi West members",
      logo_url: "https://cdn.example.com/logos/ba208.png",
      registration_number: "CPR/2020/00123",
      license_number: "SASRA/001/2021",
      registration_date: "2020-01-15",
      email: "info@barakasacco.co.ke",
      phone: "+254 20 1234567",
      address: "P.O. Box 1234-00100, Nairobi",
      city: "Nairobi",
      county: "Nairobi",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Active",
      settings: {
        sms_notifications: true,
        max_guarantors: 5,
      },
    },
    {
      id: "org-2",
      org_code: "MS441",
      org_name: "Mshiriki Transport Co-op",
      org_type: "Cooperative",
      description:
        "Public transport investment guild managing long-distance fleets",
      logo_url: "",
      registration_number: "CS/2018/40922",
      license_number: "NTSA/L-0442-26",
      registration_date: "2018-06-11",
      email: "operations@mshirikicoop.com",
      phone: "+254 711 223344",
      address: "Mombasa Road, Shell Complex, Ground Flr",
      city: "Mombasa",
      county: "Mombasa",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Suspended",
      settings: {
        sms_notifications: false,
        max_guarantors: 3,
      },
    },
    {
      id: "org-3",
      org_code: "GF112",
      org_name: "Greenfield Agribusiness",
      org_type: "Union",
      description: "Dairy and cereal aggregator supporting smallholder farmers",
      logo_url: "https://cdn.example.com/logos/gf112.png",
      registration_number: "CPR/2022/99231",
      license_number: "AFA/CROP/2022-88",
      registration_date: "2022-11-04",
      email: "support@greenfieldagri.org",
      phone: "+254 51 8839201",
      address: "P.O. Box 450-20100, Nakuru",
      city: "Nakuru",
      county: "Nakuru",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Pending",
      settings: {
        sms_notifications: true,
        max_guarantors: 4,
      },
    },
    {
      id: "org-4",
      org_code: "AA884",
      org_name: "Afya Apex Medical SACCO",
      org_type: "SACCO",
      description:
        "Institutional financial vehicle for private sector clinical practitioners",
      logo_url: "https://cdn.example.com/logos/aa884.png",
      registration_number: "CPR/2015/00452",
      license_number: "SASRA/094/2016",
      registration_date: "2015-08-20",
      email: "finance@afyaapex.co.ke",
      phone: "+254 20 8877665",
      address: "Upperhill Medical Suites, 4th Floor",
      city: "Nairobi",
      county: "Nairobi",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Active",
      settings: {
        sms_notifications: true,
        max_guarantors: 6,
      },
    },
    {
      id: "org-5",
      org_code: "BV201",
      org_name: "BodaBoda Ventures Elite",
      org_type: "Micro-Finance",
      description:
        "Asset financing enterprise targeting riders within the transit ecosystem",
      logo_url: "",
      registration_number: "CPR/2021/88341",
      license_number: "CBK/MFI/2023-012",
      registration_date: "2021-03-30",
      email: "admin@bodaventures.co.ke",
      phone: "+254 722 000111",
      address: "Kisumu Road Plaza, Wing B",
      city: "Eldoret",
      county: "Uasin Gishu",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Pending",
      settings: {
        sms_notifications: true,
        max_guarantors: 2,
      },
    },
    {
      id: "org-6",
      org_code: "HD732",
      org_name: "Hazina Digital Workers",
      org_type: "SACCO",
      description:
        "Virtual SACCO specializing in financial packages for tech freelancers",
      logo_url: "https://cdn.example.com/logos/hd732.png",
      registration_number: "CS/2024/99102",
      license_number: "SASRA/311/2024",
      registration_date: "2024-02-14",
      email: "hello@hazina.digital",
      phone: "+254 700 999888",
      address: "The Jenga Space, Kilimani",
      city: "Nairobi",
      county: "Nairobi",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Active",
      settings: {
        sms_notifications: true,
        max_guarantors: 4,
      },
    },
    {
      id: "org-7",
      org_code: "IW504",
      org_name: "Imara Women Investment",
      org_type: "Chama",
      description:
        "Pooled fund micro-credit network empowering local trading groups",
      logo_url: "",
      registration_number: "REG/WI/2019-332",
      license_number: "KRA/EX-09221",
      registration_date: "2019-09-01",
      email: "treasury@imarawomen.or.ke",
      phone: "+254 57 2021443",
      address: "Mega Plaza Block C, Oginga Odinga St",
      city: "Kisumu",
      county: "Kisumu",
      country: "KE",
      primary_currency: "KES",
      timezone: "Africa/Nairobi",
      status: "Active",
      settings: {
        sms_notifications: false,
        max_guarantors: 8,
      },
    },
    {
      id: "org-8",
      org_code: "ST092",
      org_name: "Starlight Diaspora Investment",
      org_type: "Cooperative",
      description: "Real estate investment conduit for citizens living abroad",
      logo_url: "https://cdn.example.com/logos/st092.png",
      registration_number: "CS/2017/08321",
      license_number: "SASRA/022/2018",
      registration_date: "2017-04-18",
      email: "invest@starlightdiaspora.com",
      phone: "+1 202 555 0199",
      address: "Suite 400, K-Street NW",
      city: "Washington DC",
      county: "District of Columbia",
      country: "US",
      primary_currency: "USD",
      timezone: "America/New_York",
      status: "Active",
      settings: {
        sms_notifications: true,
        max_guarantors: 0,
      },
    },
  ]);

  const handleResetFilters = () => {
    console.log("Resetting search filters...");
  };

  const handleAddOrganization = () => {
    navigate("/admin/add-organization");
  };

  return (
    <div className="space-y-6 bg-slate-50 text-slate-800">
      {/* Dynamic Action Header Unit */}
      <div className="flex flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200/80 p-5 rounded-2xl shadow-3xs">
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
          className="inline-flex items-center gap-1.5 h-10 px-4 bg-primary hover:bg-primary text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
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
                [...Array(5)].map((_, index) => (
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
                            {org.settings.sms_notifications ? "ON" : "OFF"}
                          </span>
                          <span className="text-[8px] font-extrabold uppercase tracking-wider px-1.5 py-0.25 rounded-sm bg-slate-100 text-slate-600">
                            Guarantors Ceiling: {org.settings.max_guarantors}
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
                      <button
                        onClick={() =>
                          console.log(
                            `Navigating to profile directory detail node view for ID: ${org.id}`,
                          )
                        }
                        className="size-8 rounded-xl border border-slate-200/60 inline-flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-3xs bg-white cursor-pointer"
                        title="Inspect Registry Assets"
                      >
                        <Eye size={14} />
                      </button>
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
