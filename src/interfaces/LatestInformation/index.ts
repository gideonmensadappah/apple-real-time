export interface LatestInfo {
  low52Weeks: number;
  high52Weeks: number;
  percentChange: number;
  change: number;
  previousClose: number;
  volume: number;
  last: number;
  low: number;
  high: number;
  close: number;
  open: number;
  utcOffset: number;
  time: string;
  date: string;
  lastUpdate: string;
  tickTime: string;
  marketCapFormatted: string;
  marketCap: number;
  marketOpen: boolean;
  historicalClose: HistoricalClose;
  enterpriseValue: string;
  enterpriseValueEbitda: string;
  timeExtended: string;
  dateExtended: string;
  lastUpdateExtended: string;
  extendedHoursType: string;
  percentChangeExtended: number;
  changeExtended: number;
  lastExtended: number;
}

export interface HistoricalClose {
  "1month": number;
  ytd: number;
  "5year": number;
  "1year": number;
  "1week": number;
  "3month": number;
}
