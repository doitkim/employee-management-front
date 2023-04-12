import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Pagination,
} from "@mui/material";
import WorkerItem from "../../../components/Home/WorkerItem";
import { useEffect, useState } from "react";
import axios from "axios";

function WorkerList(props) {
  const [worker, setWorker] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    if (props.branch.branchID !== undefined) {
      async function searchAll() {
        const res = await axios.post("http://localhost:8000/worker", {
          branchID: props.branch.branchID,
        });
        setWorker(res.data);
      }
      searchAll();
    }
  }, [props.branch.branchID === undefined]);

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = worker.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 클릭 이벤트 핸들러
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>근로자코드</TableCell>
              <TableCell>근로자명</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>입사일</TableCell>
              <TableCell>퇴사일</TableCell>
              <TableCell>등록일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <WorkerItem currentItems={currentItems} />
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ backgroundColor: "white", width: "80%" }}>
        <Pagination
          count={Math.ceil(worker.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default WorkerList;
