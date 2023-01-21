import classes from './App.module.css';
import CalendarNav from './layout/main/CalenderNav';
import TrackGroup from './layout/main/TrackGroup/TrackGroup';
import TrackList from './layout/main/TrackList/TrackList';
import Player from './layout/player/Player';

function App() {
    return (
        <div className={classes.container}>
            <nav>
                <CalendarNav />
            </nav>
            <main className={classes.main}>
                <div className={classes.sections}>
                    <TrackList />
                    <TrackGroup />
                </div>
                <Player />
            </main>
        </div>
    );
}

export default App;
