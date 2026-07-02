import React, { useState } from "react";
import {
  Building2,
  Hash,
  FileText,
  Shield,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
  DollarSign,
  Clock,
  MessageSquare,
  Users,
  ArrowLeft,
  Save,
  Loader2,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddOrganization() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    org_code: "",
    org_name: "",
    org_type: "SACCO",
    description: "",
    logo_url: "",
    registration_number: "",
    license_number: "",
    registration_date: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    country: "KE",
    primary_currency: "KES",
    timezone: "Africa/Nairobi",
    sms_notifications: true,
    max_guarantors: 5,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      org_code: formData.org_code,
      org_name: formData.org_name,
      org_type: formData.org_type,
      description: formData.description,
      logo_url: formData.logo_url,
      registration_number: formData.registration_number,
      license_number: formData.license_number,
      registration_date: formData.registration_date,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      county: formData.county,
      country: formData.country,
      primary_currency: formData.primary_currency,
      timezone: formData.timezone,
      settings: {
        sms_notifications: formData.sms_notifications,
        max_guarantors: Number(formData.max_guarantors),
      },
    };
    console.log("Submitting structured payload: ", payload);
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Navigation / Action Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="size-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Register Organization
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Onboard a new enterprise node onto the ecosystem platform.
              </p>
            </div>
          </div>
        </div>

        {/* Form Category Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1: IDENTITY PROFILE */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Building2 size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Profile & Identity Meta
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Organization Name
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Building2 size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="org_name"
                    value={formData.org_name}
                    onChange={handleChange}
                    placeholder="e.g. Baraka SACCO Ltd"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    System Identifier Code
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                    <div className="px-3 text-slate-400 shrink-0">
                      <Hash size={16} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="org_code"
                      value={formData.org_code}
                      onChange={handleChange}
                      placeholder="BA208"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono font-bold uppercase"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Organization Type
                  </label>
                  <div className="relative flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                    {/* Prefix Icon */}
                    <div className="px-4 text-slate-400 shrink-0 flex items-center justify-center">
                      <FileText size={16} />
                    </div>

                    {/* Vertical Separator */}
                    <div className="w-px h-6 bg-slate-200 shrink-0" />

                    {/* Select Input Engine */}
                    <select
                      name="org_type"
                      value={formData.org_type}
                      onChange={handleChange}
                      className="w-full h-full pl-4 pr-12 text-xs outline-none bg-transparent text-slate-800 font-semibold cursor-pointer appearance-none z-10"
                    >
                      <option value="SACCO">SACCO</option>
                      <option value="Cooperative">Cooperative</option>
                      <option value="Union">Union</option>
                      <option value="Chama">Chama</option>
                      <option value="Micro-Finance">Micro-Finance</option>
                    </select>

                    {/* Controlled Placement Chevron Dropdown Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-0 flex items-center">
                      <ChevronDown size={15} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Logo URL Asset
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Globe size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="url"
                    name="logo_url"
                    value={formData.logo_url}
                    onChange={handleChange}
                    placeholder="https://cdn.example.com/logos/asset.png"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: COMPLIANCE & LEGAL PAPERS */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Shield size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Regulatory & Compliance
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Registration Number
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <FileText size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="registration_number"
                    value={formData.registration_number}
                    onChange={handleChange}
                    placeholder="e.g. CPR/2020/00123"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Regulatory Operating License
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Shield size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleChange}
                    placeholder="e.g. SASRA/001/2021"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Official Incorporation Date
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="date"
                    name="registration_date"
                    value={formData.registration_date}
                    onChange={handleChange}
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 font-medium cursor-pointer"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: COMMUNICATIONS */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Mail size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Communication Channels
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Primary Email Gateway
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="info@company.co.ke"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Support Telephone Hotline
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 20 1234567"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: REGIONAL LOGISTICS */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <MapPin size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Physical Node & Localization
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Postal / Street Address
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="P.O. Box 1234-00100, Nairobi"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    City Node
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                    <div className="px-3 text-slate-400 shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Nairobi"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    County Allocation
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                    <div className="px-3 text-slate-400 shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="county"
                      value={formData.county}
                      onChange={handleChange}
                      placeholder="Nairobi"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Country Iso
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden h-14">
                    <div className="px-2.5 text-slate-400">
                      <Globe size={14} />
                    </div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      readOnly
                      className="w-full h-full px-2 text-xs bg-transparent text-slate-500 outline-none font-mono font-bold select-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Base Currency
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden h-14">
                    <div className="px-2.5 text-slate-400">
                      <DollarSign size={14} />
                    </div>
                    <input
                      type="text"
                      name="primary_currency"
                      value={formData.primary_currency}
                      readOnly
                      className="w-full h-full px-2 text-xs bg-transparent text-slate-500 outline-none font-mono font-bold select-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Timezone
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden h-14">
                    <div className="px-2.5 text-slate-400">
                      <Clock size={14} />
                    </div>
                    <input
                      type="text"
                      name="timezone"
                      value={formData.timezone}
                      readOnly
                      className="w-full h-full px-2 text-xs bg-transparent text-slate-400 outline-none truncate font-medium select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5: ENGINE CONFIG SETTINGS (Span columns full width) */}
          <div className="md:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <Users size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Global Settings Parameters
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Max Guarantors Threshold
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden transition-all h-14">
                  <div className="px-3 text-slate-400 shrink-0">
                    <Users size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="number"
                    name="max_guarantors"
                    value={formData.max_guarantors}
                    onChange={handleChange}
                    min={1}
                    max={20}
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 font-mono font-bold"
                  />
                </div>
              </div>

              <div className="flex items-center h-full pt-5 sm:pt-0">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="sms_notifications"
                    checked={formData.sms_notifications}
                    onChange={handleChange}
                    className="size-4.5 rounded-md border-slate-300 text-primary focus:ring-indigo-500 accent-primary"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      Automated SMS Notification Engine
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Trigger systemic lifecycle text webhooks to registered
                      endpoints automatically.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* CARD 6: DESCRIPTION / TEXTAREA REMOVED FROM PREFIX INPUT SYSTEM */}
          <div className="md:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Core Operation Dossier Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe the operational target mandate scope, target demographics, and localized community objectives of this node registry configuration..."
                className="w-full p-4 text-xs font-medium border border-slate-200 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none leading-relaxed"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[24px] border border-slate-200/60 p-4 flex items-center justify-end gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="h-11 px-5 border border-slate-200/80 bg-white text-slate-600 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isLoading} // Prevents double-clicking while loading
            className="h-11 px-6 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all active:scale-97 flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{isLoading ? "Processing..." : "Save Organization"}</span>

            {isLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <ArrowUpRight size={14} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
