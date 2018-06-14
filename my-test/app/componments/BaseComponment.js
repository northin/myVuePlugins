import React from 'react';
import {is} from 'immutable';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { message, Button } from 'antd';
import {dict} from '@redux/action/commonAction.js'
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
    //路由跳转
    urlRedirect = (url) =>{
        this.context.router.history.push(url)
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
BaseComponent.propTypes = {
    onDict: PropTypes.func.isRequired
}
BaseComponent.contextTypes = {
    router: PropTypes.object.isRequired
}
const mapStateToProps  = state => {
    return {
        // orgCode:state.getIn(["common","dict"]).toJS()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDict: (params) => {
            return dispatch(dict(params))
        }
    }
}
export default BaseComponent;
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(BaseComponent)