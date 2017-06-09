import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ChatListItem from './ChatListItem';

const usersData =[
    {
        name: 'Гордеев Иван',
        msg: 'Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.',
        msgPhoto: '',
        time: 'Сегодня, 12:03',
        img: 'img/user-1.png',
    },
    {
        name: 'Мараканская Екатерина',
        msg: 'Контент по-прежнему устойчив к изменениям спроса. Целевая аудитория синхронизирует общественный побочный PR-эффект. Создание приверженного покупателя программирует ребрендинг.',
        msgPhoto: '',
        time: 'Вчера, 00:32',
        img: 'img/user-2.png',
    },
    {
        name: 'Марк Яснаускис',
        msg: 'Представляется логичным, что медийная реклама индуктивно масштабирует креатив.',
        msgPhoto: '',
        time: '29 марта, 11:30',
        img: 'img/user-3.png',
    },
    {
        name: 'Марк Яснаускис',
        msg: '',
        time: '10 августа 2016, 11:30',
        img: 'img/user-4.png',
        display: 'fff'
    }
];

//usersData.forEach(function(item, i) {
//    if(item.msg===''){
//        item.msgPhoto='displayico';
//        alert(item.msgPhoto);
//    }
//});

const ChatList = () => (
    <div className="wrap-content">
        <div className="chat-list">
            {usersData.map((user) => (
                <div>
                    <ChatListItem
                        key={user.img}
                        img={user.img}
                        name={user.name}
                        msg={user.msg}
                        time={user.time}
                    />
                    <Divider />
                </div>
            ))}
        </div>
    </div>
);

export default ChatList;