import React, { useState } from "react";
import { Eye, Edit2, Power, Layers, Plus } from "lucide-react";
import { useFormatAmount } from "../../hooks/useFormatAmount";

const formatSentenceCase = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function LoanProductsPage() {
  // 1. Instantiating state for fetching toggle & search strings to support fallback UI paths
  const [isFetching, setIsFetching] = useState(false);
  const [searchQuery] = useState("");
  const [activeTab] = useState("Core");
  const formatAmount = useFormatAmount();

  // 2. Initializing 8 static data products mirroring your schema requirements
  const [loanProducts, setLoanProducts] = useState([
    {
      id: "lp_001",
      product_code: "SL-01",
      product_name: "Salary Advance Loan",
      interest_rate: 3.5,
      interest_method: "FLAT_RATE",
      min_period: 1,
      max_period: 6,
      min_amount: 500,
      max_amount: 5000,
      min_guarantors: 0,
      insurance_rate: 1.0,
      is_active: true,
    },
    {
      id: "lp_002",
      product_code: "BL-04",
      product_name: "SME Micro Business Growth",
      interest_rate: 2.2,
      interest_method: "REDUCING_BALANCE",
      min_period: 6,
      max_period: 24,
      min_amount: 5000,
      max_amount: 50000,
      min_guarantors: 2,
      insurance_rate: 1.5,
      is_active: true,
    },
    {
      id: "lp_003",
      product_code: "EL-09",
      product_name: "Emergency Swift Relief",
      interest_rate: 5.0,
      interest_method: "AMORTIZED",
      min_period: 1,
      max_period: 3,
      min_amount: 100,
      max_amount: 1500,
      min_guarantors: 0,
      insurance_rate: 0.5,
      is_active: true,
    },
    {
      id: "lp_004",
      product_code: "AL-12",
      product_name: "Asset Financing / Motoring",
      interest_rate: 1.8,
      interest_method: "REDUCING_BALANCE",
      min_period: 12,
      max_period: 48,
      min_amount: 10000,
      max_amount: 120000,
      min_guarantors: 3,
      insurance_rate: 2.5,
      is_active: false,
    },
    {
      id: "lp_005",
      product_code: "AG-03",
      product_name: "Agribusiness Seasonal Capital",
      interest_rate: 2.0,
      interest_method: "FLAT_RATE",
      min_period: 3,
      max_period: 12,
      min_amount: 2000,
      max_amount: 25000,
      min_guarantors: 1,
      insurance_rate: 1.8,
      is_active: true,
    },
    {
      id: "lp_006",
      product_code: "ED-77",
      product_name: "EduPay Academic Financing",
      interest_rate: 1.5,
      interest_method: "AMORTIZED",
      min_period: 2,
      max_period: 10,
      min_amount: 300,
      max_amount: 8000,
      min_guarantors: 1,
      insurance_rate: 0.8,
      is_active: true,
    },
    {
      id: "lp_007",
      product_code: "PL-50",
      product_name: "Personal Unsecured Line",
      interest_rate: 4.2,
      interest_method: "FLAT_RATE",
      min_period: 6,
      max_period: 36,
      min_amount: 1000,
      max_amount: 20000,
      min_guarantors: 2,
      insurance_rate: 2.0,
      is_active: true,
    },
    {
      id: "lp_008",
      product_code: "ST-02",
      product_name: "Green Energy Solar Tech",
      interest_rate: 1.2,
      interest_method: "REDUCING_BALANCE",
      min_period: 6,
      max_period: 18,
      min_amount: 400,
      max_amount: 6000,
      min_guarantors: 0,
      insurance_rate: 0.5,
      is_active: false,
    },
  ]);

  // Mock local action handlers
  const handleToggleStatus = (id) => {
    setLoanProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_active: !item.is_active } : item,
      ),
    );
  };

  const handleNavigateMock = (path) => {
    console.log(`Navigating mock routing layer to: ${path}`);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-600 antialiased">
      <div className="sm:w-full flex flex-row sm:flex-col sm:items-start justify-between items-start mb-8 sm:items-start gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-primary mb-1">
            <span className="text-xs font-bold uppercase tracking-widest font-mono">
              Sacco Loans Overview
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Loan Products
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            View and manage the top-level rules for your SACCO loan products.
          </p>
        </div>

        <button className="h-11 sm:w-full px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-primary/10 hover:bg-primary/90 active:scale-98 transition-all flex items-center gap-2 cursor-pointer self-stretch sm:self-auto justify-center font-semibold">
          <Plus size={16} strokeWidth={2.5} />
          <span>Create Loan Product</span>
        </button>
      </div>
      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
        {/* Dynamic Interactive Controller Bar for Demo */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            {/* Table Header Structure */}
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase tracking-widest select-none">
                <th className="py-4.5 px-6">Product Code & Name</th>
                <th className="py-4.5 px-6">Interest Configuration</th>
                <th className="py-4.5 px-6">Tenor & Multiplier</th>
                <th className="py-4.5 px-6">Amounts Requirements</th>
                <th className="py-4.5 px-6">Underwriting Rules</th>
                <th className="py-4.5 px-6">Status</th>
                <th className="py-4.5 px-6 text-right pr-8">Actions</th>
              </tr>
            </thead>

            {/* Table Body Content Matrix */}
            <tbody className="divide-y divide-slate-100 text-xs">
              {isFetching ? (
                Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <tr
                      key={`product-skeleton-${index}`}
                      className="animate-pulse border-b border-slate-100 last:border-none"
                    >
                      {/* Column 1: Core Identification Assets Skeleton */}
                      <td className="py-4 px-6 max-w-xs">
                        <div className="flex flex-col gap-1.5">
                          <div className="h-4 w-14 bg-slate-200 rounded-md" />
                          <div className="h-4 w-40 bg-slate-200 rounded" />
                        </div>
                      </td>

                      {/* Column 2: Interest Parameter Models Skeleton */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1.5">
                          <div className="h-4 w-12 bg-slate-200 rounded" />
                          <div className="h-3 w-24 bg-slate-100 rounded" />
                        </div>
                      </td>

                      {/* Column 3: Amortization Framing Tiers Skeleton */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1.5">
                          <div className="h-4 w-16 bg-slate-200 rounded" />
                          <div className="h-3 w-16 bg-slate-100 rounded" />
                        </div>
                      </td>

                      {/* Column 4: Dynamic Capital Range Limits Skeleton */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1.5">
                          <div className="h-4 w-28 bg-slate-200 rounded" />
                          <div className="h-3 w-20 bg-slate-100 rounded" />
                        </div>
                      </td>

                      {/* Column 5: Legal Risk Contingencies Skeleton */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1.5">
                          <div className="h-4 w-24 bg-slate-200 rounded" />
                          <div className="h-3.5 w-20 bg-slate-100 rounded" />
                        </div>
                      </td>

                      {/* Column 6: Status Allocation Indicator Flags Skeleton */}
                      <td className="py-4 px-6 align-middle">
                        <div className="h-6 w-16 bg-slate-100 rounded-full" />
                      </td>

                      {/* Column 7: Operational Admin Utilities Skeleton */}
                      <td className="py-4 px-6 text-right pr-8 align-middle">
                        <div className="flex items-center justify-end gap-1.5">
                          <div className="size-8 rounded-xl bg-slate-100 border border-slate-200/30 shrink-0" />
                          <div className="size-8 rounded-xl bg-slate-100 border border-slate-200/30 shrink-0" />
                          <div className="size-8 rounded-xl bg-slate-100 border border-slate-200/30 shrink-0" />
                        </div>
                      </td>
                    </tr>
                  ))
              ) : loanProducts?.length > 0 ? (
                loanProducts?.map((product) => (
                  <tr
                    key={product.id}
                    className={`group transition-colors hover:bg-slate-50/60 ${
                      !product.is_active ? "bg-slate-50/20" : ""
                    }`}
                  >
                    {/* Column 1: Core Identification Assets */}
                    <td className="py-4 px-6 max-w-xs">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[10px] tracking-wide uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                            {product.product_code}
                          </span>
                        </div>
                        <span className="font-bold text-slate-800 text-sm tracking-tight truncate transition-colors">
                          {product.product_name}
                        </span>
                      </div>
                    </td>

                    {/* Column 2: Interest Parameter Models */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-bold font-sans text-slate-700 text-sm">
                          {Number(product.interest_rate).toFixed(1)} p/m
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                          {formatSentenceCase(product?.interest_method)}
                        </span>
                      </div>
                    </td>

                    {/* Column 3: Amortization Framing Tiers */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700">
                          {product.min_period} Months
                        </span>
                        <span className="text-[11px] text-primary font-bold tracking-wide mt-0.5">
                          {product.max_period} Months
                        </span>
                      </div>
                    </td>

                    {/* Column 4: Dynamic Capital Range Limits */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <div className="text-slate-700 font-medium">
                          Max:{" "}
                          <span className="font-bold">
                            {formatAmount(product.max_amount)}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                          Min Floor: {formatAmount(product.min_amount)}
                        </div>
                      </div>
                    </td>

                    {/* Column 5: Legal Risk Contingencies */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-700">
                          {product.min_guarantors} Guarantors
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                          Insurance: {Number(product.insurance_rate).toFixed(1)}
                          %
                        </span>
                      </div>
                    </td>

                    {/* Column 6: Status Allocation Indicator Flags */}
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                          product.is_active
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${product.is_active ? "bg-emerald-500" : "bg-slate-400"}`}
                        />
                        {product.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Column 7: Operational Admin Utilities */}
                    <td className="py-4 px-6 text-right pr-8">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          className="size-8 rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm bg-white"
                          title="View Extended Rules"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() =>
                            handleNavigateMock("/admin/edit-loan-product")
                          }
                          className="size-8 rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm bg-white"
                          title="Edit Parameters"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleToggleStatus(product.id)}
                          className={`size-8 rounded-xl border flex items-center justify-center transition-all shadow-sm bg-white ${
                            product.is_active
                              ? "border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-200"
                              : "border-emerald-100 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200"
                          }`}
                          title={
                            product.is_active
                              ? "Deactivate Product"
                              : "Activate Product"
                          }
                        >
                          <Power size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 px-6">
                    <div className="bg-white rounded-[28px] p-24 text-center">
                      <div className="size-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 mx-auto mb-4">
                        <Layers size={22} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                        No configured products found
                      </h3>
                      <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto mt-2 leading-relaxed">
                        There are no product profiles matching "{searchQuery}"
                        under the current {activeTab} framework toggle index.
                      </p>
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
