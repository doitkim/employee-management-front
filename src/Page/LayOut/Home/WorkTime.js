import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";

const WorkTime = (props) => {
  const [work, setWork] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const workerName = useRef();
  const workerPhoneNumber = useRef();
  const navigate = useNavigate();

  const onSearchWorkTime = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/worker", {
      branchID: props.branch.branchID,
    });

    const employeeInfo = res.data;

    employeeInfo.map(async (e) => {
      if (
        e.employeeName === workerName.current.value &&
        e.phoneNumber === workerPhoneNumber.current.value
      ) {
        const result = await axios.post("http://localhost:8000/worktime", {
          workerName: workerName.current.value,
          workerPhoneNumber: workerPhoneNumber.current.value,
        });
        setWork(result.data);
      }
    });
  };

  const onClickHomeHandler = () => {
    navigate("/");
  };

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = work.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 클릭 이벤트 핸들러
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <form
        onSubmit={onSearchWorkTime}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input type="text" required placeholder="근로자명" ref={workerName} />
        <input
          type="tel"
          placeholder="000-0000-0000"
          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
          maxLength="13"
          required
          ref={workerPhoneNumber}
        />
        <span
          style={{
            display: "flex",
            width: "300px",
            marginBottom: "20px",
          }}
        >
          <button style={{ backgroundColor: "#007bff" }}>조회</button>
          <button onClick={onClickHomeHandler}>home</button>
        </span>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TableContainer component={Paper} sx={{ width: "80%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>근로자명</TableCell>
                <TableCell>근무 시작</TableCell>
                <TableCell>근무 종료</TableCell>
                <TableCell>근무 시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((w, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{w.employeeName}</TableCell>
                    <TableCell>{w.workStartTime}</TableCell>
                    <TableCell>{w.workEndTime}</TableCell>
                    <TableCell>
                      {moment
                        .duration(
                          moment(w.workEndTime, "YYYY. MM. DD. a hh:mm").diff(
                            moment(w.workStartTime, "YYYY. MM. DD. a hh:mm")
                          )
                        )
                        .asHours()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ backgroundColor: "white", width: "80%" }}>
          <Pagination
            count={Math.ceil(work.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default WorkTime;
