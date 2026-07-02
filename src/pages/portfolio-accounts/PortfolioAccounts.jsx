import React, { useState } from "react";
import {
  Plus,
  Search,
  Lock,
  Unlock,
  Eye,
  ShieldAlert,
  Coins,
  Building2,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PortfolioAccounts() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("ALL");

  const [categories] = useState([
    {
      id: "CAT-SHARES",
      category_name: "Share Capital",
      balance_sheet_type: "Equity Base",
      gl_ledger_classification_code: "3000-EQUITY-CORE",
      total_sub_products: 2,
      is_withdrawable: false,
      allow_partial_withdrawing: false,
      can_guarantee_loans: true,
      dividend_eligible: true,
      interest_bearing: false,
      regulatory_framework: "SASRA Cap 490 Tier 1 Core Capital",
      min_membership_tenure_months: 0,
      dormancy_threshold_months: 0,
      tax_withholding_rate_percent: 5.0,
      attributes: {
        min_units_required: 100,
        share_unit_price: 20.0,
        max_holding_limit_percent: 10.0,
        payout_frequency: "Annual General Meeting Approval",
      },
    },
    {
      id: "CAT-DEPOSITS",
      category_name: "Non-Withdrawable Deposits (BOSA)",
      balance_sheet_type: "Long-Term Liability",
      gl_ledger_classification_code: "2100-BOSA-DEPOSITS",
      total_sub_products: 3,
      is_withdrawable: false,
      allow_partial_withdrawing: false,
      can_guarantee_loans: true,
      dividend_eligible: false,
      interest_bearing: true,
      regulatory_framework: "SASRA Protected Member Deposits",
      min_membership_tenure_months: 3,
      dormancy_threshold_months: 6,
      tax_withholding_rate_percent: 15.0,
      attributes: {
        min_periodic_contribution: 1000.0,
        contribution_frequency: "Monthly",
        loan_multiplier_factor: 3.0,
        withdrawal_notice_days: 60,
      },
    },
    {
      id: "CAT-SAVINGS",
      category_name: "Withdrawable Savings (FOSA)",
      balance_sheet_type: "Current Liability",
      gl_ledger_classification_code: "2200-FOSA-SAVINGS",
      total_sub_products: 5,
      is_withdrawable: true,
      allow_partial_withdrawing: true,
      can_guarantee_loans: false,
      dividend_eligible: false,
      interest_bearing: true,
      regulatory_framework: "FOSA Operational Demand Liabilities",
      min_membership_tenure_months: 0,
      dormancy_threshold_months: 3,
      tax_withholding_rate_percent: 15.0,
      attributes: {
        min_periodic_contribution: 0.0,
        contribution_frequency: "Ad Hoc",
        loan_multiplier_factor: 0.0,
        withdrawal_notice_days: 0,
      },
    },
    {
      id: "CAT-TERM",
      category_name: "Fixed / Term Deposits",
      balance_sheet_type: "Time Liability",
      gl_ledger_classification_code: "2300-TIME-DEPOSITS",
      total_sub_products: 4,
      is_withdrawable: false,
      allow_partial_withdrawing: false,
      can_guarantee_loans: true,
      dividend_eligible: false,
      interest_bearing: true,
      regulatory_framework: "SASRA Term Contract Placements",
      min_membership_tenure_months: 0,
      dormancy_threshold_months: 0,
      tax_withholding_rate_percent: 15.0,
      attributes: {
        min_lock_duration_days: 90,
        max_lock_duration_days: 365,
        early_withdrawal_penalty_percent: 2.5,
        payout_frequency: "On Maturity",
      },
    },
    {
      id: "CAT-SPECIALIZED",
      category_name: "Specialized Purpose Saving Pools",
      balance_sheet_type: "Restricted Liability",
      gl_ledger_classification_code: "2400-EARMARKED-POOLS",
      total_sub_products: 3,
      is_withdrawable: true,
      allow_partial_withdrawing: true,
      can_guarantee_loans: false,
      dividend_eligible: false,
      interest_bearing: true,
      regulatory_framework: "Ecosystem Micro-Saving Mandates",
      min_membership_tenure_months: 1,
      dormancy_threshold_months: 12,
      tax_withholding_rate_percent: 10.0,
      attributes: {
        min_periodic_contribution: 500.0,
        contribution_frequency: "Flexible",
        loan_multiplier_factor: 1.0,
        withdrawal_notice_days: 7,
      },
    },
    {
      id: "CAT-RESERVES",
      category_name: "Institutional Reserve Funds",
      balance_sheet_type: "Equity Base",
      gl_ledger_classification_code: "3100-RESERVES-STATUTORY",
      total_sub_products: 2,
      is_withdrawable: false,
      allow_partial_withdrawing: false,
      can_guarantee_loans: false,
      dividend_eligible: false,
      interest_bearing: false,
      regulatory_framework: "SASRA Cap 490 Statutory Reserve Fund",
      min_membership_tenure_months: 0,
      dormancy_threshold_months: 0,
      tax_withholding_rate_percent: 0.0,
      attributes: {
        min_periodic_contribution: 0.0,
        contribution_frequency: "Annual Retained Appropriation",
        loan_multiplier_factor: 0.0,
        withdrawal_notice_days: 0,
      },
    },
    {
      id: "CAT-WELFARE",
      category_name: "Benevolent & Welfare Funds",
      balance_sheet_type: "Restricted Liability",
      gl_ledger_classification_code: "2500-WELFARE-BENEVOLENT",
      total_sub_products: 1,
      is_withdrawable: true,
      allow_partial_withdrawing: false,
      can_guarantee_loans: false,
      dividend_eligible: false,
      interest_bearing: false,
      regulatory_framework: "Internal Sacco Welfare Bylaws",
      min_membership_tenure_months: 1,
      dormancy_threshold_months: 6,
      tax_withholding_rate_percent: 0.0,
      attributes: {
        min_periodic_contribution: 200.0,
        contribution_frequency: "Monthly",
        loan_multiplier_factor: 0.0,
        withdrawal_notice_days: 1,
      },
    },
    {
      id: "CAT-JUNIOR",
      category_name: "Juvenile / Junior Savings Pools",
      balance_sheet_type: "Current Liability",
      gl_ledger_classification_code: "2600-JUNIOR-SAVINGS",
      total_sub_products: 2,
      is_withdrawable: true,
      allow_partial_withdrawing: true,
      can_guarantee_loans: false,
      dividend_eligible: false,
      interest_bearing: true,
      regulatory_framework: "FOSA Custodial Minor Accounts",
      min_membership_tenure_months: 0,
      dormancy_threshold_months: 24,
      tax_withholding_rate_percent: 10.0,
      attributes: {
        min_periodic_contribution: 250.0,
        contribution_frequency: "Flexible",
        loan_multiplier_factor: 0.0,
        withdrawal_notice_days: 0,
      },
    },
  ]);

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.category_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.balance_sheet_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.gl_ledger_classification_code
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      cat.regulatory_framework.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClassification === "ALL" ||
      cat.balance_sheet_type.includes(selectedClassification);
    return matchesSearch && matchesClass;
  });

  const getCategoryIcon = (id) => {
    switch (id) {
      case "CAT-SHARES":
        return <Building2 size={16} className="text-purple-600" />;
      case "CAT-DEPOSITS":
        return <Lock size={16} className="text-amber-600" />;
      case "CAT-SAVINGS":
        return <Unlock size={16} className="text-emerald-600" />;
      case "CAT-TERM":
        return <Briefcase size={16} className="text-blue-600" />;
      default:
        return <Coins size={16} className="text-primary" />;
    }
  };

  const getClassBadgeStyles = (sheetType) => {
    if (sheetType.includes("Equity"))
      return "bg-purple-50 text-purple-700 border-purple-200/60";
    if (sheetType.includes("Long-Term"))
      return "bg-amber-50 text-amber-700 border-amber-200/60";
    if (sheetType.includes("Current") || sheetType.includes("Restricted"))
      return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
    return "bg-blue-50 text-blue-700 border-blue-200/60";
  };

  return (
    <div className="bg-slate-50 text-slate-800 space-y-6">
      <div className="sm:w-full flex flex-row sm:flex-col justify-between items-start sm:items-start gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-primary mb-1">
            <span className="text-xs font-bold uppercase tracking-widest font-mono">
              Product Settings Overview
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Portfolio Accounts
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            View and manage the top-level rules for your SACCO savings, deposit,
            and capital accounts.
          </p>
        </div>

        <button
          onClick={() => navigate("/categories/create")}
          className="h-11 sm:w-full px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-primary/10 hover:bg-primary/90 active:scale-98 transition-all flex items-center gap-2 cursor-pointer self-stretch sm:self-auto justify-center font-semibold"
        >
          <Plus size={16} strokeWidth={2.5} />
          <span>Add a Portfolio Account</span>
        </button>
      </div>

      {/* DETAILED MAJOR CATEGORIES MATRIX TABLE */}
      <div className="bg-white border border-slate-200/80 rounded-2xl shadow-3xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="pl-5 pr-4 py-4.5 text-left">
                  Category & System ID
                </th>
                <th className="px-4 py-4.5 text-left">Accounting Group</th>
                <th className="px-4 py-4.5 text-left">Withdrawal Rules</th>
                <th className="px-4 py-4.5 text-left">Loan Security</th>
                <th className="px-4 py-4.5 text-center">Earnings Type</th>
                <th className="px-4 py-4.5 text-left">Timelines & Status</th>
                <th className="px-4 py-4.5 text-left truncate">Withholding Tax</th>
                <th className="pr-5 pl-4 py-4.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="hover:bg-slate-50/50 transition-colors h-16"
                  >
                    {/* Category Title & Identity code - Left Aligned */}
                    <td className="pl-5 pr-4 py-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/60 shrink-0">
                          {getCategoryIcon(category.id)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 text-sm tracking-tight">
                            {category.category_name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono font-bold mt-0.5">
                            {category.id}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Ledger/Balance Sheet Alignment - Left Aligned */}
                    <td className="px-4 py-3 text-left">
                      <span className="inline-block text-left align-top px-2 py-0.5 text-[10px] font-bold uppercase">
                        {category.balance_sheet_type}
                      </span>
                    </td>

                    {/* Withdrawal Liquidity Rules & Partials - Left Aligned */}
                    <td className="px-4 py-3 text-left">
                      <div className="flex flex-col gap-0.5">
                        <span
                          className={`text-[11px] font-bold ${category.is_withdrawable ? "text-emerald-600" : "text-amber-600"}`}
                        >
                          {category.is_withdrawable
                            ? "Allow Withdrawals"
                            : "Locked / Fixed"}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {category.allow_partial_withdrawing
                            ? "Partial withdrawals allowed"
                            : "Must be fully closed to withdraw"}
                        </span>
                      </div>
                    </td>

                    {/* Loan Guarantee Capacity - Center Aligned */}
                    <td className="px-4 py-3 text-left">
                      <span
                        className={`text-xs font-bold inline-flex items-center gap-1 mx-auto ${category.can_guarantee_loans ? "text-primary" : "text-slate-300"}`}
                      >
                        {category.can_guarantee_loans
                          ? "Can Back Loans"
                          : "Not Allowed for Loans"}
                      </span>
                    </td>

                    {/* Payout Mechanism Structure - Center Aligned */}
                    <td className="px-4 py-3 text-center">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        {category.dividend_eligible && (
                          <span className="text-[10px] text-purple-600 font-bold uppercase bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100">
                            Earns Dividends
                          </span>
                        )}
                        {category.interest_bearing && (
                          <span className="text-[10px] text-emerald-600 font-bold uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                            Earns Interest
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Structural Metrics Properties Matrix - Left Aligned */}
                    <td className="px-4 py-3 text-left">
                      <div className="flex flex-col text-[10px] text-slate-500 font-mono">
                        <span>
                          Min Membership:{" "}
                          {category.min_membership_tenure_months} months
                        </span>
                        <span>
                          Dormant After:{" "}
                          {category.dormancy_threshold_months === 0
                            ? "Never goes dormant"
                            : `${category.dormancy_threshold_months} months idle`}
                        </span>
                      </div>
                    </td>

                    {/* Tax Withholding Multipliers - Left Aligned */}
                    <td className="px-4 py-3 text-left text-slate-600 font-mono font-bold">
                      <div className="flex items-center gap-0.5 text-slate-700">
                        <span>
                          {category.tax_withholding_rate_percent.toFixed(2)}%
                          Tax
                        </span>
                      </div>
                    </td>

                    {/* Actions Icon-Only Drilldown Button - Center Aligned */}
                    <td className="pr-5 pl-4 py-3 text-center">
                      <button
                        onClick={() =>
                          navigate(`/portfolio/categories/${category.id}`)
                        }
                        className="size-8 text-slate-400 border border-slate-200 bg-white hover:border-primary hover:text-primary rounded-lg transition-all inline-flex items-center justify-center shadow-3xs cursor-pointer group"
                        title="View Products in This Category"
                      >
                        <Eye
                          size={14}
                          className="group-hover:scale-105 transition-transform"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                      <ShieldAlert size={28} className="text-slate-300" />
                      <p className="text-xs font-semibold">
                        No setup categories match your active search filter.
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
