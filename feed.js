#! /usr/bin/env node

'use strict';

const fs = require('fs');
const { xml2json } = require('xml-js');

const dir = './static';
const fileName = 'feed';

module.exports.transform = () => {
  fs.readFile(`${dir}/${fileName}.xml`, (err, data) => {
    const { rss } = JSON.parse(
      xml2json(data, { compact: true, spaces: 4 })
    );
    const { channel } = rss;
    const feedJson = JSON.stringify(channel);
    const feedJs = `module.exports = ${feedJson}`;

    fs.writeFile(`${dir}/${fileName}.js`, feedJs, (err) => {
      if (err) throw err;
      console.log('Feed XML written to JSON file');
    });
  });
};
