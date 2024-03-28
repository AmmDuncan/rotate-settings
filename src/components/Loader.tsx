import { HashLoader } from "react-spinners";
import { Grid } from "@chakra-ui/react";
import React from "react";

export function Loader(props: React.ComponentProps<typeof Grid>) {
  return (
    <Grid {...props} placeContent="center">
      <HashLoader color={"#5E6DFA"} />
    </Grid>
  );
}
