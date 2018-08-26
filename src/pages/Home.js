import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'antd/lib/button';
import dp from '2dp.jpg';

class Home extends Component {
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
      ['https://stackoverflow.com/users/1147882/manuhg', faStackOverflow],
      ['mailto:me@manuhegde.in', faEnvelope],
    ];
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ borderRadius: '50%', width: '150px' }} src={dp} alt="Manu Hegde" />
            <h1>Manu Hegde</h1>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://dev.to/manuhg">
                <img
                  style={{ marginBottom: '10px', width: '25px' }}
                  src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                  alt="Manu Hegde's DEV Profile"
                />
              </a>&nbsp;
              {links.map((link, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-auto"
                  key={i}
                  href={link[0]}
                >
                  <FontAwesomeIcon icon={link[1]} size="2x" />&nbsp;
                </a>
              ))}
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <div style={{ fontSize: '1em', padding: '2px' }}>
                <br />
                Student | Geek | Machine Learning Enthusiast
              </div>
              <div>&nbsp;</div>
              <div>
                <a href="/resume">
                  <Button>Resume</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
