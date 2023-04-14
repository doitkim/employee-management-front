import { useState } from "react";
import style from "../../../CSS/HomePage.module.css";
import WorkerList from "./WorkerList";
import { Box, Modal } from "@mui/material";
import WorkerRegister from "../../../components/Home/WorkerRegister";
import Calendar from "./WorkTime";
import WorkerScheduleRegit from "../../../components/Home/WorkekrScheduleReg";

const HomeItem = (props) => {
  // 모달 사용으로 모달 창 토글 상태 값 저장
  const [workerToggle, setWorkerToggle] = useState(false);
  const [calendarToggle, setCalendarToggle] = useState(false);
  const [wokerScheduleToggle, setWorkerScheduleToggle] = useState(false);

  const onClickWorkerRegister = () => {
    setWorkerToggle(!workerToggle);
  };

  const onClickCalendar = () => {
    setCalendarToggle(!calendarToggle);
  };

  const onClickSchedule = () => {
    setWorkerScheduleToggle(!wokerScheduleToggle);
  };
  return (
    <>
      <div className={style.workerlistContainer}>
        근로자리스트
        <div>
          <button onClick={onClickCalendar}>근태 조회</button>
          <button onClick={onClickSchedule}>근태 등록</button>
          <button onClick={onClickWorkerRegister}>근로자 등록</button>
        </div>
      </div>
      <WorkerList branch={props.branch} />
      <Modal
        open={workerToggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ backgroundColor: "#333333" }}
      >
        <Box>
          <WorkerRegister branch={props.branch} />
        </Box>
      </Modal>
      <Modal
        open={calendarToggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ backgroundColor: "#333333" }}
      >
        <Box>
          <Calendar />
        </Box>
      </Modal>
      <Modal
        open={wokerScheduleToggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ backgroundColor: "#333333" }}
      >
        <Box>
          <WorkerScheduleRegit />
        </Box>
      </Modal>
    </>
  );
};

export default HomeItem;
