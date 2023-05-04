import React from "react";

// const styles = {
//   wrapper: {
//     // paddingTop: "50px",
//     // background: "#ECEFF1",
//     // // height: "100%",
//     // // maxWidth: '80%',
//     // display: "flex",
//     // flexFlow: "row wrap",
//     // // padding: "20px",
//     // justifyContent: "space-around",
//     // // alignContent: "flex-start",
//     // overflow: "auto",
//   },
// };

function Wrapper(props) {
  return <div className="bg-slate-500 p-5 flex flex-wrap justify-around align-center overflow-auto">{props.children}</div>;
}

export default Wrapper;
