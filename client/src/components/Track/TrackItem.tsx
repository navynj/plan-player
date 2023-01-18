import Option from '../UI/Option';
import Play from '../UI/Play';
import classes from './TrackItem.module.css';

function TrackItem(props: {
    id: string;
    title: string;
    artist: string;
    src: string;
}) {
    const { id, title, artist, src } = props;
    const hour = 0;
    const min = 0;
    const sec = 0;

    const formatDigit = (num: number) => {
        return num.toLocaleString('en-US', { minimumIntegerDigits: 2 });
    };
    return (
        <li className={classes.item}>
            <div className={classes.info}>
                <input id={`track-checkbox-${id}`} type="checkbox" />
                <label
                    htmlFor={`track-checkbox-${id}`}
                    className={classes.checkbox}
                />
                <div className={classes.img}>
                    <img src={src}></img>
                </div>
                <div>
                    <p className={classes.title}>{title}</p>
                    <p className={classes.artist}>{artist}</p>
                </div>
            </div>
            <div className={classes.controls}>
                <div>
                    {formatDigit(hour)}:{formatDigit(min)}:{formatDigit(sec)}
                </div>
                <Play className={classes.play} />
                <Option />
            </div>
        </li>
    );
}

export default TrackItem;
