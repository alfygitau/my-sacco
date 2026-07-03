import React, { useState } from "react";
import {
  ArrowLeft,
  Coins,
  Percent,
  ShieldAlert,
  GitMerge,
  Briefcase,
  Layers,
  Calendar,
  DollarSign,
} from "lucide-react";
import { useQuery } from "react-query";
import { useToast } from "../../contexts/ToastProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getLoanProduct } from "../../sdk/loan-products/loan-products";

export default function LoanProductProfile() {
  const { showToast } = useToast();
  const { id } = useParams();
  const [loanProduct, setLoanProduct] = useState({});
  const navigate = useNavigate();

  const formatPeriodKey = (key) => {
    if (key === "pm") return "Per Month";
    if (key === "pa") return "Per Annum";
    if (key === "pw") return "Per Week";
    return key;
  };

  const { isFetching } = useQuery({
    queryKey: ["get loan product", id],
    queryFn: async () => {
      const response = await getLoanProduct(id);
      return response.data?.data;
    },
    onSuccess: (data) => {
      setLoanProduct(data);
    },
    onError: (error) => {
      showToast({
        title: "Loan product processing failed",
        type: "error",
        position: "top-right",
        description: error?.response?.data?.message || error.message,
      });
    },
  });

  if (isFetching) {
    return (
      <div className="w-full space-y-6 animate-pulse">
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
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs"
          >
            <div className="h-4 w-48 bg-slate-200 rounded mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SkeletonDetailRow />
              <SkeletonDetailRow />
              <SkeletonDetailRow />
              <SkeletonDetailRow />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // 2. STABLE DATA-HYDRATED RENDER STATE
  return (
    <div className="w-full space-y-6">
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="size-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all cursor-pointer shadow-3xs"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <p className="text-xs font-mono text-slate-400 mt-0.5 uppercase">
              {loanProduct?.org_code || "GLOBAL"} •{" "}
              {loanProduct?.product_code || "UNKNOWN_CODE"}
            </p>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                {loanProduct?.product_name || "Loan Product Specs"}
              </h1>
              <span
                className={`text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded border ${
                  loanProduct?.is_active
                    ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                    : "bg-red-50 border-red-100 text-red-600"
                }`}
              >
                {loanProduct?.is_active ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              System parameter matrix configuration for underwriting, credit
              limits, and penalties.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: SYSTEM SPECIFICATIONS & CORE DATA */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Product Specs & Core Dimensions"
          icon={<Briefcase size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow label="Product Name" value={loanProduct?.product_name} />
          <DetailRow
            label="Product Code"
            value={loanProduct?.product_code}
            isMono={true}
          />
          <DetailRow label="Loan Mode" value={loanProduct?.loan_mode} />
          <DetailRow
            label="Supported Currencies"
            value={loanProduct?.allowed_currencies?.join(", ")}
          />

          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex flex-col space-y-1">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Product Core Summary
              </span>
              <p className="text-xs font-medium text-slate-600 leading-relaxed bg-slate-50/50 rounded-xl p-3 border border-slate-100/60">
                {loanProduct?.description || "No registry description defined."}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Terms & Conditions Metadata
              </span>
              <p className="text-xs font-medium text-slate-600 leading-relaxed bg-slate-50/50 rounded-xl p-3 border border-slate-100/60">
                {loanProduct?.terms_and_conditions ||
                  "Default legal policies apply."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PRINCIPAL VALUES & LIMIT ENGINES */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Principal Boundaries & Limit Matrix Engines"
          icon={<Coins size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow
            label="Minimum Amount Allowed"
            value={loanProduct?.min_amount}
          />
          <DetailRow
            label="Maximum Amount Allowed"
            value={loanProduct?.max_amount}
          />
          <DetailRow
            label="Minimum Duration"
            value={`${loanProduct?.min_period} (${formatPeriodKey(loanProduct?.duration_key)})`}
          />
          <DetailRow
            label="Maximum Duration"
            value={`${loanProduct?.max_period} (${formatPeriodKey(loanProduct?.duration_key)})`}
          />

          <div className="md:col-span-4 p-4 bg-slate-50/60 rounded-2xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <DetailRow
              label="Limit Evaluation Algorithm"
              value={loanProduct?.limit_algorithm}
            />
            <DetailRow
              label="Evaluation Basis Target"
              value={loanProduct?.limit_multiplier_basis}
            />
            <DetailRow
              label="Starting Base Principal Limit"
              value={loanProduct?.limit_start_amount}
            />
            <DetailRow
              label="Tier Increment Principal Step"
              value={loanProduct?.limit_increment_amount}
            />
            <DetailRow
              label="Start Multiplier Factor"
              value={loanProduct?.limit_start_multiplier}
            />
            <DetailRow
              label="Tier Multiplier Increment Step"
              value={loanProduct?.limit_increment_multiplier}
            />
            <DetailRow
              label="Absolute Max Multiplier Cap"
              value={loanProduct?.limit_max_multiplier}
            />
            <BooleanBadge
              label="Reset Limits On Defaults"
              checked={loanProduct?.limit_resets_on_default}
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: RATES, MATURITIES & UPFRONT FEES */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Interest Rate, Fees & Amortization Structural Data"
          icon={<Percent size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow
            label="Nominal Interest Rate"
            value={`${loanProduct?.interest_rate}% (${formatPeriodKey(loanProduct?.interest_key)})`}
          />
          <DetailRow
            label="Amortization Calculation Method"
            value={loanProduct?.interest_method}
          />
          <DetailRow
            label="Repayment Cycle Interval"
            value={loanProduct?.repayment_interval}
          />
          <DetailRow
            label="Processing Fee Valuation Type"
            value={loanProduct?.processing_fee_type}
          />
          <DetailRow
            label="Processing Fee Configuration"
            value={loanProduct?.processing_fee_value}
          />
          <DetailRow
            label="Insurance Cover Rate Factor"
            value={
              loanProduct?.insurance_rate
                ? `${loanProduct?.insurance_rate}%`
                : "—"
            }
          />

          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BooleanBadge
              label="Upfront Processing Fee Deductions"
              checked={loanProduct?.deduct_fee_from_principal}
            />
            <BooleanBadge
              label="Mandatory Insurance Protocols"
              checked={loanProduct?.has_insurance}
            />
            <DetailRow
              label="Disbursement Triggers Allocated"
              value={
                loanProduct?.allowed_disbursement_methods?.join(", ") ||
                "All Gateways"
              }
            />
          </div>
        </div>
      </div>

      {/* SECTION 4: RISK CAP & LATE PAYMENT ENFORCEMENTS */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Risk Controls, Grace Windows & Penalty Engines"
          icon={<ShieldAlert size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow
            label="Principal Grace Period"
            value={`${loanProduct?.grace_period_days} Days`}
          />
          <DetailRow
            label="Penalty Fee Strategy"
            value={loanProduct?.penalty_type}
          />
          <DetailRow
            label="Base Penalty Multiplier"
            value={loanProduct?.penalty_value}
          />
          <DetailRow
            label="Penalty Recurrence Frequency"
            value={loanProduct?.penalty_frequency}
          />
          <DetailRow
            label="Penalty Grace Window Duration"
            value={`${loanProduct?.penalty_grace_period_days} Days`}
          />
          <DetailRow
            label="Absolute Maximum Charging Span"
            value={`${loanProduct?.penalty_cap_days} Days`}
          />
          <DetailRow
            label="Absolute Penalty Cap Factor"
            value={`${loanProduct?.max_penalty_rate}%`}
          />
          <DetailRow
            label="Moratorium Hold Window"
            value={`${loanProduct?.moratorium_months} Months`}
          />
          <DetailRow
            label="Moratorium Interest Action Plan"
            value={loanProduct?.moratorium_interest_handling}
          />

          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BooleanBadge
              label="Active Penalty Accrual Systems"
              checked={loanProduct?.has_penalty}
            />
            <BooleanBadge
              label="Freeze Account State On Default"
              checked={loanProduct?.block_if_defaulted}
            />
            <BooleanBadge
              label="Block Defaults Cascading From Guarantors"
              checked={loanProduct?.block_if_guarantor_on_defaulted}
            />
          </div>
        </div>
      </div>

      {/* SECTION 5: ACCOUNT CRITERIA & CAPITAL EQUITIES */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Ecosystem Institutional Eligibility Matrix"
          icon={<Layers size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow
            label="Minimum Membership Duration"
            value={`${loanProduct?.min_membership_months} Months`}
          />
          <DetailRow
            label="Minimum Required Share Value"
            value={loanProduct?.min_shares_amount}
          />
          <DetailRow
            label="Minimum Account Deposit Value"
            value={loanProduct?.min_savings_amount}
          />
          <DetailRow
            label="Maximum Principal to Shares Ratio"
            value={loanProduct?.max_loan_to_shares_ratio}
          />
          <DetailRow
            label="Maximum Principal to Savings Ratio"
            value={loanProduct?.max_loan_to_savings_ratio}
          />
          <DetailRow
            label="Max Concurrent Loans For This Class"
            value={loanProduct?.max_active_loans_of_type}
          />
          <DetailRow
            label="Max Global Active Account Loans"
            value={loanProduct?.max_total_active_loans}
          />
          <DetailRow
            label="Required Target KYC Clearance"
            value={`Tier Level ${loanProduct?.required_kyc_level}`}
          />

          <div className="md:col-span-4 p-4 bg-slate-50/60 rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailRow
              label="Explicitly Allowed Overlapping Products"
              value={
                loanProduct?.allowed_concurrent_loan_types?.join(", ") ||
                "None Documented"
              }
            />
            <DetailRow
              label="Restricted / Blocked Overlapping Products"
              value={
                loanProduct?.blocked_concurrent_loan_types?.join(", ") ||
                "None Documented"
              }
            />
          </div>
        </div>
      </div>

      {/* SECTION 6: WORKFLOW ROUTING & UNDERWRITING SECURITY */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-3xs">
        <SectionHeader
          title="Underwriting Approvals & Collateral Framework"
          icon={<GitMerge size={16} />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <DetailRow
            label="Approval Pipeline Structure"
            value={loanProduct?.workflow_type}
          />
          <DetailRow
            label="Committee Quorum Threshold"
            value={`${loanProduct?.committee_approvals_required} Sign-offs`}
          />
          <DetailRow
            label="Assigned Panel ID Route"
            value={loanProduct?.committee_group_id}
            isMono={true}
          />
          <DetailRow
            label="Min Paid Ratio to Re-apply"
            value={`${loanProduct?.min_repayment_percent_before_reapply}%`}
          />
          <DetailRow
            label="Min Paid Ratio for Top-Up Options"
            value={`${loanProduct?.min_repayment_percent_for_topup}%`}
          />
          <DetailRow
            label="Min Guarantors Needed"
            value={loanProduct?.min_guarantors}
          />
          <DetailRow
            label="Max Guarantors Cap"
            value={loanProduct?.max_guarantors}
          />
          <DetailRow
            label="Guarantor Mandatory Margin Step"
            value={loanProduct?.guarantor_required_above_amount}
          />
          <DetailRow
            label="Guarantor Liability Margin Exposure"
            value={`${loanProduct?.guarantor_coverage_percent}%`}
          />

          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <BooleanBadge
              label="Automated Settlement Framework"
              checked={loanProduct?.auto_disburse}
            />
            <BooleanBadge
              label="Requires Final Manager Release"
              checked={loanProduct?.requires_manager_approval}
            />
            <BooleanBadge
              label="Active Guarantor Requirements"
              checked={loanProduct?.requires_guarantor}
            />
            <BooleanBadge
              label="Permit Product Rollovers"
              checked={loanProduct?.allows_rollover}
            />
            <BooleanBadge
              label="Permit Refinance Top-Ups"
              checked={loanProduct?.allows_topup}
            />
            <BooleanBadge
              label="Requires Asset Asset Collaterals"
              checked={loanProduct?.requires_collateral}
            />
          </div>

          {loanProduct?.requires_collateral && (
            <div className="md:col-span-4 flex flex-col space-y-1">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Collateral Compliance Policy Definition
              </span>
              <p className="text-sm font-medium text-slate-600 leading-relaxed bg-slate-50/50 rounded-xl p-3 border border-slate-100/60">
                {loanProduct?.collateral_description ||
                  "Physical security declaration details required."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ title, icon, isSkeleton = false }) => (
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
      {value !== null && value !== undefined && value !== "" ? value : "—"}
    </span>
  </div>
);

const BooleanBadge = ({ label, checked }) => (
  <div className="flex flex-col space-y-1.5 p-3 bg-slate-50 rounded-xl border border-slate-100/60 justify-center">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
      {label}
    </span>
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide w-fit px-2 py-0.5 rounded-md border ${
        checked
          ? "bg-emerald-50 border-emerald-100 text-emerald-700"
          : "bg-slate-100 border-slate-200 text-slate-500"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${checked ? "bg-emerald-500" : "bg-slate-400"}`}
      />
      {checked ? "YES / ENABLED" : "NO / DISABLED"}
    </span>
  </div>
);

const SkeletonDetailRow = () => (
  <div className="flex flex-col space-y-2">
    <div className="h-3 w-28 bg-slate-200 rounded-md" />
    <div className="h-4 w-40 bg-slate-200 rounded-lg" />
  </div>
);
