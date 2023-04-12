import style from "../../../CSS/HomePage.module.css";
import HomeItem from "./HomeItem";

const HomeBody = (props) => {
  return (
    <div className={style.body}>
      <HomeItem branch={props.branchInfo} />
    </div>
  );
};

export default HomeBody;
