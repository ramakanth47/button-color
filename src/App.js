import React, { useState } from "react";
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#1ABC9C",
    "#E74C3C",
    "#3498DB",
    "#2ECC71",
  ];

  const [buttonStatus, setButtonStatus] = useState(
    new Array(9).fill({ disabled: false, color: "" })
  );

  const handleButtonClick = (index) => {
    const updatedButtonStatus = [...buttonStatus];
    updatedButtonStatus[index] = {
      color: colors[index],
      disabled: true,
    };
    setButtonStatus(updatedButtonStatus);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Button Color </Navbar.Brand>
      </Navbar>
      <Container className="mt-5">
        <h3>Click on a button to assign the next color!</h3>
        <Row className="g-3">
          {buttonStatus.map((btn, index) => (
            <Col key={index} sm={4}>
              <Button
                variant="primary"
                style={{ backgroundColor: btn.color }}
                onClick={() => handleButtonClick(index)}
                disabled={btn.disabled}
                className="w-100"
              >
                Button {index + 1}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
