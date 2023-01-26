import classes from './Layout.module.css';
import Player from "./player/Player";
import CalendarNav from "./main/CalenderNav";
import TrackGroup from "./main/TrackGroup/TrackGroup";
import TrackList from "./main/TrackList/TrackList";


function MainLayout() {
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

export default MainLayout;
