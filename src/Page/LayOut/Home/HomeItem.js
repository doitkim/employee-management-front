import { useState } from "react";
import style from "../../../CSS/HomePage.module.css";
import WorkerList from "./WorkerList";

import { Box, Modal } from "@mui/material";
import WorkerRegister from "../../../components/Home/WorkerRegister";

const HomeItem = (props) => {
  // 모달 사용으로 모달 창 토글 상태 값 저장
  const [toggle, setToggle] = useState(false);
  const onClickWorkerRegister = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={style.workerlistContainer}>
        근로자리스트
        <div>
          <button>근태 체크</button>
          <button onClick={onClickWorkerRegister}>근로자 등록</button>
        </div>
      </div>
      <WorkerList branch={props.branch} />
      <Modal
        open={toggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ backgroundColor: "#333333" }}
      >
        <Box>
          <WorkerRegister branch={props.branch} />
        </Box>
      </Modal>
    </>
  );
};

export default HomeItem;
