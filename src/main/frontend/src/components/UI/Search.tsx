import classes from './Search.module.css';

function Search() {
    return (
        <input
            className={classes.input}
            placeholder="Enter search keywords"
        ></input>
    );
}

export default Search;
