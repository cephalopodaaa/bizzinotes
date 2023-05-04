import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


function FriendCard(props) {
  const {name, occupation, location, image, characterColor} = props;

const styles = {
  card: {
    imgContainer: {
      background: characterColor,
      //^ https://tailwindcss.com/docs/content-configuration#safelisting-classes
      // https://stackoverflow.com/questions/70672393/use-react-variables-in-tailwind-class-names

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
    <div className="bg-slate-400 rounded-md h-80 m-4 relative w-80 align-text-left font-biz shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <div className="h-3/5 overflow-hidden flex-1 items-center " style={styles.card.imgContainer}>
        <img
          alt={name}
          src={image}
          className="w-24 "
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