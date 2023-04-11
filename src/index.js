import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 로그인 상태 유무에 따른 로그인 페이지와 홈 페이지 전환 기능 추가 할 것
  <AppRouter />
);
