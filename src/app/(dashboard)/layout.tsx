import React, { Suspense } from "react";

import { AuthProvider } from "@/components/AuthContext";

import { DashboardLayoutWrapper } from "./_components";

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
