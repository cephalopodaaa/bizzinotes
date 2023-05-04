import React from "react";
import Wrapper from "./Wrapper";
import Title from "./Title";
import FriendCard from "./FriendCard";
// import 'bootstrap/dist/css/bootstrap.min.css';
import biz from "./1b.jpg";

import friends from "./friends.json";

function App() {


  return (
    // <img src={biz} />
    <Wrapper>
      <Title>Friends List</Title>
      { friends.map( f => <FriendCard name={f.name} occupation={f.occupation} location={f.location} image={f.image} characterColor={f.color} />) }
    </Wrapper>
  );
}
  export default App;