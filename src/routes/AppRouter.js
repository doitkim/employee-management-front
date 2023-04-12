import App from "../App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import style from "../CSS/Default.module.css";

const AppRouter = () => {
  return (
    <div className={style.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
