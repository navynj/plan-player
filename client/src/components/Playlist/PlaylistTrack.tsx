import classes from './PlaylistTrack.module.css';
import Option from '../UI/Option';
import Play from '../UI/Play';

function PlaylistTrack(props: { title: string; artist: string; img?: string }) {
    return (
        <li className={classes.item}>
            <div className={classes.track}>
                <div className={classes.img}>
                    <img src={props.img || ''} />
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>{props.title}</p>
                    <p className={classes.artist}>{props.artist}</p>
                </div>
            </div>
            <div className={classes.buttons}>
                <Play />
                <Option />
            </div>
        </li>
    );
}

export default PlaylistTrack;
