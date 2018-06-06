import React from 'react';
import {is} from 'immutable';
import { message, Button } from 'antd';
class BaseComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
    }
    //信息框
    success = (msg) => {
        message.success(msg);
    };
    error = (msg) => {
        message.error(msg);
    };
    //提示框
    onModalClick = ( ) => {
        this.child.showModal()
    }
    onRef = (ref) => {
        this.child = ref
    }
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }

        for (const key in nextState) {
            if (!is(thisState[key], nextState[key])) {
                return true;
            }
        }
        return false;
    }
}

export default BaseComponent;