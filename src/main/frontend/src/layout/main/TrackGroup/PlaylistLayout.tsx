import classes from './PlaylistLayout.module.css';
import PlaylistForm from '../../../components/Playlist/PlaylistForm';
import PlaylistItem from '../../../components/Playlist/PlaylistItem';

function PlaylistLayout() {
    return (
        <>
            <PlaylistForm />
            <ul className={classes.list}>
                <PlaylistItem title={'My routine'} />
                <PlaylistItem title={'My routine'} />
                <PlaylistItem title={'My routine'} />
                <PlaylistItem title={'My routine'} />
            </ul>
        </>
    );
}

export default PlaylistLayout;
