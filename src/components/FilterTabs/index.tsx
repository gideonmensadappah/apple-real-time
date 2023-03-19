import { FC, useEffect } from "react";

import CostumTabs from "../CostumTabs";
import { useTabsLogic } from "../Content/index";

const values = [
  { value: 0, label: "1 Minute" },
  { value: 1, label: "5 Minutes" },
  { value: 2, label: "1 Hour" },
  { value: 3, label: "1 Week" },
];

/**
 *  The selected time period should always be encompassed within a larger time frame. The following conditions apply:
    If the period is set to 1 minute or 5 minutes.
    timeframe = last 1 day.
    If the period is set to 1 hour.
    timeframe = last 24 hours.
    If the period is set to 1 week.
    timeframe =  last 1 hour.
 */
type Props = {
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
};
const FilterTabs: FC<Props> = (props) => {
  const { setTimeFrame } = props;
  const { value, handleChange } = useTabsLogic();
  const customTabsProps = { values, value, handleChange };

  //   useEffect(() => {
  //     const today = new Date();
  //     const getStartTime = valueMapTimePeriod[value];
  //     const time = `StartTime=${getStartTime()}&EndTime=${today.toLocaleDateString()}%2023:59`;
  //     setTimeFrame(time);

  //   }, [value]);
  return <CostumTabs {...customTabsProps} />;
};

export default FilterTabs;

const getLastDay = () => {
  const today = new Date();
  const lastDay = new Date(today);

  lastDay.setDate(today.getDate() - 1);
  return lastDay.toLocaleDateString();
};

const getLast24Hours = () => new Date(Date.now() - 24 * 60 * 60 * 1000);

const valueMapTimePeriod: Record<number, Function> = {
  [0]: getLastDay,
  [1]: getLastDay,
  [2]: getLast24Hours,
  [3]: () => "",
};

// // period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023
