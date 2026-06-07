import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#d8422f",
    colorSuccess: "#2f7d62",
    colorText: "#10212b",
    colorTextSecondary: "#53636b",
    colorBgBase: "#f7faf8",
    colorBgContainer: "#ffffff",
    colorBorder: "#d7e4df",
    borderRadius: 8,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif',
  },
  components: {
    Button: {
      controlHeight: 46,
      fontWeight: 800,
      primaryShadow: "0 16px 32px #10212b2b",
    },
    Collapse: {
      contentBg: "#ffffff",
      headerBg: "#ffffff",
    },
    Table: {
      headerBg: "#10212b",
      headerColor: "#ffffff",
      rowHoverBg: "#f7faf8",
    },
  },
};

export default function AntdProvider({ children }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}
