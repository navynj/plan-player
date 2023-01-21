import classes from './ExploreLayout.module.css';

import AlbumItem from '../../../components/Album/AlbumItem';
import ArtistItem from '../../../components/Artist/ArtistItem';
import TrackItem from '../../../components/Track/TrackItem';
import Search from '../../../components/UI/Search';
import TrackForm from '../../../components/Track/TrackForm';

const SIZE = '4rem';

function ExploreLayout() {
    return (
        <>
            <div className={classes.search}>
                <Search />
            </div>
            <div className={classes.content}>
                <div className={classes.lists}>
                    <ul className={classes.list}>
                        <h2>Artists</h2>
                        <div>
                            <ArtistItem name="Study Kim" size={SIZE} />
                            <ArtistItem name="Study Kim" size={SIZE} />
                            <ArtistItem name="Study Kim" size={SIZE} />
                            <ArtistItem name="Study Kim" size={SIZE} />
                        </div>
                    </ul>
                    <ul className={classes.list}>
                        <h2>Albums</h2>
                        <div>
                            <AlbumItem title="React" size={SIZE} />
                            <AlbumItem title="React" size={SIZE} />
                            <AlbumItem title="React" size={SIZE} />
                            <AlbumItem title="React" size={SIZE} />
                        </div>
                    </ul>
                </div>
                <ul className={classes.track}>
                    <div className={classes.header}>
                        <h2>Tracks</h2>
                        <div className={classes.filter}>
                            <input
                                id="track-filter-todo"
                                type="radio"
                                name="track-filter"
                                defaultChecked={true}
                            />
                            <label htmlFor="track-filter-todo">
                                Todo Tracks
                            </label>
                            <span>|</span>
                            <input
                                id="track-filter-all"
                                type="radio"
                                name="track-filter"
                            />
                            <label htmlFor="track-filter-all">All Tracks</label>
                        </div>
                    </div>
                    <div className={classes.form}>
                        <TrackForm />
                    </div>
                    <div>
                        <TrackItem
                            id="t1"
                            title="Dive into Redux"
                            artist="Study Kim"
                            src=""
                        />
                        <TrackItem
                            id="t2"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t3"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                        <TrackItem
                            id="t4"
                            title="Take a walk"
                            artist="Fitness Jung"
                            src=""
                        />
                    </div>
                </ul>
            </div>
        </>
    );
}

export default ExploreLayout;
