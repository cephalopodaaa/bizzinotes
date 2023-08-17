import React from "react";

const styles = {
  title: {
    width: "100%",
    font: "biz-font1",
    textAlign: "center",
    fontSize: "4rem",
    color: "maroon",
    marginBottom: "50px",
  },
};

function Title(props) {
  return <h1 style={styles.title}>{props.children}</h1>;
}

export default Title;
