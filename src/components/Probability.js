import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Probability = (props) => {
    const [prob] = useState("");

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3> The Probability of a Patient Not Showing :</h3>
                    <h4>{prob}</h4>
                </Col>
            </Row>
        </Container>
    );
};
export default Probability;
