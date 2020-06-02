import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';


const renderBtnSet = () => (
  <>
    <Button size="lg" variant="primary">I am a normal Btn</Button> {` `}
    <Button size="md" variant="custom">I am a Custom Btn </Button> {` `}
    <Button size="sm" variant="link">I am a Link</Button> {` `}
    <Button size="sm" variant="lightGreen" disabled>I am a Disabled Btn</Button> {` `}
 </>
)

const renderCard = () => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" /> 
  <Card.Body>
    <Card.Title>I am a Nice Card</Card.Title>
    <Card.Text>
      This is a card with some text and a picture
    </Card.Text>
    <Button variant="primary">Click Me</Button>
  </Card.Body>
</Card>
)


const renderNavbar = () => (
  <div>Hello</div>
)

function App() {
  return (
    <div className="App">

      <Container>
      <h6>Row of Btns</h6>
        <section>
          {renderBtnSet()}
        </section>
      </Container >

       <section>
          <Container>
          <h6>Row of Cards</h6>
            <Row xs={1} md={4} lg={6}>
              <Col>
                {renderCard()}
                {renderCard()}
                {renderCard()}
              </Col>
            </Row>
          </Container>
       </section>
    </div>
  );
}

export default App;
