"use client";
import { useState, useEffect } from "react";
import { ProTable } from "@ant-design/pro-components";
import { tableColumns, tableData } from "./TableColumns";
import { useTheme } from "next-themes";
import { Button, ConfigProvider, Dropdown, Spin, theme } from "antd";

const Markets = () => {
  const [isLoading, setIsloading] = useState(false);
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
            key={"marketsTable"}
            id="marketsTable"
            request={(params, sorter, filter) => {
              return Promise.resolve({
                data: tableData,
                success: true,
              });
            }}
            rowKey="key"
            search={false}
            toolbar={{
              search: {
                placeholder: "",
                onSearch: (value: string) => {
                  alert(value);
                },
              },
            }}
            pagination={false}
            headerTitle="Markets"
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default Markets;
