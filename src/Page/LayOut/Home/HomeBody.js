import style from "../../../CSS/HomePage.module.css";
import HomeItem from "./HomeItem";

const HomeBody = () => {
  return (
    <div className={style.body}>
      <HomeItem />
    </div>
  );
};

export default HomeBody;
