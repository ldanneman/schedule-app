import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import InnerCards from "./InnerCards";

function MainCards() {
  return (
    <div>
      {/* <CardDeck> */}
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
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <InnerCards />
          </Card.Body>
        </Card>
        {/* <Card id="right-card">
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/coolps811/image/upload/v1611161741/samples/h2ygxn1wv3qmkupovode.png"
          />
          <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card> */}
      {/* </CardDeck> */}
    </div>
  );
}

export default MainCards;
