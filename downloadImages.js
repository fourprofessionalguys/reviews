const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const Sharp = require('sharp')

const UNSPLASH_API_KEY = require('./server/unsplashApiKey.js');
const HOUSES_COLLECTION = [3488741, 'interiors'];
const PEOPLE_COLLECTION = [138794, 'people'];

function fetchPhotos(collectionId, pathName) {
  return Axios({
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
        let path = Path.resolve(__dirname, 'images', pathName, `${names[i]}.jpeg`)
        let writer = Fs.createWriteStream(path)
        let response = await Axios({
          url,
          method: 'GET',
          responseType: 'stream'
        });
        response.data.pipe(writer)
        return new Promise((resolve, reject) => {
          writer.on('finish', resolve)
          writer.on('error', reject)
        });
      }));
    });
}

function resizeImages(pathName) {
  Fs.readdir(Path.join(__dirname, 'images', pathName), { encoding: 'utf8' }, (error, data) => {
    if (error) console.error(error);
    else {
      data.forEach(img => {
        console.log(img);
        let inPath = Path.resolve(__dirname, 'images', pathName, img)
        let outPath = Path.resolve(__dirname, 'images', 'small_interiors', `225x225_${img}`)
        Sharp(inPath).resize({
          width: 225,
          height: 225,
          fit: Sharp.fit.cover,
          position: Sharp.strategy.entropy
        }).toFile(outPath)
          .catch(console.error);
      });
    }
  });
};

// fetchPhotos(...PEOPLE_COLLECTION)
// resizeImages(PEOPLE_COLLECTION[1])
// fetchPhotos(...HOUSES_COLLECTION)
// resizeImages(HOUSES_COLLECTION[1])
