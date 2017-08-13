import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Toggle from 'material-ui/Toggle';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';

import NavigationBottom from '../NavigationBottom';
import PanelTop from '../PanelTop';

const styles = {

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

const topPanelTitle = "Кому отправим?";
const PanelTopColLeft =<IconButton href="/#/chats"><NavigateBefore /></IconButton>;
const PanelTopColRight=<IconButton></IconButton>;

export class RandomUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            country: window.localStorage.getItem('settingSelectCountry'),
            city: window.localStorage.getItem('settingSelectCity'),
            gender: window.localStorage.getItem('settingSelectGenderName'),
            ageFrom: window.localStorage.getItem('ageFrom'),
            ageTo: window.localStorage.getItem('ageTo')
        };

        this.changeRedirect = this.changeRedirect.bind(this);
    }

    changeRedirect() {
        window.localStorage.setItem('settingRedirectUrl', '/#/whom-send');
    }

    render(){
        return(
            <div>
                <Divider style={{width: '100%'}} />
                <div className="input-row clearfix">
                    <div className="col-60">
                        <div className="my-label">
                            Страна
                        </div>
                    </div>
                    <div className="col-40">
                        <div className="text-right">
                            <Link to="/settings/country" onClick={ this.changeRedirect }>{ this.state.country ? this.state.country : 'Страна'}</Link>
                        </div>
                        <ChevronRight style={{position: 'absolute', right: '0', top: '12px'}} />
                    </div>
                </div>
                <Divider style={{width: '100%'}} />
                <div className="input-row-city clearfix">
                    <div className="col-40">
                        <div className="my-label">
                            Город
                        </div>
                    </div>
                    <div className="col-60">
                        <div className="text-right">
                            <Link to="/settings/city" onClick={ this.changeRedirect }>{ this.state.city ? this.state.city : 'Город'}</Link>
                        </div>
                        <ChevronRight style={{position: 'absolute', right: '0', top: '12px'}} />
                    </div>
                </div>
                <Divider style={{width: '100%'}} />
                <div className="input-row clearfix">
                    <div className="col-60">
                        <div className="my-label">
                            Пол
                        </div>
                    </div>
                    <div className="col-40">
                        <div className="text-right">
                            <Link to="/settings/gender" onClick={ this.changeRedirect }>{ this.state.gender ? this.state.gender : 'Мужской'}</Link>
                        </div>
                        <ChevronRight style={{position: 'absolute', right: '0', top: '12px'}} />
                    </div>
                </div>
                <Divider style={{width: '100%'}} />
                <div className="input-row clearfix">
                    <div className="col-60">
                        <div className="my-label">
                            Возраст
                        </div>
                    </div>
                    <div className="col-40">
                        <div className="text-right">
                            <Link to="/settings/old">{this.state.ageFrom ? this.state.ageFrom : 18 }—{this.state.ageTo ? this.state.ageTo : 19 }</Link>
                        </div>
                        <ChevronRight style={{position: 'absolute', right: '0', top: '12px'}} />
                    </div>
                </div>
                <Divider style={{width: '100%'}} />
            </div>
        );
    }
}

export default class WhomSend extends React.Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            RandomUser: false
        }
    }


    handleChange(event, RandomUser){
        this.setState({
            RandomUser: RandomUser
        });
    }

    render(){

        return (
            <div>

                <PanelTop title={topPanelTitle} colLeft={PanelTopColLeft} colRight={PanelTopColRight} />

                <div className="wrap-content">
                    <div>
                        <Divider />
                        <div className="group-input">
                            <div className="input-row clearfix">
                                <div className="col-60">
                                    <div className="my-label">
                                        Случайный пользователь
                                    </div>
                                </div>
                                <div className="col-40 text-right" style={{paddingRight: 0}}>
                                    <Toggle
                                        defaultToggled={false}
                                        onToggle={this.handleChange}
                                        style={{marginTop: 12, marginBottom: 12, display: 'inline-block', width: 'auto'}}
                                    />
                                </div>
                            </div>

                            {this.state.RandomUser ? '' : <RandomUser />}

                            <div className="text-center"  style={{marginTop: '60px'}}>
                                <RaisedButton
                                    href="/#/whom-send/messages"
                                    label="Далее"
                                    primary={true}
                                    style={styles.primaryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <NavigationBottom />
            </div>
        )
    }
}