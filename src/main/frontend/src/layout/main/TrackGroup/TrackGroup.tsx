import { useState } from 'react';
import classes from './TrackGroup.module.css';
import PlaylistLayout from './PlaylistLayout';

function TrackGroup() {
    const [isPlaylist, setIsPlaylist] = useState(true);

    return (
        <section>
            <div className={`radio-tab ${classes.tab}`}>
                <input
                    type="radio"
                    id="track-group-playlist"
                    checked={isPlaylist}
                    onChange={() => {
                        setIsPlaylist(true);
                    }}
                    name="track-group"
                />
                <label htmlFor="track-group-playlist">Playlist</label>
                <input
                    type="radio"
                    id="track-group-schedule"
                    name="track-group"
                    checked={!isPlaylist}
                    onChange={() => {
                        setIsPlaylist(false);
                    }}
                />
                <label htmlFor="track-group-schedule">Schedule</label>
            </div>
            {isPlaylist && <PlaylistLayout />}
        </section>
    );
}

export default TrackGroup;
