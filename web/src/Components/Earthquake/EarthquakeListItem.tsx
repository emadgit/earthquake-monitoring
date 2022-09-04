import React, { FunctionComponent } from "react";
import { formatDistance } from "date-fns";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ReviewStatus, Feature } from "../../types";

interface EarthquakeListItem {
  earthquakeListItem: Feature;
}

export const EarthquakeListItem: FunctionComponent<EarthquakeListItem> = ({
  earthquakeListItem,
}) => {
  return (
    <>
      {earthquakeListItem.properties.status !== ReviewStatus.DELETED && (
        <Col
          key={earthquakeListItem.id}
          style={{ marginBottom: "15px", marginTop: "15px" }}
        >
          <Card
            className="card text-bg-dark mb-3"
            style={{ width: "18rem", height: "15rem" }}
          >
            <Card.Body>
              <Card.Title>{earthquakeListItem.properties.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Status:{" "}
                {earthquakeListItem.properties.status === ReviewStatus.REVIEWED
                  ? "Verified ✅"
                  : "Not Verified Yet 🤖"}
              </Card.Subtitle>
              <Card.Text>
                Magnitude:{" "}
                {`${earthquakeListItem.properties.mag} ${earthquakeListItem.properties.magType}`}
              </Card.Text>
              <Card.Subtitle style={{ position: "absolute", bottom: "55px" }}>
                {formatDistance(new Date(), earthquakeListItem.properties.time)}{" "}
                ago
              </Card.Subtitle>
              <Button
                style={{
                  position: "absolute",
                  bottom: "10px",
                  backgroundColor: "darkslategray",
                }}
                variant="dark"
              >
                More details
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};
