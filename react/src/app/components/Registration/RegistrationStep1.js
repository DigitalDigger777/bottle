import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PageBottleBackground from '../PageBottleBackground/PageBottleBackground';

const styles = {
    labelText: {
        color: '#ffffff',
        paddingLeft: 15
    },
    textField: {
        marginBottom: 50
    },
    input: {
        color: '#ffffff',
        border: '1px solid #fff',
        borderRadius: 3,
        padding: '0 10px'
    },
    primaryButton: {
        textAlign: 'center',
        width: '50%'
    }

}

const Messages = () => (
    <PageBottleBackground>
        <div className="wrap-verif">
            <TextField
                hintText="Номер телефона"
                fullWidth={true}
                underlineShow={false}
                style={styles.textField}
                hintStyle={styles.labelText}
                inputStyle={styles.input} />
            <div className="text-center">
                <RaisedButton
                    href="index.html#/registration/enter-code"
                    label="Далее"
                    primary={true}
                    style={styles.primaryButton} />
            </div>
        </div>
        <div className="footer">
            Вход
        </div>
    </PageBottleBackground>
);

export default Messages;