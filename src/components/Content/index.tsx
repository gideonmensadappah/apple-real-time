import * as React from "react";

import Box from "@mui/material/Box";

import CostumTable from "../Table/index";
import MyChart from "../OverviewChart/index";
import CostumTabs from "../CostumTabs";
import TabPanel from "../TabPanel";
import { useState } from "react";
import FilterTabs from "../FilterTabs";
import { useData } from "../Table/index";

const values = [
  { value: 0, label: "Overview" },
  { value: 1, label: "History" },
];
// https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume
const Content = () => {
  const [timeFrame, setTimeFrame] = useState(
    "period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023"
  );
  const { value, handleChange } = useTabsLogic();
  const data = useData(timeFrame);
  const CostumTabsProps = { handleChange, value, values };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CostumTabs {...CostumTabsProps} />
      </Box>
      <TabPanel value={value} index={0}>
        <MyChart></MyChart>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CostumTable data={data}>
          <FilterTabs setTimeFrame={setTimeFrame} />
        </CostumTable>
      </TabPanel>
    </Box>
  );
};
export default Content;

export const useTabsLogic = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return { value, handleChange };
};
