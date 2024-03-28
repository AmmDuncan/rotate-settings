"use client";

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "@/components/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = extendTheme({
  fontSizes: {
    h1: "28px",
  },
  colors: {
    primary: "rgba(94, 109, 250, 1)",
    bg: "rgba(251, 251, 252, 1)",
    blue: {
      600: "rgba(94, 109, 250, 1)",
      100: "rgba(94, 109, 250, 0.1)",
      50: "rgba(94, 109, 250, 0.05)",
    },
    gray: {
      900: "rgba(41, 43, 52, 1)",
      600: "rgba(93, 95, 109, 1)",
      500: "rgba(124, 129, 135, 1)",
      400: "rgba(129, 133, 156, 1)",
      100: "rgba(202, 206, 225, 1)",
      50: "rgba(246, 247, 251, 1)",
    },
    warning: {
      dark: "rgba(209, 126, 9, 1)",
      light: "rgba(255, 240, 219, 0.6)",
    },
  },
});

const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
