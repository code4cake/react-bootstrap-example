import React from 'react';
import PropTypes from 'prop-types';

import {
 Button,
 Card,
 Col,
 Container,
 Navbar,
 Nav,
 NavDropdown,
 Row
} from 'react-bootstrap';

import './App.scss';

const renderBtnSet = () => (
  <>
    <Button size="lg" variant="primary">I am a normal Btn</Button> {` `}
    <Button size="md" variant="custom">I am a Custom Btn </Button> {` `}
    <Button size="sm" variant="link">I am a Link</Button> {` `}
    <Button size="sm" variant="lightGreen" disabled>I am a Disabled Btn</Button> {` `}
  </>
)

const renderCard = () => (
<Card style={{ width: '15rem' }}>
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
<Navbar bg="navbarColor" expand="lg">
  <Navbar.Brand href="#home">Stockly</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Landlord</Nav.Link>
      <Nav.Link href="#tenant">Tenant</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

function App() {
  return (
    <div className="App">

      <header>
        {renderNavbar()}
      </header>

      <section>
        <Container fluid>
          <h6>Row of Btns</h6>
          {renderBtnSet()}
        </Container>
      </section>

       <section>
          <Container>
            <h6>Row of Cards</h6>
            <Row sm={1} md={4} lg={5}>
              <Col lg="auto">{renderCard()}</Col>
              <Col lg="auto">{renderCard()}</Col>
              <Col lg="auto">{renderCard()}</Col>
              <Col lg="auto">{renderCard()}</Col>
              <Col lg="auto">{renderCard()}</Col>
            </Row>
          </Container>
       </section>       
    </div>
  );
}

export default App;
