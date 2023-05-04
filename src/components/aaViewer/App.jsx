import React from "react";
import Wrapper from "./Wrapper";
import Title from "./Title";
import AminoAcid from "./aminoAcid";


import aa from "../../data/aminoAcids.js";
// const {name, three_letter_code, formula, molecular_weight, pka1, pka2, side_chain, property, image_url} = props;

function App(props) {


  return (
    // <img src={biz} />
    <Wrapper>
      <Title>Friends List</Title>
      { aa.map(a => <AminoAcid name={a.name} three_letter_code={a.three_letter_code} formula={a.formula} molecular_weight={a.molecular_weight} pka1={a.pka1} pka2={a.pka2} side_chain={a.side_chain} property={a.property} image_url={a.image_url} /> ) }
    </Wrapper>
  );
}
  export default App;