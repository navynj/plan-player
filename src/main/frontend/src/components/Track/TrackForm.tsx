import classes from './TrackForm.module.css';

function TrackForm() {
    return (
        <form className={classes.form}>
            <div className={classes.img}>
                <img src=""></img>
            </div>
            <div className={classes.inputs}>
                <input
                    className={classes.track}
                    type="text"
                    placeholder="Add new todo track"
                />
                <input
                    className={classes.artist}
                    type="text"
                    placeholder="Unknown Artist"
                />
            </div>
            <button className={classes.button} type="submit">
                Add
                <br />
                Track
            </button>
        </form>
    );
}

export default TrackForm;
