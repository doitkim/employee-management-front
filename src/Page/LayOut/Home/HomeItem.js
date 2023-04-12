import style from "../../../CSS/HomePage.module.css";
import WorkerList from "./WorkerList";

const HomeItem = () => {
  return (
    <>
      <div className={style.workerlistContainer}>
        근로자리스트
        <div>
          <button>근태 체크</button>
          <button>근로자 등록</button>
        </div>
      </div>
      <WorkerList />
    </>
  );
};

export default HomeItem;
