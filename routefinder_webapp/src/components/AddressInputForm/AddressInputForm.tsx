import { Paper, Stack } from "@mui/material";
import React, { FC } from "react";
import { TestButtons } from "./TestButtons/TestButtons";
import { StartAddressSearchBox } from "./StartAddressSearchBox/StartAddressSearchBox";
import { DestinationAddressSearchBoxList } from "./DestinationAddressSearchBoxList/DestinationAddressSearchBoxList";
import { FindRouteButton } from "./FindRouteButton/FindRouteButton";
import { RouteStatistics } from "./RouteStatistics/RouteStatistics";
import { useAppContext } from "../../context/AppContext";
import { ErrorInfo } from "./ErrorInfo/ErrorInfo";
import styles from "./AddressInputForm.module.scss";
import { FetchProgressBar } from "./FetchProgressBar/FetchProgressBar";

export const AddressInputForm: FC = () => {
  const { error } = useAppContext();

  return (
    <Paper elevation={12} className={styles.container}>
      <Stack spacing={5}>
        <StartAddressSearchBox />
        <DestinationAddressSearchBoxList />
        <Stack spacing={2} direction="row">
          <FindRouteButton />
          {error === null ? <RouteStatistics /> : <ErrorInfo />}
        </Stack>
        {/* <TestButtons /> */}
        <FetchProgressBar />
      </Stack>
    </Paper>
  );
};
