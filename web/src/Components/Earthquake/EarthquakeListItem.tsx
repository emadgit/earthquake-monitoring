import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ReviewStatus, Feature } from "../../types";

interface EarthquakeListItemProps {
  earthquakeListItem: Feature;
}

export const EarthquakeListItem: FunctionComponent<EarthquakeListItemProps> = ({
  earthquakeListItem,
}) => {
  const navigate = useNavigate();
  const handleNavigation = (id: string) => {
    // For now just navigate to login
    navigate(`/detail/${id}`, {
      state: {
        detailUrl: earthquakeListItem.properties.detail,
        status: earthquakeListItem.properties.status,
      },
    });
  };
  return (
    <>
      {earthquakeListItem.properties.status !== ReviewStatus.DELETED && (
        <Col
          key={earthquakeListItem.id}
          style={{ marginBottom: "15px", marginTop: "15px" }}
        >
          <Card
            className="card text-bg-dark mb-3"
            style={{
              width: "18rem",
              height: "15rem",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
            }}
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
                {`${Number(earthquakeListItem.properties.mag).toFixed(2)} ${
                  earthquakeListItem.properties.magType
                }`}
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
                onClick={() => handleNavigation(earthquakeListItem.id)}
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
