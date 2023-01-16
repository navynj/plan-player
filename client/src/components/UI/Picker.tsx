function Picker(props: {
    start: number;
    end: number;
    current?: number;
    convert?: (value: number) => string;
    onSelect?: (value: string) => void;
}) {
    const { start, end, convert } = props;
    const current = props.current || props.current === 0 ? props.current : end;
    const options = [];

    for (let i = start; i <= end; i++) {
        options.push(i);
    }

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.onSelect) {
            props.onSelect(event.target.value);
        }
    };

    return (
        <select
            style={{ fontSize: 'inherit' }}
            onChange={changeHandler}
            defaultValue={current}
        >
            {options.map((option) => {
                return (
                    <option key={option} value={option}>
                        {convert ? convert(option) : option}
                    </option>
                );
            })}
        </select>
    );
}

export default Picker;
