import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: "center" }}
      height="100"
      width="100"
      color="#007586"
    />
  );
};

export default Loader;
