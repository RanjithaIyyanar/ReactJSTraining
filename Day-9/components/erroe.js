import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div style={{ color: "red" }}>
      <h1>Oops! something went wrong!</h1>
      <h2>{error?.data}</h2>
    </div>
  );
};

export default Error;