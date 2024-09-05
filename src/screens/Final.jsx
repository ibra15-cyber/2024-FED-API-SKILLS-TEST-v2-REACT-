import { results } from "../data";
import LabList from "./ui/LabList";

function Final() {
  return (
    <div
      style={{
        width: "367px",
        height: "296px",
        backgroundColor: "white",
        borderRadius: "16px",
        marginTop: "30px",
        outline: "2px solid white",
        overflow: "scroll",
      }}
    >
      {" "}
      {/* title  */}
      <div
        style={{
          backgroundColor: "white",
          display: " flex",
          justifyContent: "space-between",
          alignItems: "center",
          // outline: "2px solid green",
        }}
      >
        <h1
          style={{
            backgroundColor: "white",
            padding: "10px",
            // width: "100px",
            font: "normal normal 800 24px/33px Manrope",
            color: "#072635",
            marginLeft: "18px",
            opacity: 1,
          }}
        >
          Lab Results
        </h1>
      </div>
      {/* content  */}
      {results.map(({ name }) => (
        <LabList name={name} key={name} />
      ))}
    </div>
  );
}

export default Final;
