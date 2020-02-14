import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const Users = props => {
  return (
    <Card
      style={{
        width: "19rem",
        border: "2px solid green",
        textAlign: "center",
        margin: "1rem",
        padding: "1rem",
        lineHeight: "1.2rem"
      }}
    >
      <Card.Body>
        <Card.Title>
          <span>login:</span>
          title
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body style={{ margin: "10px", padding: "10px" }}>
        <Card.Link style={{ margin: "5px" }} href="#">
          Card Link
        </Card.Link>
        <Card.Link style={{ margin: "5px" }} href="#">
          Another Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
