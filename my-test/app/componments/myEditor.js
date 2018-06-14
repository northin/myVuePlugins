import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BaseComponment from "@comp/BaseComponment.js"
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
class MyEditor extends Component{

    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }
    componentWillMount() {
    }
    onContentStateChange = (contentState) => {
        this.setState({
            editorState:contentState,
        });
        this.props.getData(convertToRaw(this.state.editorState.getCurrentContent()))
      };
    render(){
        const editorState = this.state.editorState
        return (
            <div>
               <Editor
               
                editorState={editorState}
                localization={{ locale: 'zh' }}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onContentStateChange}
                />
            </div>
        )
    }
}

MyEditor.propTypes = {
}
const mapStateToProps  = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEditor)