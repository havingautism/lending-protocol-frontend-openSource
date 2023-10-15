export const tableColumns = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "Asset",
    dataIndex: "asset",
  },
  {
    title: "Total supplied",
    dataIndex: "totalSupplied",
    copyable: false,
    ellipsis: true,
  },
  {
    title: "Supply APY",
    dataIndex: "supplyAPY",
    copyable: false,
    ellipsis: true,
  },
  {
    title: "Total borrowed",
    dataIndex: "totalBorrowed",
    copyable: false,
    ellipsis: true,
  },
  {
    title: "Borrow APY",
    dataIndex: "borrowAPY",
    copyable: false,
    ellipsis: true,
  },
];

export const tableData = [
  {
    key: 1,
    asset: "BTC",
    totalSupplied: "20",
    supplyAPY: "3%",
    totalBorrowed: "8",
    borrowAPY: "5%",
  },
];
