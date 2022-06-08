import React, { Component, useState } from "react";
import SockJsClient from 'react-stomp';
const SOCKET_URL = 'http://ep20210201.iptime.org:38765/ws-message';

const Items = () => {
    const list = [];
    const [listItems, setListItems] = useState(list);

    const onConnected = () => {
        console.log("Connected!!")
    }

    const onMessageReceived = (msg) => {
        console.log(msg.message);
        setListItems(listItems.concat(msg.message));
    }
    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />
            <React.Fragment>
                <ul className="list-group">
                    {console.log(listItems)}
                    {listItems.map(listitem => (
                        <li className="list-group-item list-group-item-primary">
                            {listitem}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        </div>
    );
}

export default Items;