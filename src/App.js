import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'antd/lib/button';
import dp from 'Manu.png';
import Resume from 'Resume.pdf';

// import { Document, Page } from 'react-pdf';

import 'css/loader.css';
import 'css/App.css';

class App extends Component {
  render() {
    // const Loader = () => (
    //   <div>
    //     <div className="lds-ring" style={{ alignSelf: 'center' }}>
    //       <div /> <div /> <div /> <div />
    //     </div>
    //   </div>
    // );
    const links = [
      ['https://github.com/manuhg', faGithub],
      ['http://www.linkedin.com/in/manu-hegde', faLinkedin],
      ['https://twitter.com/manuhegdev', faTwitter],
      ['mailto:me@manuhegde.in', faEnvelope],
    ];
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ borderRadius: '50%', width: '150px' }} src={dp} alt="Manu Hegde" />
            <h1>Manu Hegde</h1>
            {links.map((link, i) => (
              <a className="mr-auto" key={i} href={link[0]}>
                <FontAwesomeIcon icon={link[1]} size="2x" />&nbsp;
              </a>
            ))}
          </div>
          <div className="col-12">
            <div className="text-center">
              <div style={{ fontSize: '1em', padding: '2px' }}>
                <br />
                VII Sem CSE student at Dr.Ambedkar Institute of Technology
              </div>
              <div>&nbsp;</div>
              <div>
                <a href={Resume}>
                  <Button>Resume</Button>
                  {/* <Document file={Resume} onLoadSuccess={this.onDocumentLoad}>
                    <Page pageNumber={1} />
                  </Document> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
