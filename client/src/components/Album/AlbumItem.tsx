import classes from './AlbumItem.module.css';

function AlbumItem(props: { title: string; size: string; src?: string }) {
    const { title, size, src } = props;
    return (
        <li className={classes.item} style={{ width: `${size}` }}>
            <div
                className={classes.imgContainer}
                style={{ width: `${size}`, height: `${size}` }}
            >
                {src ? <img src={src} /> : ''}
            </div>
            <span>{title}</span>
        </li>
    );
}

export default AlbumItem;
