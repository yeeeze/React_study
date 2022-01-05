import React, {useState} from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState("");
    const [msg, setMsg] = useState("");

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMsg = (e) => setMsg(e.target.value);

    const onClick = () => {
        alert(username + ":" + msg);
        setUsername("");
        setMsg("");
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeUsername}/>
            <input type="text" name="msg" placeholder="아무거나 입력하세요" value={msg} onChange={onChangeMsg} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;