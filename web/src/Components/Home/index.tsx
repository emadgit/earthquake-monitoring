import React, { FunctionComponent, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { formatDistance } from "date-fns";
import { Loader } from "../Shared/Loader";
import { LoaderType, ReviewStatus } from "../../types";
import { API_URL } from "../../utils";

interface EarthquakeData {
  bbox: [number];
  features: [Feature];
  metadata: object;
  type: string;
}

interface Feature {
  type: string;
  properties: {
    place: string;
    time: Date;
    updated: Date;
    url: string;
    detail: string;
    title: string;
    status: string;
    type: string;
    mag: number;
    magType: string;
  };
  geometry: object;
  id: string;
}

export const Home: FunctionComponent = () => {
  const [earthquakeList, setEarthquakeList] = useState<[Feature] | []>([]);
  const [earthquakeDetail, setEarthquakeDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios<EarthquakeData, EarthquakeData>(API_URL);
        if (!data || !data.features) {
          setEarthquakeList([]);
        }

        setEarthquakeList(data.features);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    handleFetch();
  }, []);

  //   const renderItems = () =>{}

  return (
    <>
      {loading ? (
        <Loader type={LoaderType.ThreeDots} />
      ) : (
        <Container>
          <Row>
            {earthquakeList.map((item) => {
              return (
                <>
                  {item.properties.status !== ReviewStatus.DELETED && (
                    <Col
                      key={item.id}
                      style={{ marginBottom: "15px", marginTop: "15px" }}
                    >
                      <Card
                        className="card text-bg-dark mb-3"
                        style={{ width: "18rem", height: "15rem" }}
                      >
                        <Card.Body>
                          <Card.Title>{item.properties.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            Status:{" "}
                            {item.properties.status === ReviewStatus.REVIEWED
                              ? "Verified ✅"
                              : "Not Verified Yet 🤖"}
                          </Card.Subtitle>
                          <Card.Text>
                            Magnitude:{" "}
                            {`${item.properties.mag} ${item.properties.magType}`}
                          </Card.Text>
                          <Card.Subtitle
                            style={{ position: "absolute", bottom: "55px" }}
                          >
                            {formatDistance(new Date(), item.properties.time)}{" "}
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
            })}
          </Row>
        </Container>
      )}
    </>
  );
};
