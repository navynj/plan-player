import TrackForm from '../Track/TrackForm';
import Play from '../UI/Play';
import classes from './PlaylistForm.module.css';
import SearchTrack from './SearchTrack';

function PlaylistForm() {
    return (
        <form className={classes.form}>
            <div className={classes.container}>
                <div className={classes.img}>
                    <img src=""></img>
                    <Play />
                </div>
                <div className={classes.inputs}>
                    <input
                        className={classes.playlist}
                        type="text"
                        placeholder="Enter the playlist title."
                    />
                    <SearchTrack />
                </div>
            </div>
            <button className={classes.submit} type="submit">
                Add Playlist
            </button>
        </form>
    );
}

export default PlaylistForm;
