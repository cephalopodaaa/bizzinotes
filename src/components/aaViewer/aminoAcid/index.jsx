import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


function AminoAcid(props) {
  const {name, three_letter_code, formula, molecular_weight, pka1, pka2, side_chain, property, image_url} = props;

const styles = {
  card: {
    background: "#fff",
    borderRadius: "2px",
    height: "325px",
    margin: "1rem",
    position: "relative",
    width: "325px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    textAlign: "left",
    imgContainer: {
      height: "60%",
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