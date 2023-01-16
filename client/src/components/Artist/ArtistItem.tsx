import classes from './ArtistItem.module.css';

function ArtistItem(props: { name: string; size: string; src?: string }) {
    const { name, size, src } = props;
    return (
        <li className={classes.item} style={{ width: `${size}` }}>
            <div
                className={classes.imgContainer}
                style={{ width: `${size}`, height: `${size}` }}
            >
                {src ? <img src={src} /> : ''}
            </div>
            <span>{name}</span>
        </li>
    );
}

export default ArtistItem;
