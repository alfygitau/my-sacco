import React from "react";
import {
  Building2,
  Wallet,
  HandCoins,
  Paintbrush,
  UserCog,
  Sliders,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Homepage() {
  // --- 1. ORGANIZATIONS (7 Items) ---
  const organizations = [
    {
      name: "Starlight Diaspora SACCO",
      id: "SAC-092",
      mgr: "Amos N.",
      status: "Active",
      type: "success",
    },
    {
      name: "Mshiriki Transport Co-op",
      id: "SAC-441",
      mgr: "Faith M.",
      status: "Missing Brand Logo",
      type: "warning",
    },
    {
      name: "Greenfield Agribusiness",
      id: "SAC-112",
      mgr: "David O.",
      status: "Setting Up Accounts",
      type: "info",
    },
    {
      name: "Afya Apex Medical SACCO",
      id: "SAC-884",
      mgr: "Dr. Clara W.",
      status: "Active",
      type: "success",
    },
    {
      name: "BodaBoda Ventures Elite",
      id: "SAC-201",
      mgr: "Kevin K.",
      status: "Awaiting Review",
      type: "warning",
    },
    {
      name: "Hazina Digital Workers",
      id: "SAC-732",
      mgr: "Nelly A.",
      status: "Active",
      type: "success",
    },
    {
      name: "Imara Women Investment",
      id: "SAC-504",
      mgr: "Grace T.",
      status: "Drafting",
      type: "info",
    },
  ];

  // --- 2. PORTFOLIO ACCOUNTS (7 Items) ---
  const portfolios = [
    {
      tier: "FOSA Main Share Savings",
      target: "All Tenants",
      funds: "KES 84.2M",
      min: "KES 1,000",
    },
    {
      tier: "Diaspora Fixed Investment",
      target: "International",
      funds: "KES 38.6M",
      min: "KES 10,000",
    },
    {
      tier: "Mshiriki Daily Asset Float",
      target: "Transport",
      funds: "KES 20.0M",
      min: "KES 500",
    },
    {
      tier: "Afya Emergency Premium",
      target: "Medical Sector",
      funds: "KES 42.1M",
      min: "KES 2,500",
    },
    {
      tier: "Junior Star Growth Vault",
      target: "Minor Accounts",
      funds: "KES 12.8M",
      min: "KES 200",
    },
    {
      tier: "Hazina Multi-Asset Fund",
      target: "Tech Workers",
      funds: "KES 19.4M",
      min: "KES 1,500",
    },
    {
      tier: "Imara Group Micro-Lease",
      target: "Chamas/Groups",
      funds: "KES 8.9M",
      min: "KES 5,000",
    },
  ];

  // --- 3. LOAN PRODUCTS (7 Items) ---
  const loans = [
    {
      name: "Emergency Mobile Advance",
      rate: "1.2% p.m",
      duration: "30 Days",
      guarantors: "None",
    },
    {
      name: "Development / Asset Loan",
      rate: "8.5% p.a",
      duration: "36 Mos",
      guarantors: "3 Min",
    },
    {
      name: "Agri-Input Credit Line",
      rate: "4.0% p.a",
      duration: "6 Mos",
      guarantors: "1 Min",
    },
    {
      name: "Biashara Growth Capital",
      rate: "12.0% p.a",
      duration: "24 Mos",
      guarantors: "2 Min",
    },
    {
      name: "Med-Equipment Asset Lease",
      rate: "7.2% p.a",
      duration: "48 Mos",
      guarantors: "Corporate",
    },
    {
      name: "Snafu Logistical Overdraft",
      rate: "2.5% p.m",
      duration: "90 Days",
      guarantors: "1 Min",
    },
    {
      name: "Chama Group Micro Loan",
      rate: "10.5% p.a",
      duration: "12 Mos",
      guarantors: "All Members",
    },
  ];

  // --- 4. THEMES & BRANDING (7 Items) ---
  const branding = [
    {
      domain: "starlight.saccobase.ch",
      primary: "#042159",
      secondary: "#4DB8E4",
      status: "Live",
      type: "success",
    },
    {
      domain: "mshiriki.saccobase.ch",
      primary: "#10B981",
      secondary: "#F59E0B",
      status: "Missing Logo",
      type: "warning",
    },
    {
      domain: "greenfield.saccobase.ch",
      primary: "#1E293B",
      secondary: "#64748B",
      status: "Setup Pending",
      type: "info",
    },
    {
      domain: "afyaapex.saccobase.ch",
      primary: "#074073",
      secondary: "#E2E8F0",
      status: "Live",
      type: "success",
    },
    {
      domain: "bodaboda.saccobase.ch",
      primary: "#EF4444",
      secondary: "#1E293B",
      status: "Live",
      type: "success",
    },
    {
      domain: "hazina.saccobase.ch",
      primary: "#F59E0B",
      secondary: "#020D23",
      status: "Reviewing",
      type: "warning",
    },
    {
      domain: "imara.saccobase.ch",
      primary: "#7C3AED",
      secondary: "#F472B6",
      status: "Drafting",
      type: "info",
    },
  ];

  // --- 5. ADMIN USERS (7 Items) ---
  const users = [
    {
      name: "Amos Njuguna",
      role: "Super Admin",
      target: "Starlight Diaspora",
      access: "Full Control",
    },
    {
      name: "Faith Mutua",
      role: "Loan Auditor",
      target: "Mshiriki Transport",
      access: "Read/Write Credit",
    },
    {
      name: "David Ochieng",
      role: "System Manager",
      target: "Greenfield Agri",
      access: "Setup Modules",
    },
    {
      name: "Dr. Clara W.",
      role: "Org Administrator",
      target: "Afya Apex Med",
      access: "Full Control",
    },
    {
      name: "Kevin Kamau",
      role: "Support Staff",
      target: "BodaBoda Ventures",
      access: "Read-Only Tier",
    },
    {
      name: "Nelly Awour",
      role: "Ops Director",
      target: "Hazina Digital",
      access: "Full Control",
    },
    {
      name: "Grace Toili",
      role: "Credit Controller",
      target: "Imara Women Inv",
      access: "Approval Auth",
    },
  ];

  // --- 6. SYSTEM PREFERENCES (7 Items) ---
  const preferences = [
    {
      key: "global_transaction_ceiling",
      value: "KES 500,000 / Day",
      scope: "Security Guardrail",
      state: "Enforced",
    },
    {
      key: "mfa_requirement_policy",
      value: "Mandatory for Admins",
      scope: "Access Control",
      state: "Active",
    },
    {
      key: "sms_gateway_provider",
      value: "Africa's Talking API",
      scope: "Notifications",
      state: "Connected",
    },
    {
      key: "automatic_dividend_split",
      value: "Triggered on June 30",
      scope: "Ledger Engine",
      state: "Scheduled",
    },
    {
      key: "failed_login_lockout_limit",
      value: "3 Maximum Attempts",
      scope: "System Security",
      state: "Enforced",
    },
    {
      key: "white_label_asset_caching",
      value: "Redis Layer V4 Edge",
      scope: "Performance",
      state: "Active",
    },
    {
      key: "audit_trail_retention_days",
      value: "365 Days Rolling",
      scope: "Compliance Rule",
      state: "Active",
    },
  ];

  return (
    <div className="space-y-6 bg-slate-50 text-slate-800">
      {/* Header Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Overview and real-time management of your 7 core organizational
            system modules.
          </p>
        </div>
        <button className="px-4 py-2 bg-primary hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all shadow-sm">
          + Initialize Workspace
        </button>
      </div>

      {/* Main Responsive Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* --- BLOCK 1: ORGANIZATIONS --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-primary rounded-lg">
                  <Building2 size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Organizations Directory
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Master profiles for onboarded corporate entities.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Manage <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">SACCO Title</th>
                    <th className="py-3 px-4">System Code</th>
                    <th className="py-3 px-4">Manager</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {organizations.map((org, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {org.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500">
                        {org.id}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{org.mgr}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                            org.type === "success"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                              : org.type === "warning"
                                ? "bg-amber-50 text-amber-700 border border-amber-200/50"
                                : "bg-sky-50 text-sky-700 border border-sky-200/50"
                          }`}
                        >
                          {org.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- BLOCK 2: PORTFOLIO ACCOUNTS --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                  <Wallet size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Portfolio Accounts
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Core financial ledger schemes and liquidities.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Ledger <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Account Scheme</th>
                    <th className="py-3 px-4">Target Scope</th>
                    <th className="py-3 px-4">Total Value</th>
                    <th className="py-3 px-4">Min Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {portfolios.map((port, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {port.tier}
                      </td>
                      <td className="py-3 px-4 text-slate-500">
                        {port.target}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-800">
                        {port.funds}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-400">
                        {port.min}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- BLOCK 3: LOAN PRODUCTS --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <HandCoins size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Loan Products
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Interest structures, repayment timelines, and parameters.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Rules <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Product Name</th>
                    <th className="py-3 px-4">Rate Matrix</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Guarantors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loans.map((loan, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {loan.name}
                      </td>
                      <td className="py-3 px-4 text-emerald-600 font-semibold">
                        {loan.rate}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {loan.duration}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-slate-100 border text-slate-600 px-2 py-0.5 rounded text-[11px] font-medium">
                          {loan.guarantors}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- BLOCK 4: THEMES & BRANDING --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Paintbrush size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Themes & Custom Branding
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Tenant subdomains paired with layout color assets.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Styles <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Assigned Domain</th>
                    <th className="py-3 px-4">Primary RGB</th>
                    <th className="py-3 px-4">Secondary RGB</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {branding.map((brand, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-slate-600">
                        {brand.domain}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span
                            className="w-3 h-3 rounded border shadow-sm"
                            style={{ backgroundColor: brand.primary }}
                          />{" "}
                          {brand.primary}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span
                            className="w-3 h-3 rounded border shadow-sm"
                            style={{ backgroundColor: brand.secondary }}
                          />{" "}
                          {brand.secondary}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-[11px] font-semibold ${brand.type === "success" ? "text-emerald-600" : brand.type === "warning" ? "text-amber-600" : "text-slate-400"}`}
                        >
                          {brand.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- BLOCK 5: ADMIN USERS --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
                  <UserCog size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Team Members & Permissions
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Personnel profiles and assigned clearance structures.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Access <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">User Name</th>
                    <th className="py-3 px-4">Role Assigned</th>
                    <th className="py-3 px-4">Scope Allocation</th>
                    <th className="py-3 px-4">Clearance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((user, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {user.name}
                      </td>
                      <td className="py-3 px-4 text-indigo-700 font-medium">
                        {user.role}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {user.target}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-slate-50 border text-slate-600 px-2 py-0.5 rounded text-[11px] font-mono">
                          {user.access}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- BLOCK 6: SYSTEM PREFERENCES --- */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg">
                  <Sliders size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    System Parameters
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Global settings rules, background operations, and
                    boundaries.
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-indigo-700 flex items-center gap-1">
                Configure <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Variable Key</th>
                    <th className="py-3 px-4">Runtime Value</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {preferences.map((pref, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-purple-950 text-[11px]">
                        {pref.key}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-800">
                        {pref.value}
                      </td>
                      <td className="py-3 px-4 text-slate-400">{pref.scope}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                          <ShieldCheck size={14} /> {pref.state}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
