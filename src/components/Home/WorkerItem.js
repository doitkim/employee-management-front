import { TableCell, TableRow } from "@mui/material";

import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const WorkerItem = (currentItems) => {
  return (
    <>
      {currentItems.currentItems.map((worker) => (
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
        </TableRow>
      ))}
    </>
  );
};

export default WorkerItem;
