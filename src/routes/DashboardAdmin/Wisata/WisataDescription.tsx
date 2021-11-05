import React, { Component } from "react";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";

class EditorConvertToJSON extends Component {
  constructor(props: any) {
    super(props);
    const contentState = null;
    this.state = {
      contentState,
    };
  }

  onContentStateChange: any = (contentState: any) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { contentState }: any = this.state;
    // const newBody = draftToHtml(contentState);
    // const sanitizedData = () => ({
    //   __html: DOMPurify.sanitize(newBody),
    // });
    return (
      <div>
        <Editor
          initialContentState={contentState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
          placeholder="Ketik Deskripsi Wisata"
        />
        <h3>Preview:</h3>
        {/* <div dangerouslySetInnerHTML={sanitizedData()}></div> */}
      </div>
    );
  }
}

export default EditorConvertToJSON;
