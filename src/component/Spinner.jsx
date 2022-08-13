import SpinnerGIF from "../assets/w.gif";

const Spinner = () => {
  return (
    <>
      <img
        alt="noting"
        src={SpinnerGIF}
        className="d-block m-auto"
        style={{ width: "600px" }}
      />
    </>
  );
};

export default Spinner;
