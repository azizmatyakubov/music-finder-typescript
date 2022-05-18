import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

// interface DetailsState {
//   music: object | null;
// }

const Details = () => {
  const [musicDetail, setMusicDetail] = useState({});

  const param = useParams();

  const getMusicDetail = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/track/${param.id}`
    );
    const data = await response.json();
    setMusicDetail(data);
  };

  useEffect(() => {
    getMusicDetail();
  }, []);

  console.log(musicDetail);

  return (
    <Container>
      <Row>
        <Col className="col-xs-4 col-md-6">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              {/* <Card.Title>{musicDetail.title}</Card.Title> */}
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-xs-4 col-md-6">333</Col>
      </Row>
    </Container>
  );
};

export default Details;
