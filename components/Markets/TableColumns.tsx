import { BTC, ETH } from "./CoinLogos";

export const tableColumns = [
  {
    title: "Asset",
    dataIndex: "asset",
    render: (record) => (
      <div style={{ display: "flex" }}>
        {record.toString() == "BTC" && <BTC width={23} />}
        {record.toString() == "ETH" && <ETH width={23} />}
        <p style={{ paddingLeft: "6px" }}>{record}</p>
      </div>
    ),
  },
  {
    title: "Total supplied",
    dataIndex: "totalSupplied",
    copyable: false,
    ellipsis: true,
    sorter: (a, b) => a.totalSupplied - b.totalSupplied,
  },
  {
    title: "Supply APY",
    dataIndex: "supplyAPY",
    copyable: false,
    ellipsis: true,
    sorter: (a, b) => a.supplyAPY - b.supplyAPY,
  },
  {
    title: "Total borrowed",
    dataIndex: "totalBorrowed",
    copyable: false,
    ellipsis: true,
    sorter: (a, b) => a.totalBorrowed - b.totalBorrowed,
  },
  {
    title: "Borrow APY",
    dataIndex: "borrowAPY",
    copyable: false,
    ellipsis: true,
    sorter: (a, b) => a.borrowAPY - b.borrowAPY,
  },
];

export const tableData = [
  {
    key: "btc",
    asset: "BTC",
    totalSupplied: "20",
    supplyAPY: "3%",
    totalBorrowed: "8",
    borrowAPY: "5%",
  },
  {
    key: "eth",
    asset: "ETH",
    totalSupplied: "88",
    supplyAPY: "5%",
    totalBorrowed: "66",
    borrowAPY: "8%",
  },
];
