import classes from './ExploreLayout.module.css';

import AlbumItem from '../../../components/Album/AlbumItem';
import ArtistItem from '../../../components/Artist/ArtistItem';
import TrackItem from '../../../components/Track/TrackItem';
import Search from '../../../components/UI/Search';

const SIZE = '4rem';

function ExploreLayout() {
    return (
        <>
            <div className={classes.search}>
                <Search />
            </div>
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
            <TrackItem />
        </>
    );
}

export default ExploreLayout;
