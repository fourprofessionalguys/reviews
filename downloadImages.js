const fs = require('fs')
const path = require('path')
const axios = require('axios')
const UNSPLASH_API_KEY = require('./server/unsplashApiKey.js');

const HOUSES_COLLECTION = [3488741, 'interiors'];
const PEOPLE_COLLECTION = [138794, 'people'];

function fetchPhotos(collectionId, pathName) {
  return axios({
    url: `https://api.unsplash.com/collections/${collectionId}/photos`,
    params: {
      'page': 1,
      'per_page': '100',
      'client_id': UNSPLASH_API_KEY
    },
    method: 'GET'
  })
    .then(res => res.data.map(item => [`https://unsplash.com/photos/${item.id}/download?force=true`, item.id]))
    .then(data => {
      const names = data.map(item => item[1]);
      const urls = data.map(item => item[0]);
      return Promise.all(urls.map(async function (url, i) {
        let path = path.resolve(__dirname, 'images', pathName, `${names[i]}.jpg`)
        let writer = fs.createWriteStream(path)
        let response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
        })
        response.data.pipe(writer)
        return new Promise((resolve, reject) => {
          writer.on('finish', resolve)
          writer.on('error', reject)
        })
      }))
    })
}

// fetchPhotos(...PEOPLE_COLLECTION)
// fetchPhotos(...HOUSES_COLLECTION)
