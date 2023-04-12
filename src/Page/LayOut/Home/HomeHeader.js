import { useCookies } from "react-cookie";
import style from "../../../CSS/HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";

const HomeHeader = (props) => {
  const [cookie, setCookie, removeCookie] = useCookies(["cookieName"]);
  const branchID = props.branchInfo.branchID;
  const branch = props.branchInfo.branch;
  const navigate = useNavigate();
  const logOutHandler = () => {
    removeCookie(["JWTLogin"]);
    navigate("/");
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/home">
          {branch}({branchID})관리
        </Link>
      </div>
      <button className={style.logOut} onClick={logOutHandler}>
        로그아웃
      </button>
    </div>
  );
};

export default HomeHeader;
