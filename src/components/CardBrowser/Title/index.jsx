import React from "react";

const styles = {
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: "3rem",
    textDecoration: "underline",
    color: "#2A77AE",
    marginBottom: "50px",
  },
};

function Title(props) {
  return <h1 style={styles.title}>{props.children}</h1>;
}

export default Title;
