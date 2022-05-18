import { Card, Button, Popover, OverlayTrigger } from "react-bootstrap";

interface SingleMusicProps {
  music: any;
}

const SingleMusic = ({ music }: SingleMusicProps) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{music.title}</Popover.Title>
      <Popover.Content>
        Artist <strong>{music.artist.name}</strong>
        <br />
        Rank <strong>{music.rank}</strong>
        <br />
        Album <strong>{music.album.title}</strong>
        <br />
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Card style={{ width: "12rem", margin: "1rem" }}>
        <Card.Img variant="top" src={music.album.cover_medium} />
        <Card.Body>
          <Card.Title>{music.title}</Card.Title>
        </Card.Body>
      </Card>
    </OverlayTrigger>
  );
};

export default SingleMusic;
