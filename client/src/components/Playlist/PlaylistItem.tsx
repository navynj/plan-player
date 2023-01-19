import classes from './PlaylistItem.module.css';
import Play from '../UI/Play';
import PlaylistTrack from './PlaylistTrack';

function PlaylistItem(props: { title: string; img?: string }) {
    return (
        <li className={classes.item}>
            <div className={classes.img}>
                <img src={props.img || ''} />
                <Play />
            </div>
            <ol className={classes.track}>
                <h5>{props.title}</h5>
                <PlaylistTrack title={'Title'} artist={'Unknown Artist'} />
                <PlaylistTrack title={'Title'} artist={'Unknown Artist'} />
                <PlaylistTrack title={'Title'} artist={'Unknown Artist'} />
            </ol>
        </li>
    );
}

export default PlaylistItem;
