import { useState } from 'react';
import classes from './Play.module.css';

function Play(props: {
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}) {
    const { className, onClick } = props;
    const [isPlay, setIsPlay] = useState(true);

    const clickHandler = (event: React.MouseEvent) => {
        setIsPlay((prev) => !prev);
        if (onClick) {
            onClick(event);
        }
    };

    const iconClass = isPlay ? classes.play : classes.pause;

    return (
        <button
            type="button"
            className={`${className} ${classes.button} ${iconClass}`}
            onClick={clickHandler}
        ></button>
    );
}

export default Play;
