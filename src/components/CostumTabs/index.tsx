import { FC } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Tab = {
  value: number;
  label: string;
};

type CostumTabsProps = {
  value: number;
  values: Array<Tab>;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const CostumTabs: FC<CostumTabsProps> = (props) => {
  const { value, values, handleChange } = props;
  return (
    <Tabs value={value} onChange={handleChange} aria-label='basic tabs'>
      {values.map(({ value, label }) => (
        <Tab label={label} key={value} {...a11yProps(value)} />
      ))}
    </Tabs>
  );
};

export default CostumTabs;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
