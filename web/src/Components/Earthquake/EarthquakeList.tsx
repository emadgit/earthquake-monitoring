import React, { FunctionComponent } from "react";
import { formatDistance } from "date-fns";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { LoaderType, ReviewStatus, Feature, EarthquakeData } from "../../types";

import { EarthquakeListItem } from "./EarthquakeListItem";

interface EarthquakeList {
  earthquakeList: Array<Feature> | [];
}

const EarthquakeList: FunctionComponent<EarthquakeList> = ({
  earthquakeList,
}) => {
  const renderItems = () => {
    return (
      <>
        {earthquakeList.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <EarthquakeListItem earthquakeListItem={item} />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return <>{renderItems()}</>;
};

export { EarthquakeList };
