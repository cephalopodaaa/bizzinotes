import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


function FriendCard(props) {
  const {name, occupation, location, image, characterColor} = props;

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
      background: characterColor,
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
          src={image}
          style={styles.card.imgContainer.img}
          zindex={3}
           />
      </div>
      <div style={styles.card.content} zindex={1}>
        <ul style={styles.card.content.ul}>
          <li style={styles.card.content.ul.li}>
            <strong>Name:</strong> {name}
          </li>
          <li style={styles.card.content.ul.li}>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li style={styles.card.content.ul.li}>
            <strong>Location:</strong> {location}
          </li>
          <li class="bg-gradient-warning">
            Testing,Testing
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;