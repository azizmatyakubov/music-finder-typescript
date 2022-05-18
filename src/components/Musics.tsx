import React from 'react'
import SingleMusic from './SingleMusic'

interface MusicsProps {
    musics: any
}

const Musics = ({musics}: MusicsProps) => {
  return (
    <div className='d-flex flex-wrap '>
        {musics.map((music: any) => {
            return (
                <SingleMusic key={music.id} music={music} />
            )}
        )}
    </div>
  )
}

export default Musics