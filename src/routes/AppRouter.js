import App from "../App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
