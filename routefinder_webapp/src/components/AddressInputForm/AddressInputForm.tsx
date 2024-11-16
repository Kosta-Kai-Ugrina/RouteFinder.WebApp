import { Paper, Stack } from "@mui/material";
import React, { FC } from "react";
import { TestButtons } from "./TestButtons/TestButtons";
import { StartAddressSearchBox } from "./SearchBox/StartAddressSearchBox";
import { DestinationAddressSearchBoxList } from "./SearchBox/DestinationAddressSearchBoxList";
import { FindRouteButton } from "./FindRouteButton/FindRouteButton";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        zIndex: "1000",
        backgroundColor: "#0005",
        padding: 2,
        margin: 2,
      }}
    >
      <Stack spacing={5}>
        <StartAddressSearchBox />
        <DestinationAddressSearchBoxList />
        <FindRouteButton />
        {/* <TestButtons /> */}
      </Stack>
    </Paper>
  );
};
