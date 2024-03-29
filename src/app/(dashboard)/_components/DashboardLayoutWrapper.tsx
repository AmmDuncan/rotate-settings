"use client";

import React from "react";

import { useAuth } from "@/components/AuthContext";
import { Box, Grid } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

export function DashboardLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { login } = useAuth();

  // if token is not stored, start login
  React.useLayoutEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (!storedAccessToken) login(`${window.location.origin}/auth/login`); // redirect to /auth/login for verification
  }, []);

  return (
    <Grid gridTemplateRows="max-content 1fr" bg="bg" h="100vh">
      <Navbar />
      <Box overflowY="scroll">{children}</Box>
    </Grid>
  );
}
