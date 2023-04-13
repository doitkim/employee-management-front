import { Checkbox, FormControlLabel, TableCell } from "@mui/material";
import style from "../../CSS/HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

const WorkerRegister = (props) => {
  const [worker, setWorker] = useState({});
  const [check, setcheck] = useState(false);
  const [workDay, setWorkDay] = useState([]);
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
  const workerHP = useRef();
  const workerBirth = useRef();
  const workerHrieDate = useRef();
  const workerLeaveDate = useRef();

  const mon = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "월"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "월"));
    }
  };
  const tue = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "화"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "화"));
    }
  };
  const wed = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "수"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "수"));
    }
  };
  const thu = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "목"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "목"));
    }
  };
  const fri = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "금"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "금"));
    }
  };
  const sat = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "토"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "토"));
    }
  };
  const sun = (e) => {
    if (e.target.checked) {
      setWorkDay([...workDay, "일"]);
    } else {
      setWorkDay(workDay.filter((day) => day !== "일"));
    }
  };

  const workerRegister = async (e) => {
    e.preventDefault();
    setWorker({
      workerName: workerName.current.value,
      workerHP: workerHP.current.value,
      workerBirth: workerBirth.current.value,
      workerHrieDate: workerHrieDate.current.value,
      workerLeaveDate:
        workerLeaveDate.current.value === "" && check === false
          ? "-"
          : workerLeaveDate.current.value,
    });
    try {
      if (worker !== {}) {
        await axios.post("http://localhost:8000/workerRegister", {
          employeeName: worker.workerName,
          birthDate: worker.workerBirth,
          phoneNumber: worker.workerHP,
          workDays: workDay.join(),
          hireDate: worker.workerHrieDate,
          leaveDate: worker.workerLeaveDate,
          branchId: props.branch.branchID,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkHandler = () => {
    setcheck(!check);
  };

  return (
    <form className={style.workerRegisterForm} onSubmit={workerRegister}>
      <h1>근로자 등록</h1>
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
                ref={workerHP}
              />
            </TableCell>
            <TableCell sx={tablecellStyle}>
              <div>Birth</div>
              <input type="date" required ref={workerBirth} />
            </TableCell>
            <TableCell sx={tablecellStyle}>
              <div>Hire Date</div>
              <input type="date" required ref={workerHrieDate} />
            </TableCell>
            <TableCell sx={tablecellStyle}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    checked={check}
                    onClick={checkHandler}
                  />
                }
                label={<h4>퇴사체크를 하고 날짜를 선택해주세요.</h4>}
              />
            </TableCell>
            <TableCell sx={tablecellStyle}>
              <div>Leave Date</div>
              <input type="date" ref={workerLeaveDate} disabled={!check} />
            </TableCell>
            <TableCell sx={tablecellStyle}>
              <div>Work Days</div>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={mon}
                  />
                }
                label={<h4>월</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={tue}
                  />
                }
                label={<h4>화</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={wed}
                  />
                }
                label={<h4>수</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={thu}
                  />
                }
                label={<h4>목</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={fri}
                  />
                }
                label={<h4>금</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={sat}
                  />
                }
                label={<h4>토</h4>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#dc3545",
                      },
                    }}
                    onChange={sun}
                  />
                }
                label={<h4>일</h4>}
              />
            </TableCell>
          </tr>
        </thead>
      </table>
      <span style={{ display: "flex", width: "300px" }}>
        <button onClick={() => navigate("/")}>취소</button>
        <button style={{ backgroundColor: "#007bff" }}>등록</button>
      </span>
    </form>
  );
};

export default WorkerRegister;
