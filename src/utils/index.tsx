import { IQuery } from "../interface/base";

const utils = {
  getQuery: (query: IQuery) => {
    const { limit, q } = query;

    let rs = "?";

    limit && (rs += `limit=${limit}`);
    q && (rs += `&q=${q}`);

    return rs;
  },

  sliceString: (text: string, sliceIdx = 25) => {
    return text.length > sliceIdx ? `${text.slice(0, sliceIdx)}...` : text;
  },
};

export default utils;
