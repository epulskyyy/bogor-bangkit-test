import { Button, Result } from "antd";
import React from "react";
import { useLocation } from "react-router";
import history from "../utils/history";

export default function PageNotFound() {
  const loc = useLocation();
  if (loc.pathname.includes("login") || loc.pathname.includes("register")) {
    history.push("/");
  }
  const onBack = () => {
    history.push("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Maaf, halaman tidak ditemukan."
      extra={
        <Button type="primary" onClick={onBack}>
          Kembali
        </Button>
      }
    />
  );
}
