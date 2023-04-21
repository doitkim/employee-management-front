import { TableCell, TableRow } from "@mui/material";
import axios from "axios";

import moment from "moment";
import "moment/locale/ko";
import { useNavigate } from "react-router-dom";

moment.locale("ko");

const WorkerItem = ({ currentItems }) => {
  const navigate = useNavigate();

  const DeleteHandler = async (employeeId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.post("http://localhost:8000/deleteEmployee", {
          employeeId,
        });
        navigate("/");
      } catch (error) {
        alert("이미 삭제되었거나 해당 정보가 존재하지 않습니다.");
      }
    }
  };

  return (
    <>
      {currentItems.map((worker) => (
        <TableRow key={worker.employeeId}>
          <TableCell>{worker.employeeId}</TableCell>
          <TableCell>{worker.employeeName}</TableCell>
          <TableCell>{worker.phoneNumber}</TableCell>
          <TableCell>{worker.birthDate}</TableCell>
          <TableCell>{worker.hireDate}</TableCell>
          <TableCell>{worker.leavehDate ? worker.leavehDate : "-"}</TableCell>
          <TableCell>
            {moment(worker.createdAt).format("MMMM Do YYYY, HH:mm:ss")}
          </TableCell>
          <TableCell>
            <button>수정</button>
          </TableCell>
          <TableCell>
            <button onClick={() => DeleteHandler(worker.employeeId)}>
              삭제
            </button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default WorkerItem;
