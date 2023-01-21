import { useState } from 'react';

import classes from './TrackList.module.css';

import Picker from '../../../components/UI/Picker';
import ExploreLayout from './ExploreLayout';
import StatisticsLayout from './StatisticsLayout';
import TableLayout from './TableLayout';

function TrackList() {
    const [navState, setNavState] = useState(0);

    const navConvertMethod = (value: number) => {
        const nav = ['Explore', 'Statistics', 'Table'];
        return nav[value];
    };

    const navSelectHandler = (value: string) => {
        setNavState(+value);
    };

    const navItems = [<ExploreLayout />, <StatisticsLayout />, <TableLayout />];

    return (
        <section>
            <nav className={classes.nav}>
                <Picker
                    start={0}
                    end={2}
                    current={navState}
                    isShowArrow={true}
                    convert={navConvertMethod}
                    onSelect={navSelectHandler}
                />
            </nav>
            {navItems[navState]}
        </section>
    );
}

export default TrackList;
