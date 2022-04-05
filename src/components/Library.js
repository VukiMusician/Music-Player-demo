import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({isPlaying ,songs , setCurrentSong, audioRef}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                    isPlaying={isPlaying} 
                    songs={songs}
                    setCurrentSong={setCurrentSong} 
                    song={song}
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    )
    }
export default Library;