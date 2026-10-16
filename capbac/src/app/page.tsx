"use client";

import { StaffDashboard } from "@/components/app/staff-dashboard";
import { StudentDashboard } from "@/components/app/student-dashboard";
import { useRole } from "@/lib/auth";
import { useData } from "@/lib/store";

export default function HomePage() {
  const data = useData();
  const role = useRole();
  if (!data?.profile || !role) return null;
  return role === "eleve" ? <StudentDashboard /> : <StaffDashboard data={data} role={role} />;
}
