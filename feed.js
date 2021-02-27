#! /usr/bin/env node

'use strict';

const fs = require('fs');
const { xml2json } = require('xml-js');

const dirSrc = './static';
const dirDest = './assets';
const fileName = 'private_feed';

module.exports.transform = () => {
  fs.readFile(`${dirSrc}/${fileName}.xml`, (err, data) => {
    const { rss } = JSON.parse(
      xml2json(data, { compact: true, spaces: 4 })
    );
    const { channel } = rss;
    const feedJson = JSON.stringify(channel);
    const feedJs = `export const feed = ${feedJson}`;

    fs.writeFile(`${dirDest}/${fileName}.js`, feedJs, (err) => {
      if (err) throw err;
      console.log('Feed XML written to JSON file');
    });
  });
};
