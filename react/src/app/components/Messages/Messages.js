import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Paper from 'material-ui/Paper';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import CameraAlt from 'material-ui/svg-icons/image/camera-alt';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';

import PanelTop from '../PanelTop';
import NavigationBottom from '../NavigationBottom';
import MessagesContent from '../Messages/MessagesContent';

const styles = {

    labelText: {
        color: '#000000',
        paddingLeft: 15
    },
    textField: {
        height: '34px'
    },
    input: {
        color: '#000000',
        border: '1px solid #cdced2',
        borderRadius: '17px',
        height: '34px',
        padding: '0 13px'
    },
    primaryButton: {
        textAlign: 'center',
        width: '50%'
    },
    leftCol: {
        lineHeight: '55px',
        color: '#ffffff',
        fontSize: '16px',
        marginTop: 0,
        marginLeft: 0
    },
    rightCol: {
        lineHeight: '64px',
        color: '#ffffff',
        fontSize: '16px',
        marginTop: 0,
        marginRight: 0
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: '20px'
    }
};

export default class Messages extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            RandomUser: false,
            title: props.title,
            colLeft: props.colLeft,
            colRight: props.colRight,
            content: props.content
        }
    }

    handleChange(event, RandomUser){
        this.setState({
            RandomUser: RandomUser
        });
    }

    render(){

        return (
            <div className="messages">
                <PanelTop title={this.state.title} colLeft={this.state.colLeft} colRight={this.state.colRight} />
                <div className="msgs-list">

                    {this.state.content ? <MessagesContent /> : ""}

                </div>
                <Paper zDepth={1} className="footer">
                    <IconButton className="btn-camera"><i className="material-icons">camera_alt</i></IconButton>
                    <TextField
                        name="message"
                        fullWidth={true}
                        underlineShow={false}
                        style={styles.textField}
                        hintStyle={styles.labelText}
                        inputStyle={styles.input} />
                    <IconButton className="btn-circle"><i className="material-icons">arrow_upward</i></IconButton>

                </Paper>
            </div>
        )
    }
}