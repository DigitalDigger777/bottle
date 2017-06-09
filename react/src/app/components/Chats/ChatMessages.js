import React, {Component} from 'react';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Avatar from 'material-ui/Avatar';

import Messages from '../Messages/Messages';

const topPanelTitle = <Avatar src="/img/user-3.png" />;
const PanelTopColLeft = <IconButton href="index.html#/chats"><NavigateBefore /></IconButton>;
const PanelTopColRight = <IconButton href="index.html#/whom-send"><ContentCreate /></IconButton>;

export default class ChatMessages extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return (

            <Messages title={topPanelTitle} colLeft={PanelTopColLeft} colRight={PanelTopColRight} content={true} />
        )
    }
}