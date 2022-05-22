import React, { Component } from 'react';
import { links } from 'links.js';
import Button from 'antd/lib/button';

class Tabopan extends Component {
  openTabs = tabs => {
    tabs.map(link => window.open(link.url, '_blank'));
  };
  render = () => {
    const openTabs = this.openTabs;
    const categories = [...new Set(links.map(link => link.category))];

    const frequencies = [...new Set(links.map(link => link.frequency))];

    console.log(categories, frequencies);

    const categoriesed_links = categories.map(category => [
      category,
      links.filter(link => link.category === category),
    ]);

    const frequency_based_links = frequencies
      .map(freq => [
        freq, //String(freq).padStart(2,'0'),
        links.filter(link => link.frequency === freq),
      ])
      .sort();

    const links_sans_errands = links.filter(l => l.category !== 'comm/email');

    const daily_sans_email_comm = links
      .filter(l => l.category !== 'comm/email' && l.frequency === 1)
      .map(l => [l.frequency, l]);

    console.log(categoriesed_links);
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12" style={{ padding: '2px', margin: '2px' }}>
            <h1>Tabopan</h1>
            <h2> open tabs to keep a tab on the world</h2>
            <div>
              <div>
                <h3>Category wise</h3>
              </div>
              <div>
                {categoriesed_links.map((category, i) => (
                  <Button key={i} onClick={() => openTabs(category[1])}>
                    {category[0] + ' (' + category[1].length + ')'}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3>Reccomended Frequency wise</h3>
              </div>
              <div>
                {frequency_based_links.map((freq, i) => (
                  <Button key={i} onClick={() => openTabs(freq[1])}>
                    {freq[0] + ' (' + freq[1].length + ')'}
                  </Button>
                ))}
              </div>
            </div>
            <br />
            <br />
            <Button onClick={() => openTabs(links)}> All ({links.length})</Button> {'  '}
            <Button onClick={() => openTabs(links_sans_errands)}>
              {' '}
              All sans email/comm ({links_sans_errands.length})
            </Button>
            <br />
            <br />
            <br />
            <Button onClick={() => openTabs(daily_sans_email_comm)}>
              {' '}
              Daily sans email/comm ({daily_sans_email_comm.length})
            </Button>
            <br />
          </div>
        </div>
      </div>
    );
  };
}

export default Tabopan;
