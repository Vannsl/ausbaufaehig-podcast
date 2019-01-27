import axios from "axios";
import { xml2json } from "xml-js";

export default {
  async getFeed() {
    let result;

    try {
      const response = await axios.get("./feed.xml");
      const { rss } = JSON.parse(
        xml2json(response.data, { compact: true, spaces: 4 })
      );
      result = rss.channel;
    } catch (error) {
      result = {};
    }

    return result;
  }
};
