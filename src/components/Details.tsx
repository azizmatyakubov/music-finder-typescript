import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


export interface SongResponse {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: Date;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries: string[];
  contributors: Artist[];
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

export interface Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  release_date: Date;
  tracklist: string;
  type: string;
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role?: string;
}

const Details = () => {
  const [musicDetail, setMusicDetail] = useState<SongResponse>();

  const param = useParams();

  const getMusicDetail = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/track/${param.id}`
    );
    const data = (await response.json()) as SongResponse;
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
              <Card.Title>{musicDetail?.album.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-xs-4 col-md-6"></Col>
      </Row>
    </Container>
  );
};

export default Details;
