import { useQuery } from "react-query";
import axiosBaseURL from "./lib/axios";
import { Typography } from "@mui/material";

function ReactQuery() {
  const fetchData = () => {
    return axiosBaseURL.get("/users").then((res) => res.data);
  };

  const { isLoading, isError, data, error } = useQuery("userData", fetchData);

  if (isLoading) {
    return <Typography variant="h4">Loading.....</Typography>;
  }

  if (isError) {
    return <Typography variant="h4">Error: {error.message}</Typography>;
  }

  return (
    <ul>
      <Typography variant="h4">Users</Typography>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default ReactQuery;
