import React from "react";

const styles = {
  wrapper: {
    paddingTop: "50px",
    // background: "#ECEFF1",
    // height: "100%",
    // maxWidth: '80%',
    display: "flex",
    flexFlow: "row wrap",
    // padding: "20px",
    justifyContent: "space-around",
    // alignContent: "flex-start",
    overflow: "auto",
  },
};

function Wrapper(props) {
  return <div style={styles.wrapper}>{props.children}</div>;
}

export default Wrapper;
