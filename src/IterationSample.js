import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: "여름"},
        {id: 2, text: "바다"},
        {id: 3, text: "파도"},
        {id: 4, text: "아이스크림"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = (e) => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText("");
    }

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id != id);
        setNames(nextNames);
    }

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;