import React from "react";
import Card from "react-bootstrap/Card";
class CardComp1 extends React.Component {
  render() {
    return (
      <>
      <Card style={{ width: '21rem' , margin :'1.4rem' }} >
      <Card.Img src="https://www.ephotozine.com/articles/9-need-to-know-photography-composition-rules-17158/images/xlg_227077_1505747960.jpg" alt="elephant" height="410"/>
  </Card>
      </>
    );
  }
}
export default CardComp1;
