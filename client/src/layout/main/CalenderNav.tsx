import { useEffect, useState } from 'react';
import Picker from '../../components/UI/Picker';
import classes from './CalendarNav.module.css';

function CalendarNav() {
    const now = new Date();

    const [yearState, setYearState] = useState(now.getFullYear());
    const [monthState, setMonthState] = useState(now.getMonth());
    const [daysState, setDaysState] = useState<number[]>([]);

    useEffect(() => {
        setDaysState(getDays(now.getFullYear(), now.getMonth()));
    }, []);

    const selectYearHandler = (year: string) => {
        setYearState(+year);
        setDaysState(getDays(+year, monthState));
    };

    const selectMonthHandler = (month: string) => {
        setMonthState(+month);
        setDaysState(getDays(yearState, +month));
    };

    const getMonth = (month: number) => {
        return new Date(0, month, 1).toLocaleDateString('en-US', {
            month: 'short',
        });
    };

    const getDays = (year: number, month: number) => {
        const endOfMonth = getEndOfMonth(year, month);
        const days = [];
        for (let i = 1; i <= endOfMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const getEndOfMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    return (
        <>
            <div className={classes.nav}>
                <Picker
                    start={1990}
                    end={now.getFullYear()}
                    onSelect={selectYearHandler}
                />
                <Picker
                    start={0}
                    current={now.getMonth()}
                    end={11}
                    convert={getMonth}
                    onSelect={selectMonthHandler}
                />
            </div>
            <ol className={classes.days}>
                {daysState.map((day) => (
                    <li key={day}>
                        <button>{day}</button>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default CalendarNav;
