import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import UploadAvatar from 'material-ui/svg-icons/action/account-circle';


import PageBottleBackground from '../PageBottleBackground/PageBottleBackground';

const styles = {
    labelText: {
        color: '#ffffff',
        paddingLeft: 15
    },
    textField: {
        marginBottom: 20,
    },
    input: {
        color: '#ffffff',
        border: '1px solid #fff',
        borderRadius: 3,
        padding: '0 10px'
    },
    radio: {
        display: 'inline-block',
        width: 60
    },
    labelRadio: {
        color: '#ffffff'
    },
    iconRadio: {
        marginRight: 8,
    },
    checkbox: {
        display: 'table-cell',
        heigh: '29px',
        verticalAlign: 'middle',
        width: 'auto',
        lineHeight: '29px'
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    primaryButton: {
        textAlign: 'center',
        width: '50%'
    },
    link: {
        fontWeight: 'bold',
        verticalAlign: 'middle',
    }
}

export default class RegistrationStep3 extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            acceptRules: false
        }
    }

    handleChange(event, acceptRules){
        this.setState({
            acceptRules: acceptRules
        });
    }
    render(){

        return (
            <PageBottleBackground>
                <div className="wrap-user-data">
                    <div style={styles.textField}>
                        <TextField
                            hintText="Имя Фамилия"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <TextField
                            hintText="Никнейм"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <TextField
                            type="password"
                            hintText="Пароль"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <TextField
                            hintText="Город"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <DatePicker
                            hintText="Дата рождения"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <div className="clearfix group-form">
                            <div className="col-50">
                                <RadioButtonGroup name="shipSpeed" defaultSelected="male">
                                    <RadioButton
                                        value="male"
                                        label="M"
                                        labelStyle={styles.labelRadio}
                                        iconStyle={styles.iconRadio}
                                        style={styles.radio}
                                    />
                                    <RadioButton
                                        value="female"
                                        label="Ж"
                                        labelStyle={styles.labelRadio}
                                        iconStyle={styles.iconRadio}
                                        style={styles.radio}
                                    />
                                </RadioButtonGroup>
                            </div>
                            <div className="col-50 text-right">
                                <div className="wrap-uload-ava">
                                    Аватар
                                    <input type="file" style={styles.uploadInput} />
                                </div>
                            </div>
                        </div>
                        <div className="wrap-checkbox-link group-form">
                            <Checkbox
                                label="Принимаю&nbsp;"
                                iconStyle={styles.iconRadio}
                                labelStyle={styles.labelRadio}
                                style={styles.checkbox}
                                onCheck={this.handleChange}
                            />
                            <Link to="/registration/user-agreement" style={styles.link}>условия</Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <RaisedButton
                            href="index.html#/chats"
                            label="Далее"
                            primary={true}
                            disabled={this.state.acceptRules ? false : true}
                            style={styles.primaryButton} />
                    </div>
                </div>
            </PageBottleBackground>
        )
    }
}