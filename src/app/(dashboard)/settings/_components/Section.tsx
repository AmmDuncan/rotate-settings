import React from "react";
import { Box } from "@chakra-ui/react";

export function Section({ children }: React.PropsWithChildren) {
  return (
    <Box borderRadius={"24px"} bg="white" py={4} px={"30px"} border="1px solid rgba(202, 206, 225, 0.2)">
      {children}
    </Box>
  );
}
