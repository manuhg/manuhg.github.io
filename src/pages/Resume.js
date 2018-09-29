import React, { Component } from 'react';
import resume_doc from 'Resume.pdf';

class Resume extends Component {
  constructor() {
    super();
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
  }
  onDocumentLoad() {
    this.setState({ toggle: 1 });
  }
  render() {
    return <div>Hang on!</div>;
  }
  componentDidMount() {
    // this.props.history.push(resume_doc);
    window.location = resume_doc;
  }
}
export default Resume;
