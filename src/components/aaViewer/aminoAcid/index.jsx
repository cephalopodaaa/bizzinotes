import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


function AminoAcid(props) {
  const {name, three_letter_code, formula, molecular_weight, pka1, pka2, side_chain, property, image_url} = props;

const styles = {
  card: {
    background: "#fff",
    borderRadius: "24px",
    height: "325px",
    margin: "1rem",
    position: "relative",
    width: "325px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    textAlign: "left",
    titleContainer: {
      display: "flex",
      flexDirection: "col", //This isnt right, need to find the correct command
      justifyContent: "between",
    },
    imgContainer: {
      height: "auto",
      overflow: "hidden",
      textAlign: "center",
      img: {
        width: "60%",
      },
    },
    content: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: 15,
      ul: {
        listStyleType: "none",
        li: {
          marginTop: "18px",
        },
      },
    },
  },
};


  return (
    <div style={styles.card}>
      <div style={styles.titleContainer}>
        <h1>{name}</h1>
        <h1>{three_letter_code}</h1>

      </div>
      <div style= {styles.card.imgContainer}>
        <img
          alt={name}
          src={image_url}
          style={styles.card.imgContainer.img}
           />
      </div>
      <div style={styles.card.content}>
        <ul style={styles.card.content.ul}>
          <li style={styles.card.content.ul.li}>
            <strong>{name} </strong>
          </li>
          <li style={styles.card.content.ul.li}>
          {three_letter_code}
          </li>
          <li style={styles.card.content.ul.li}>
          {property}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AminoAcid;