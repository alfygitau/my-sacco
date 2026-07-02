import React, { useState } from "react";
import {
  UserPlus,
  Shield,
  Mail,
  Clock,
  CheckCircle2,
  XCircle,
  MoreVertical,
  Edit,
  Trash2,
  Search,
  Filter,
  Plus,
} from "lucide-react";

const initialAdmins = [
  {
    id: "adm_01",
    name: "Sarah Jenkins",
    email: "sarah.j@enterprise.com",
    avatarUrl: null,
    role: "Super Administrator",
    department: "Information Security & Risk",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "14:12 PM",
    ipAddress: "192.168.1.104",
    status: "Active",
    accessLevel: "Global Write/Delete",
  },
  {
    id: "adm_02",
    name: "Michael Chen",
    email: "m.chen@enterprise.com",
    avatarUrl: null,
    role: "Credit Underwriter Manager",
    department: "Risk Assessment Div.",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "11:45 AM",
    ipAddress: "192.168.1.89",
    status: "Active",
    accessLevel: "Approve/Reject Only",
  },
  {
    id: "adm_03",
    name: "Elena Rostova",
    email: "e.rostova@enterprise.com",
    avatarUrl: null,
    role: "Support Tier-2 Lead",
    department: "Customer Success Operations",
    lastActiveDate: "June 29, 2026",
    lastActiveTime: "09:15 AM",
    ipAddress: "172.16.24.12",
    status: "Suspended",
    accessLevel: "Read-Only Profile View",
  },
  {
    id: "adm_04",
    name: "Marcus Vance",
    email: "m.vance@enterprise.com",
    avatarUrl: null,
    role: "Compliance Auditor",
    department: "Legal & Regulatory Affairs",
    lastActiveDate: "July 01, 2026",
    lastActiveTime: "17:30 PM",
    ipAddress: "192.168.4.22",
    status: "Active",
    accessLevel: "Audit Log Export",
  },
  {
    id: "adm_05",
    name: "David Amadi",
    email: "d.amadi@enterprise.com",
    avatarUrl: null,
    role: "DevOps Liaison",
    department: "Infrastructure Engineering",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "13:02 PM",
    ipAddress: "10.0.45.112",
    status: "Active",
    accessLevel: "Config Write/Deploy",
  },
  {
    id: "adm_06",
    name: "Chloe Laurent",
    email: "c.laurent@enterprise.com",
    avatarUrl: null,
    role: "Financial Comptroller",
    department: "Treasury & Settlements",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "08:22 AM",
    ipAddress: "192.168.1.15",
    status: "Active",
    accessLevel: "Disbursement Management",
  },
  {
    id: "adm_07",
    name: "Jonathan Wu",
    email: "j.wu@enterprise.com",
    avatarUrl: null,
    role: "Product Analytics Lead",
    department: "Growth & Business Intelligence",
    lastActiveDate: "June 25, 2026",
    lastActiveTime: "16:40 PM",
    ipAddress: "192.168.7.63",
    status: "Suspended",
    accessLevel: "Read-Only Dashboard View",
  },
  {
    id: "adm_08",
    name: "Amina Yusuf",
    email: "a.yusuf@enterprise.com",
    avatarUrl: null,
    role: "Risk Control Officer",
    department: "Risk Assessment Div.",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "10:05 AM",
    ipAddress: "192.168.1.92",
    status: "Active",
    accessLevel: "Approve/Reject Only",
  },
  {
    id: "adm_09",
    name: "Sven Lindstrom",
    email: "s.lindstrom@enterprise.com",
    avatarUrl: null,
    role: "Database Administrator",
    department: "Infrastructure Engineering",
    lastActiveDate: "July 01, 2026",
    lastActiveTime: "22:11 PM",
    ipAddress: "10.0.45.101",
    status: "Active",
    accessLevel: "Global Write/Delete",
  },
  {
    id: "adm_10",
    name: "Priya Nair",
    email: "p.nair@enterprise.com",
    avatarUrl: null,
    role: "Customer Operations Specialist",
    department: "Customer Success Operations",
    lastActiveDate: "July 02, 2026",
    lastActiveTime: "13:58 PM",
    ipAddress: "172.16.24.45",
    status: "Active",
    accessLevel: "Read-Write Profile View",
  },
];

export default function AdminUsers() {
  const [admins, setAdmins] = useState(initialAdmins);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddNewUser = () => {
    alert("Triggering 'Add New Admin User' overlay modal setup workflow.");
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-600 antialiased">
      <div className="w-full space-y-6">
        {/* Descriptive Header & Action Panel Section */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Shield className="size-5 text-primary" />
              Administrative Users
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Configure baseline access models, manage platform operators, and
              audits security clearance indicators. Changes to access profiles
              instantly invalidate session authorization tags across live
              cluster endpoints.
            </p>
          </div>

          <button className="h-11 px-8 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-primary/10 hover:bg-primary/90 active:scale-98 transition-all flex items-center gap-2 cursor-pointer self-stretch sm:self-auto justify-center font-semibold">
            <Plus size={16} strokeWidth={2.5} />
            <span>Add an Admin User</span>
          </button>
        </div>

        {/* Sectioned Data Table Shell */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              {/* Table Headers */}
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase tracking-widest select-none">
                  <th className="py-4.5 px-6">Identity & Communication</th>
                  <th className="py-4.5 px-6">Functional Domain & Scope</th>
                  <th className="py-4.5 px-6">Assigned Permissions</th>
                  <th className="py-4.5 px-6">Last Security Check-In</th>
                  <th className="py-4.5 px-6">Status Indicator</th>
                  <th className="py-4.5 px-6 text-right pr-8">
                    Actions Matrix
                  </th>
                </tr>
              </thead>

              {/* Table Body Content Matrix */}
              <tbody className="divide-y divide-slate-100 text-xs">
                {admins.map((admin) => (
                  <tr
                    key={admin.id}
                    className="group transition-colors hover:bg-slate-50/50"
                  >
                    {/* Multiline Column 1: Profile Avatar, Name and Email */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="size-9 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-700 uppercase tracking-tight">
                          {admin.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-slate-800 text-sm tracking-tight truncate">
                            {admin.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium mt-0.5 inline-flex items-center gap-1">
                            <Mail className="size-3 shrink-0 text-slate-300" />
                            {admin.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Multiline Column 2: Role and Department */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700 text-xs">
                          {admin.role}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                          {admin.department}
                        </span>
                      </div>
                    </td>

                    {/* Multiline Column 3: Security Clearances */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-mono font-medium text-primary bg-indigo-50/50 px-2 py-0.5 rounded-md self-start text-[10px] tracking-wide uppercase">
                          {admin.accessLevel}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono mt-1">
                          ID: {admin.id}
                        </span>
                      </div>
                    </td>

                    {/* Multiline Column 4: Timestamp & IP Metadata */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-700 flex items-center gap-1">
                          <Clock className="size-3 text-slate-400" />
                          {admin.lastActiveDate}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {admin.lastActiveTime} • IP: {admin.ipAddress}
                        </span>
                      </div>
                    </td>

                    {/* Column 5: Status Badge Control Component */}
                    <td className="py-4 px-6 align-middle">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                          admin.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {admin.status === "Active" ? (
                          <CheckCircle2 className="size-3 text-emerald-500" />
                        ) : (
                          <XCircle className="size-3 text-rose-500" />
                        )}
                        {admin.status}
                      </span>
                    </td>

                    {/* Column 6: Action Button Suite */}
                    <td className="py-4 px-6 text-right pr-8 align-middle">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          className="size-8 rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs bg-white"
                          title="Modify Account Rules"
                        >
                          <Edit size={13} />
                        </button>
                        <button
                          className="size-8 rounded-xl border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-xs bg-white"
                          title="Revoke Clearances"
                        >
                          <Trash2 size={13} />
                        </button>
                        <button className="size-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
