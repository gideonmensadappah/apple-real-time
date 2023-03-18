import { FC, useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./header.css";
import { LatestInfo } from "../../interfaces/LatestInformation/index";

const WS_URL = "wss://wstest.fxempire.com?token=btctothemoon";
const apiCall = { type: "SUBSCRIBE", instruments: ["s-aapl"] };

/**
 *
 * --------------------------------
 * 1 hour
 * 1. Fetch data from API.
 *
 * 1 hour
 * 1. Add filter by 1, 5, 1H, 1W
 * ---------------------------------
 *
 * 1 hour
 * 1. Display data on Stock Chart
 * ----------------------------------
 *
 * 1 hour
 * 1. publish app.
 */

const Header = () => {
  const [latestInfo, setLatestInfo] = useState<LatestInfo | null>(null);
  const ws = new WebSocket(WS_URL);

  useEffect(() => {
    if (latestInfo) return;
    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          console.log(latestInfo);
          if (!latestInfo) {
            console.log(json);
            setLatestInfo((prev) => json["s-aapl"]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    return () => {
      //   ws.close();
    };
  }, [latestInfo]);
  const isPositive = latestInfo?.change! > 0;
  const styles = { color: isPositive ? "green" : "red" };
  return (
    <header className='header'>
      <div>
        <Header.StrongSpan>Applce Inc</Header.StrongSpan>
        <br />
        <span>As at: {new Date(latestInfo?.date!).toUTCString()}</span>
      </div>
      <div>
        <Header.StrongSpan>
          <Header.Icon n={latestInfo?.change!} />
          {latestInfo?.last!.toFixed(2)}
        </Header.StrongSpan>
        <br />
        <div>
          <span style={styles}>{latestInfo?.change}</span>
          <span style={styles}>({latestInfo?.percentChange})</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

type Props = {
  children: React.ReactNode;
};

const RenderIcon: FC<{ n: number }> = (props) => {
  const { n } = props;
  return n > 0 ? (
    <ArrowDropUpIcon color='success' />
  ) : (
    <ArrowDropDownIcon color='error' />
  );
};

const StrongSpan: FC<Props> = (props) => {
  const { children } = props;
  return (
    <span className='header-head-span'>
      <strong>{children}</strong>
    </span>
  );
};

Header.StrongSpan = StrongSpan;
Header.Icon = RenderIcon;
