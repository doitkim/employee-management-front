import { useCookies } from "react-cookie";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./LayOut/Home/HomeHeader";
import { GetInfoManager } from "../Auth/JWT/GetInfoManager";
import HomeBody from "./LayOut/Home/HomeBody";
import HomeFooter from "./LayOut/Home/HomeFooter";

const HomePage = () => {
  const [cookie, setCookie] = useCookies(["cookieName"]);
  const [isLogin, setIsLogin] = useState(false);
  const [branchInfo, setBranchInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키에 JWT Login 값이 있을 경우
    if (cookie["JWTLogin"]) {
      setIsLogin(true); // 로그인 상태 설정
      GetInfoManager(cookie["JWTLogin"]).then((result) => {
        setBranchInfo({
          branchID: result[0],
          branch: result[1],
        });
      });
    } else {
      navigate("/");
    }
  }, [isLogin]); // 로그인 상태값 바뀔 때마다 반응

  return (
    <>
      <HomeHeader branchInfo={branchInfo} />
      <HomeBody />
      <HomeFooter />
    </>
  );
};

export default HomePage;
