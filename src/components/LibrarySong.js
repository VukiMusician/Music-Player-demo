import React from 'react';


const LibrarySong = ({isPlaying, song,songs , setCurrentSong , id, audioRef}) => {
    const songSelectHandler = () => {
        const selecetedSong = songs.filter((state) => state.id === id)
        setCurrentSong(selecetedSong[0]);
        audioRef.current.play();
    }
    return (
        <div onClick={songSelectHandler} className='library-song'>
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        </div>
    )
}


export default LibrarySong;