import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  // faKaggle,
  faLinkedin,
  faTwitter,
  faKeybase,
  // faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'antd/lib/button';
import dp from '3dp.png';
import location from 'location.png';
import CareerTimeline from '../components/CareerTimeline';
import { CAREER_ITEMS } from '../constants/careerData';

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
      // ['https://www.kaggle.com/manuhg', faKaggle],
      ['http://www.linkedin.com/in/manu-hegde', faLinkedin],
      ['https://twitter.com/manuhegdev', faTwitter],
      ['https://keybase.io/gk1000', faKeybase],
      // ['https://stackoverflow.com/users/1147882/manuhg', faStackOverflow],
      // ['mailto:me@manuhegde.in', faEnvelope],
    ];
    return (
      <div className="container-fluid px-0" style={{ width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <div className="text-center p-4">
              <img
                style={{ borderRadius: '50%', width: '150px' }}
                src={dp}
                alt="Manu Hegde"
                className="mb-3"
              />
              <h1 className="mb-3">Manu Hegde</h1>
              <div className="mb-4">
                {links.map((link, i) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    key={i}
                    href={link[0]}
                  >
                    <FontAwesomeIcon icon={link[1]} size="2x" />
                  </a>
                ))}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                  href="mailto:me@manuhegde.in"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
              <div className="mb-3" style={{ fontSize: '1em' }}>
                Geek | Software Engineer | NLP Tinkerer
              </div>
              <div className="mb-4">
                <img
                  src={location}
                  style={{ height: '1.5em' }}
                  alt="Seattle, USA"
                  className="me-2"
                />{' '}
                Seattle, USA
              </div>
              <div>
                <a href="/resume">
                  <Button>Resume</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="p-4 h-100">
              <h2 className="mb-4">Career Timeline</h2>
              <div className="h-100">
                <CareerTimeline items={CAREER_ITEMS} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
