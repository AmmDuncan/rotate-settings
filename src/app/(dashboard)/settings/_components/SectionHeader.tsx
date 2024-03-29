import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function SectionHeader({ children }: React.PropsWithChildren) {
  return (
    <Box pb={"11px"} borderBottom={"0.3px solid rgba(174, 173, 190, 1)"}>
      <Text fontSize="xl" fontWeight="500" className="avenir-next">
        {children}
      </Text>
    </Box>
  );
}
