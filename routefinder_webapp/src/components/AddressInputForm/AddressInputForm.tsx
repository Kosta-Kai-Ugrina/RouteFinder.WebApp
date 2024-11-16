import { Paper, Stack } from "@mui/material";
import React, { FC } from "react";
import { TestButtons } from "./TestButtons/TestButtons";
import { StartAddressSearchBox } from "./SearchBox/StartAddressSearchBox";
import { DestinationAddressSearchBoxList } from "./SearchBox/DestinationAddressSearchBoxList";
import { FindRouteButton } from "./FindRouteButton/FindRouteButton";
import { RouteStatistics } from "./RouteStatistics/RouteStatistics";
import { useAddressContext } from "../../context/AddressContext";
import { ErrorInfo } from "./ErrorInfo/ErrorInfo";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
  const { error } = useAddressContext();

  return (
    <Paper
      elevation={12}
      sx={{
        position: "absolute",
        zIndex: "1000",
        backgroundColor: "#000a",
        padding: 2,
        margin: 2,
      }}
    >
      <Stack spacing={5}>
        <StartAddressSearchBox />
        <DestinationAddressSearchBoxList />
        <Stack spacing={2} direction="row">
          <FindRouteButton />
          {error === null ? <RouteStatistics /> : <ErrorInfo />}
        </Stack>
        {/* <TestButtons /> */}
      </Stack>
    </Paper>
  );
};
