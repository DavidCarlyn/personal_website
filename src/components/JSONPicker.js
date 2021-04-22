import { useState } from 'react'

JSONPicker.defaultProps = {
    data : {},
    data_key : "root",
    is_list_item : false,
    data_selector : (data) => console.log(data, "selected")
}

function JSONPicker(props) {
    const [isPushed, setIsPushed] = useState(false);
    const [elements, setElements] = useState([]);

    let label = props.is_list_item ? "list-item" : props.data_key;

    const isArray = Array.isArray(props.data);

    const onClick = (e) => {
        e.preventDefault();
        if (isPushed) {
            setElements([]);
            setIsPushed(!isPushed);
            return;
        }

        let newElements = [];

        for (var key in props.data) {
            if (isArray) {
                newElements.push(<JSONPicker data={props.data[key]} is_list_item={true} data_selector={props.data_selector} />);
            } else if (typeof props.data === "object") {
                newElements.push(<JSONPicker data={props.data[key]} data_key={key} data_selector={props.data_selector} />);
            }
        }

        if (typeof props.data !== "object") {
            newElements.push(<div>{props.data}</div>);
        }

        setElements(newElements);
        setIsPushed(!isPushed);
    };

    return (
        <div className="JSONPicker">
            <div className="clickable" onClick={onClick}>
                {label}
                <button onClick={(e) => {
                    e.preventDefault();
                    props.data_selector(props.data);
                }}>Select</button>
            </div>
            {elements}
        </div>
    )
}

export default JSONPicker
