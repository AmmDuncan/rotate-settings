"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { Grid, Text } from "@chakra-ui/react";

import { useAuth } from "@/components/AuthContext";

export default function Login() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { login, handleAuthCallback, accessToken } = useAuth();

  // if code is in params handle it
  React.useEffect(() => {
    if (accessToken) return;
    const code = searchParams.get("code");
    if (code) handleAuthCallback(code);
  }, [accessToken, handleAuthCallback, login, searchParams]);

  // is access token exists, redirect to settings
  React.useEffect(() => {
    if (accessToken) {
      router.replace("/settings");
    }
  }, [accessToken, router]);

  return (
    <Grid h={"100vh"} placeContent={"center"}>
      <Text>Redirecting...</Text>
    </Grid>
  );
}
