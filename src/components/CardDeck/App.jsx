import React from "react";
import Wrapper from "./Wrapper";
import Title from "./Title";
import FriendCard from "./FriendCard";
import friends from "./friends.json";

function App() {


  return (
    // <img src={biz} />
    <Wrapper>
      <Title>The Notes</Title>
      { friends.map( f => <FriendCard name={f.name} occupation={f.occupation} location={f.location} image={f.image} characterColor={f.color} />) }
    </Wrapper>
  );
}
  export default App;