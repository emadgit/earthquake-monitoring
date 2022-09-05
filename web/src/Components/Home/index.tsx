import React, { FunctionComponent, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { Loader } from "../Shared/Loader";
import { LoaderType, Feature, EarthquakeData } from "../../types";
import { API_URL } from "../../utils";

import { EarthquakeList } from "../Earthquake";

export const Home: FunctionComponent = () => {
  const [earthquakeList, setEarthquakeList] = useState<Array<Feature> | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios<EarthquakeData, EarthquakeData>(API_URL);
        if (!data || !data.features) {
          return setEarthquakeList([]);
        }

        setEarthquakeList(data.features);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    handleFetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loader type={LoaderType.ThreeDots} />
      ) : (
        <Container>
          <Row>{<EarthquakeList earthquakeList={earthquakeList} />}</Row>
        </Container>
      )}
    </>
  );
};
