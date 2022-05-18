import { Card, Button  } from "react-bootstrap"

interface SingleMusicProps {
    music: any
}

const SingleMusic = ({music}: SingleMusicProps) => {
  return (
<Card style={{ width: '12rem', margin: '1rem', }}>
  <Card.Img variant="top" src={music.album.cover_medium} />
  <Card.Body>
    <Card.Title>{music.title}</Card.Title>
  </Card.Body>
</Card>
  )
}

export default SingleMusic