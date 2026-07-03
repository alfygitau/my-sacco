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
  ArrowLeft,
  Loader2,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addOrganization } from "../../sdk/organizations/orgnaization";
import { useToast } from "../../contexts/ToastProvider";

export default function AddOrganization() {
  const navigate = useNavigate();
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
  const [errors, setErrors] = useState({});
  const { showToast } = useToast();

  const validateField = (name, value) => {
    let errorMsg = "";
    if (
      !value &&
      [
        "org_name",
        "org_code",
        "registration_number",
        "license_number",
        "registration_date",
        "email",
        "phone",
        "address",
        "city",
        "county",
        "description",
      ].includes(name)
    ) {
      errorMsg = "This tracking metadata parameter field is required.";
    } else {
      if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "Please enter a valid administrative email gateway URI.";
      }
      if (
        name === "phone" &&
        !/^\+?[1-9]\d{1,14}$/.test(value.replace(/\s+/g, ""))
      ) {
        errorMsg =
          "Invalid telephone format. Use standard international formatting.";
      }
      if (
        name === "logo_url" &&
        value &&
        !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
          value,
        )
      ) {
        errorMsg = "Please input a valid URL web locator path asset string.";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasErrors = false;
    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "string") {
        validateField(key, formData[key]);
        if (!formData[key] && key !== "logo_url") hasErrors = true;
      }
    });
    if (hasErrors) return;
    await mutate();
  };

  const { mutate, isLoading } = useMutation({
    mutationKey: ["add organization"],
    mutationFn: async () => {
      const response = await addOrganization(
        formData.org_code,
        formData.org_name,
        formData.org_type,
        formData.description,
        formData?.logo_url,
        formData.registration_number,
        formData.license_number,
        formData.registration_date,
        formData.email,
        formData.phone,
        formData.address,
        formData.city,
        formData.county,
        formData.country,
        formData.primary_currency,
        formData.timezone,
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      showToast({
        title: "Organization Registered",
        type: "success",
        position: "top-right",
        description: `${formData.org_name} has been successfully provisioned onto the ecosystem platform.`,
      });
      navigate("/admin/organizations");
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
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.org_name ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Building2 size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="org_name"
                    value={formData.org_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Baraka SACCO Ltd"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
                {errors.org_name && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.org_name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Organization Code
                  </label>
                  <div
                    className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.org_code ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                  >
                    <div className="px-3 text-slate-400 shrink-0">
                      <Hash size={16} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="org_code"
                      value={formData.org_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="BA208"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono font-bold uppercase"
                      required
                    />
                  </div>
                  {errors.org_code && (
                    <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                      {errors.org_code}
                    </p>
                  )}
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
                  Logo URL
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.logo_url ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Globe size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="url"
                    name="logo_url"
                    value={formData.logo_url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="https://cdn.example.com/logos/asset.png"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono"
                  />
                </div>
                {errors.logo_url && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.logo_url}
                  </p>
                )}
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
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.registration_number ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <FileText size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="registration_number"
                    value={formData.registration_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. CPR/2020/00123"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
                {errors.registration_number && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.registration_number}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Regulatory License Number
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.license_number ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Shield size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. SASRA/001/2021"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
                {errors.license_number && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.license_number}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Official Incorporation Date
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.registration_date ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="date"
                    name="registration_date"
                    value={formData.registration_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 font-medium cursor-pointer"
                    required
                  />
                </div>
                {errors.registration_date && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.registration_date}
                  </p>
                )}
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
                  Primary Email
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.email ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="info@company.co.ke"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Support Telephone
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.phone ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+254 20 1234567"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-mono"
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* CARD 4: REGIONAL LOGISTICS */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <MapPin size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900">
                Physical Location
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Postal / Street Address
                </label>
                <div
                  className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.address ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                >
                  <div className="px-3 text-slate-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="w-px h-5 bg-slate-200 shrink-0" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="P.O. Box 1234-00100, Nairobi"
                    className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                    required
                  />
                </div>
                {errors.address && (
                  <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    City
                  </label>
                  <div
                    className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.city ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                  >
                    <div className="px-3 text-slate-400 shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nairobi"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                      required
                    />
                  </div>
                  {errors.city && (
                    <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    County
                  </label>
                  <div
                    className={`flex items-center border rounded-xl bg-white overflow-hidden transition-all h-14 ${errors.county ? "border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-200"}`}
                  >
                    <div className="px-3 text-slate-400 shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div className="w-px h-5 bg-slate-200 shrink-0" />
                    <input
                      type="text"
                      name="county"
                      value={formData.county}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nairobi"
                      className="w-full h-full px-3 text-xs outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium"
                      required
                    />
                  </div>
                  {errors.county && (
                    <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                      {errors.county}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Country Code
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

          {/* CARD 6: DESCRIPTION / TEXTAREA REMOVED FROM PREFIX INPUT SYSTEM */}
          <div className="md:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-3xs space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Core Operation Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                placeholder="Describe the operational target mandate scope, target demographics, and localized community objectives of this node registry configuration..."
                className={`w-full p-4 text-xs font-medium border rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none transition-all resize-none leading-relaxed ${errors.description ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"}`}
                required
              />
              {errors.description && (
                <p className="text-[11px] font-semibold text-rose-500 mt-1.5 ml-1">
                  {errors.description}
                </p>
              )}
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
            type="submit"
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
