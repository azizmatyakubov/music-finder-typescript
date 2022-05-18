import NavbarWebsite from './NavbarWebsite';
import Search from './Search';
import Musics from './Musics';
import { useEffect, useState } from 'react';



function Home() {

  interface Music {
    id: number,
    title: string,
    artist: string,
    album: string,
    cover: string,
    link: string
  }

  const [musics, setMusics] = useState<Music[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    searchMusic()
  }, [search])

  const searchMusic = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "d8f9f8f9f0msh9f9f9f9f9f9f9f9fp1b9f2b4jsn9f9f9f9f9f9f9"
      }
    })

      .then(response => response.json())
      .then(response => {
        setMusics(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
     <NavbarWebsite title="Music Finder" />
     <div className="search-wrapper w-50 m-auto pt-5">
     <Search setSearch={setSearch} searchMusic={searchMusic} />
     <Musics musics={musics} />
     </div>
    </div>
  );
}

export default Home;
