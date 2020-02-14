import React from "react";
import { Card } from "react-bootstrap";

export const Users = ({ player }) => {
  const { name, country, searches } = player;
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
          <span>name: {name}</span>
          title
        </Card.Title>
        <Card.Text>country: {country}</Card.Text>
        <Card.Text>searches: {searches}</Card.Text>
      </Card.Body>
    </Card>
  );
};
