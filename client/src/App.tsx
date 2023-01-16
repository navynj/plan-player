import classes from './App.module.css';
import CalendarNav from './layout/main/CalenderNav';
import TrackGroup from './layout/main/TrackGroup';
import TrackList from './layout/main/TrackList';
import Player from './layout/player/Player';

function App() {
    return (
        <div className={classes.container}>
            <nav>
                <CalendarNav />
            </nav>
            <main>
                <TrackList />
                <TrackGroup />
                <Player />
            </main>
        </div>
    );
}

export default App;
