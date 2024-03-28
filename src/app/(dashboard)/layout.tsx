import { AuthProvider } from "@/components/AuthContext";
import React from "react";
import { DashboardLayoutWrapper } from "./_components/DashboardLayoutWrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
    </AuthProvider>
  );
}
