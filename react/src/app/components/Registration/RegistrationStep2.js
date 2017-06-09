import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import PageBottleBackground from '../PageBottleBackground/PageBottleBackground';

const styles = {
    labelText: {
        color: '#ffffff',
        paddingLeft: 15
    },
    textField: {
        marginBottom: 50,
    },
    input: {
        color: '#ffffff',
        border: '1px solid #fff',
        borderRadius: 3,
        padding: '0 10px'
    },
    primaryButton: {
        textAlign: 'center',
        width: '50%',
        marginBottom: 30
    },
    flatButton: {
        fontSize: '14px',
        textTransform: 'normal'
    },
    snackbar: {
        textAlign: 'center'
    }
}

export default class RegistrationStep2 extends React.Component {

    constructor(props) {
        super(props);

        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);

        this.state = {
            open: false,
        };
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    render(){
        return(
            <PageBottleBackground>
                <div className="wrap-verif">
                    <TextField
                        hintText="Код из СМС"
                        fullWidth={true}
                        underlineShow={false}
                        style={styles.textField}
                        hintStyle={styles.labelText}
                        inputStyle={styles.input} />
                    <div className="text-center">
                        <RaisedButton
                            href="index.html#/registration/enter-user-data"
                            label="Далее"
                            primary={true}
                            style={styles.primaryButton} />
                        <div>
                            <FlatButton
                                label="Выслать код повторно"
                                onTouchTap={() => this.handleTouchTap()}
                                primary={true}
                                labelStyle={styles.flatButton} />
                        </div>
                    </div>
                    <Snackbar
                        open={this.state.open}
                        message="Код выслан"
                        autoHideDuration={3000}
                        contentStyle={styles.snackbar}
                        onRequestClose={() => this.handleRequestClose()}
                    />
                </div>
                <div className="footer">
                    Вход
                </div>
            </PageBottleBackground>
        )
    }

}