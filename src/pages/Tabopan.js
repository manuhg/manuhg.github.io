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
    console.log(categories);
    const categoriesed_links = categories.map(category => [
      category,
      links.filter(link => link.category === category),
    ]);
    const categoriesed_links_sans_errands = categories
      .filter(cat => cat !== 'errands')
      .map(category => [category, links.filter(link => link.category === category)]);
    console.log(categoriesed_links);
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12" style={{ padding: '2px', margin: '2px' }}>
            <h1>Tabopan</h1>
            <h2> open tabs to keep a tab on the world</h2>
            <div>
              {categoriesed_links.map((category, i) => (
                <Button key={i} onClick={() => openTabs(category[1])}>
                  {category[0] + ' (' + category[1].length + ')'}
                </Button>
              ))}
            </div>
            <br />
            <Button onClick={() => categoriesed_links.map(category => openTabs(category[1]))}>
              {' '}
              All
            </Button>
            <Button
              onClick={() => categoriesed_links_sans_errands.map(category => openTabs(category[1]))}
            >
              {' '}
              All sans errands
            </Button>
          </div>
        </div>
      </div>
    );
  };
}
export default Tabopan;
