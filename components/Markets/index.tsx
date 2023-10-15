"use client";
import { useState, useEffect, useRef } from "react";
import { ProTable } from "@ant-design/pro-components";
import { tableColumns, tableData } from "./TableColumns";
import { useTheme } from "next-themes";
import { Button, ConfigProvider, Dropdown, Spin, theme } from "antd";

const Markets = () => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(tableData);
  const actionRef = useRef();
  const darkThemeConfig = {
    token: {
      colorPrimary: "white",
      borderRadius: 4,
    },
    algorithm: [theme.darkAlgorithm],
  };
  const lightThemeConfig = {
    token: {
      colorPrimary: "blue",
      borderRadius: 4,
    },
    algorithm: [theme.defaultAlgorithm],
  };

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <section id="markets" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <ConfigProvider
          theme={
            useTheme().theme === "dark" ? darkThemeConfig : lightThemeConfig
          }
        >
          <ProTable
            columns={tableColumns}
            cardBordered
            size="large"
            actionRef={actionRef}
            key={"marketsTable"}
            id="marketsTable"
            dataSource={data}
            rowKey="key"
            search={false}
            toolbar={{
              search: {
                placeholder: "",
                onSearch: (value: string) => {
                  let dataTemp = [];
                  tableData.map((item) => {
                    const assetName = item.asset.toLowerCase().toString();
                    if (assetName.includes(value.toLowerCase().toString())) {
                      dataTemp.push(item);
                    }
                  });
                  setData(dataTemp);
                },
              },
            }}
            pagination={false}
            headerTitle="Markets"
            options={{ reload: false, density: false, setting: false }}
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default Markets;
