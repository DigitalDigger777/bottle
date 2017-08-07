import React, {Component} from 'react';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Avatar from 'material-ui/Avatar';
import Config from '../Config';
import axios from 'axios';

import Messages from '../Messages/Messages';

const topPanelTitle = <Avatar src="/img/user-3.png" />;
const PanelTopColLeft = <IconButton href="index.html#/chats"><NavigateBefore /></IconButton>;
const PanelTopColRight = <IconButton href="index.html#/whom-send"><ContentCreate /></IconButton>;

export default class ChatMessages extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            chatId: props.match.params.chatId,
            items: []
        }
    }

    componentDidMount(){
        const config = new Config();
        const userId = window.localStorage.getItem('userId');

        axios({
            method: 'get',
            url: config.backendUrl + 'rest/message/',
            resolveWithFullResponse: true,
            params: {
                userId: userId,
                chatId: this.state.chatId,
                method: 'LIST'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({items: response.data})
        }).catch(error => {

        });
    }

    render(){

        if (this.state.items.length === 0) {
            return (
                <div>Please wait...</div>
            );
        } else {
            return (
                <div>
                    {this.state.items.map((message, index) => (
                            <Messages key={index} title={topPanelTitle} colLeft={PanelTopColLeft} colRight={PanelTopColRight} content={true} message={message}/>
                        )
                    )}
                </div>

            );
        }
    }
}