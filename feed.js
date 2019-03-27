const feedXML = require('/static/feed.xml');
import { xml2json } from "xml-js";

export default {
  getFeed() {
    const { rss } = JSON.parse(
      xml2json(feedXML, { compact: true, spaces: 4 })
    );
    return rss.channel;
  }
};
