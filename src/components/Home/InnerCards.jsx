import React from "react";
import { Card, CardDeck } from "react-bootstrap";

function InnerCards() {
  return (
    <div>
      <CardDeck>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content jj.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default InnerCards;
