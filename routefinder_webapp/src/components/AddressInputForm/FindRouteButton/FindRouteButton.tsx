import { Button, Tooltip } from "@mui/material";
import React, { FC } from "react";
import { useFindRouteButton } from "./hooks/useFindRouteButton";

export const FindRouteButton: FC = () => {
  const { isDataValid, makeRequest, isFetching } = useFindRouteButton();

  return (
    <Tooltip
      title={isDataValid ? undefined : "Data entered is invalid."}
      placement="top"
    >
      <div>
        <Button
          disabled={!isDataValid || isFetching}
          color="primary"
          variant="contained"
          size="large"
          sx={{
            width: 150,
          }}
          onClick={makeRequest}
        >
          Find Route
        </Button>
      </div>
    </Tooltip>
  );
};
