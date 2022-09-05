import React, { FunctionComponent, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Loader } from "../Shared/Loader";
import { EarthquakeDetailData } from "../../types";

export const EarthquakeDetails: FunctionComponent = () => {
  const { state } = useLocation();
  const [earthquakeDetail, setEarthquakeDetail] =
    useState<EarthquakeDetailData>();
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios<
          EarthquakeDetailData,
          EarthquakeDetailData
        >(state.detailUrl);
        if (!data) {
          return;
        }
        console.log(data);
        setEarthquakeDetail(data);
        if (data.geometry.coordinates.length > 0) {
          setLatitude(data.geometry.coordinates[1]); //latitude
          setLongitude(data.geometry.coordinates[0]); //longitude
        }

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    handleFetch();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            {!loading && earthquakeDetail && (
              <>
                <Alert
                  variant={`${
                    state.status === "automatic" ? "secondary" : "success"
                  }`}
                >
                  {state.status === "automatic"
                    ? "🤖  This event currently is not verified by a Human!"
                    : "🧑‍🤝‍🧑 This event reviewed and verified by a human!"}
                </Alert>
                <Card className="card text-bg-dark mb-3" body>
                  <h3>Place: {earthquakeDetail.properties.place}</h3>
                  <h3>
                    Magnitude:{" "}
                    {`${earthquakeDetail.properties.mag} ${earthquakeDetail.properties.magType}`}
                  </h3>
                  <h3>
                    Magnitude Error:{" "}
                    {
                      earthquakeDetail?.properties?.products["phase-data"][0]
                        .properties["magnitude-error"]
                    }
                  </h3>
                  <h3>Latitude: {latitude}</h3>
                  <h3>Longitude: {longitude}</h3>
                  <h3 style={{ width: "400px" }}>
                    Depth:
                    {
                      earthquakeDetail?.properties?.products["phase-data"][0]
                        .properties.depth
                    }{" "}
                    KM
                  </h3>
                  <h3>
                    Link to Srouce (USGS) :{" "}
                    <a href={earthquakeDetail.properties.url}>
                      {" "}
                      {earthquakeDetail.properties.url}
                    </a>
                  </h3>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
