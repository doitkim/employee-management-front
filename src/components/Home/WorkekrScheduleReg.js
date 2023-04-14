import { TableCell } from "@mui/material";
import style from "../../CSS/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const WorkerScheduleRegit = () => {
  const tablecellStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: 0,
    textAlign: "center",
  };

  const navigate = useNavigate();
  const workerName = useRef();
  const phoneNumber = useRef();
  const startTime = useRef();
  const endTime = useRef();
  const workTimeRegitHandler = async (e) => {
    e.preventDefault();

    const formattedStartTime = new Date(startTime.current.value).toLocaleString(
      "kr-KO",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    console.log(formattedStartTime);

    const formattedEndTime = new Date(endTime.current.value).toLocaleString(
      "kr-KO",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    await axios.post("http://localhost:8000/worktimeregit", {
      workerName: workerName.current.value,
      phoneNumber: phoneNumber.current.value,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    });
    navigate("/");
  };

  return (
    <>
      <form
        className={style.workerRegisterForm}
        onSubmit={workTimeRegitHandler}
      >
        <h1>근태 등록</h1>
        <table>
          <thead>
            <tr>
              <TableCell sx={tablecellStyle}>
                <div>Name</div>
                <input type="text" required ref={workerName} />
              </TableCell>
              <TableCell sx={tablecellStyle}>
                <div>H.P</div>
                <input
                  type="tel"
                  placeholder="000-0000-0000"
                  pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                  maxLength="13"
                  required
                  ref={phoneNumber}
                />
              </TableCell>
              <TableCell sx={tablecellStyle}>
                <div>Start Time</div>
                <input type="datetime-local" required ref={startTime} />
              </TableCell>
              <TableCell sx={tablecellStyle}>
                <div>End Time</div>
                <input type="datetime-local" required ref={endTime} />
              </TableCell>
            </tr>
          </thead>
        </table>
        <span style={{ display: "flex", width: "300px" }}>
          <button onClick={() => navigate("/")}>취소</button>
          <button style={{ backgroundColor: "#007bff" }}>등록</button>
        </span>
      </form>
    </>
  );
};

export default WorkerScheduleRegit;
