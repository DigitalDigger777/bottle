import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ChatListItem from './ChatListItem';
import axios from 'axios';
import Config from '../../Config';

// const usersData =[
//     {
//         name: 'Гордеев Иван',
//         msg: 'Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.',
//         msgPhoto: '',
//         time: 'Сегодня, 12:03',
//         img: 'img/user-1.png',
//     },
//     {
//         name: 'Мараканская Екатерина',
//         msg: 'Контент по-прежнему устойчив к изменениям спроса. Целевая аудитория синхронизирует общественный побочный PR-эффект. Создание приверженного покупателя программирует ребрендинг.',
//         msgPhoto: '',
//         time: 'Вчера, 00:32',
//         img: 'img/user-2.png',
//     },
//     {
//         name: 'Марк Яснаускис',
//         msg: 'Представляется логичным, что медийная реклама индуктивно масштабирует креатив.',
//         msgPhoto: '',
//         time: '29 марта, 11:30',
//         img: 'img/user-3.png',
//     },
//     {
//         name: 'Марк Яснаускис',
//         msg: '',
//         time: '10 августа 2016, 11:30',
//         img: 'img/user-4.png',
//         display: 'fff'
//     }
// ];

//usersData.forEach(function(item, i) {
//    if(item.msg===''){
//        item.msgPhoto='displayico';
//        alert(item.msgPhoto);
//    }
//});


export default class ChatList extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        const config = new Config();
        const userId = window.localStorage.getItem('userId');

        axios({
            method: 'get',
            url: config.backendUrl + 'rest/chat/',
            resolveWithFullResponse: true,
            params: {
                userId: userId,
                method: 'LIST'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({items: response.data})
        }).catch(error => {

        });
    }

    render(){
        console.log(this.state.items.length);

        if (this.state.items.length === 0) {
            return (
                <div className="wrap-content">
                    <div className="chat-list">
                        Please wait...
                    </div>
                </div>
            );
        } else {
            return (
                <div className="wrap-content">
                    <div className="chat-list">
                        {this.state.items.map((message, index) => (
                                <div key={index}>
                                    <ChatListItem message={message} />
                                    <Divider />
                                </div>
                            )
                        )}
                    </div>
                </div>
            );
        }
    }
}