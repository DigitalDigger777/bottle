import React from 'react';
import {render} from 'react-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Publish from 'material-ui/svg-icons/editor/publish';


//$('.publish-btn-js').click(function(){
//    alert('ffafa');
//});

export default class MessagesContent extends React.Component{

    constructor(props){
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        console.log(this.state.width);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);

    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

    }

    onItemClick(event) {

        event.currentTarget.style.backgroundColor = '#ccc';

    };

    handleToggle(e){
        //console.log(e.currentTarget);
        //var mrgLeft = $(e.currentTarget).closest('.clearfix').css('margin-left');
        //console.log(mrgLeft);
        if($(e.currentTarget).closest('.clearfix').css('margin-left')==='0px'){
            $(e.currentTarget).closest('.clearfix').animate({
                marginLeft: '-240px',
            }, {
                duration: 400,
            });
        } else {
            $(e.currentTarget).closest('.clearfix').animate({
                marginLeft: '0px',
            }, {
                duration: 400,
            });
        }
    };


    render(){

        return (
            <div>
                <div className="msg-in">
                    <div className="msg-body">
                        <div style={{overflow: 'hidden'}}>
                            <div className="clearfix" style={{width: this.state.width + 240}}>
                                <div className="msg msg-float text" style={{width: this.state.width-80}}>
                                    Контент по-прежнему устойчив
                                    к изменениям спроса. Целевая
                                    аудитория синхронизирует общественный побочный PR-эффект.
                                    Такие дела 🤣🤣🤣
                                </div>
                                <div className="wrap-share-block" onClick={(e) => this.handleToggle(e)}>
                                    <div>
                                        <div className="share-btn">
                                            <i className="material-icons publish-btn-js">publish</i>
                                        </div>
                                        <div className="social clearfix">
                                            <div className="soc-btn facebook"><i className="fa fa-facebook" /></div>
                                            <div className="soc-btn vk"><i className="fa fa-vk" /></div>
                                            <div className="soc-btn twitter"><i className="fa fa-twitter" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="msg-footer">
                        29 марта, 11:30
                    </div>
                </div>
                <div className="msg-out">
                    <div className="msg-body">
                        <div className="msg img">
                            <img src="img/img-in-msg.png" width="100%" alt=""/>
                        </div>
                    </div>
                    <div className="msg-footer text-right">
                        29 марта, 11:30
                    </div>
                </div>
            </div>
        )
    }
}