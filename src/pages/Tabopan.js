import React, { Component } from 'react';
import { links } from 'links.js';
import Button from 'antd/lib/button';

class Tabopan extends Component {
  render() {
    const categories = [...new Set(links.map(link => link.category))];
    console.log(categories);
    const categoriesed_links = categories.map(category => [
      category,
      links.filter(link => link.category == category),
    ]);
    console.log(categoriesed_links);
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <h1>Tabopan</h1>
            <h2> open tabs to keep a tab on the world</h2>
            <div>
              {categoriesed_links.map((category, i) => (
                <Button
                  key={i}
                  onClick={() => category[1].map(link => window.open(link.url, '_blank'))}
                >
                  {category[0] + ' (' + category[1].length + ')'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tabopan;
