import uuid from 'uuid/v1';
import axios from 'axios';

const defaultImage = 'https://www.ludwig-musser.com/application/themes/ludwig_musser/assets/images/artist-list-default.jpg';
export default {
  state: [],
  reducers: {
    addArtist(state, name, img) {
      img = img || defaultImage;
      return [
        ...state,
        {
          id: uuid(),
          name,
          img,
        }
      ];
    },
    reset() {
      return [];
    }
  },
  effects: (dispatch) => ({
    async findArtists(text) {
      const payload = {
        params: `query=${text}&hitsPerPage=6&filters=type%3Aartists`
      }
      const { data } = await axios.post('https://ufhsub9629-dsn.algolia.net/1/indexes/search/query?x-algolia-application-id=UFHSUB9629&x-algolia-api-key=69ed687a250f4c895cc73f6ee142a42e', JSON.stringify(payload));
      dispatch.artists.reset()
      data.hits.forEach(artistData => {
        dispatch.artists.addArtist(artistData.title_en, artistData.img)
      })
    }
  }),
};
