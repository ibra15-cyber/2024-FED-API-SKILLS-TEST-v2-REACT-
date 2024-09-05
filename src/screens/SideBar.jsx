import Search from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";

import { data } from "../data";
import Profile from "./ui/Profile";

function SideBar() {
  return (
    <>
      {/* sidebar outer div starts  */}
      <div
        style={{
          width: "367px",
          height: "1054px",
          backgroundColor: "white",
          borderRadius: "18px",
          //   outline: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          overflow: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        {/* title  */}
        <div
          style={{
            backgroundColor: "white",
            display: " flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "15px",
            // outline: "2px solid green",
          }}
        >
          <h1
            style={{
              backgroundColor: "white",
              padding: "10px",
              width: "100px",
              font: "normal normal 800 24px/33px Manrope",
              color: "#072635",
              marginLeft: "18px",
              opacity: 1,
            }}
          >
            Patients
          </h1>

          <img
            src={Search}
            style={{
              backgroundColor: "white",
              //   padding: "10px",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              width: "18px",
              height: "18px",
              marginRight: "18px",
            }}
          />
        </div>

        {/* images profile outer div for all profile  */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "inherit",
            backgroundColor: "red",
            justifyContent: "center",
            // outline: "2px solid green",
            // overflow: "visible",
          }}
        >
          {/* complete profile line div  */}
          {data.map(({ image, name, age, sex }) => (
            <Profile
              key={image}
              image={image}
              name={name}
              age={age}
              sex={sex}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;

{
  /* <div
style={{
  width: "inherit", //   height: "48px",
  backgroundColor: "white",
  paddingBottom: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //   overflow: "hidden",
  outline: "2px solid blue",
}}
>
<img
  src={Layer8}
  style={{
    backgroundColor: "white",
    width: "48px",
    height: "48px",
  }}
/>
<div style={{ backgroundColor: "white" }}>
  <p
    style={{
      backgroundColor: "white",
      color: "#072635",
      font: "normal normal bold 14px/19px Manrope",
      opacity: 1,
    }}
  >
    Emily Williams
  </p>
  <p
    style={{
      backgroundColor: "white",
      font: "normal normal normal 14px/19px Manrope",
      color: "#707070",
      opacity: 1,
    }}
  >
    Female, 18
  </p>
</div>
<div style={{ backgroundColor: "white", position: "relative" }}>
  <img
    src={MoreHz}
    style={{
      backgroundColor: "white",
      //   marginRight: "30px",
      position: "absolute",
      //   marginRight: "-30px",
    }}
  />
</div>
</div> */
}
