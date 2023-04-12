import axios from "axios";

export async function GetInfoManager(token) {
  const res = await axios.post("http://localhost:8000/auth", {
    token,
  });
  const result = res.data;
  const arr = [];
  Object.values(result).map((e) => {
    arr.push(e);
  });

  return arr;
}

export default GetInfoManager;
