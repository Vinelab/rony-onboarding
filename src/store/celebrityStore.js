import customAxios from '../config/requestConfig'
import customDetailsAxios from '../config/requestDetailsConfig'

export default{
  state: {
    celebrities: [],
    details: []
  },
  fetchCelebrities: function () {
    console.log('fetchCelebrities')
    return customAxios.get(customAxios.celebrityUrl).then((response) => {
      this.state.celebrities = response.data.data
      console.log('self.state.celebrities' + self.state.celebrities)
    }).catch(function (error) {
      console.log(error)
    })
  },
  fetchCelebrityDetails: function (celebrityId) {
    return customDetailsAxios.get(customDetailsAxios.detailsUrl)
    .then((response) => {
      this.state.details = response.data.data
      console.log('from store: ' + this.state.details)
    }).catch(function (error) {
      console.log(error)
    })
  },
  getObjects: function (obj, key, val) {
    var objects = []
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue
      if (typeof obj[i] === 'object') {
        objects = objects.concat(this.getObjects(obj[i], key, val))
      } else if (i === key && obj[key] === val) {
        objects.push(obj)
      }
    }
    return objects
  }
}
