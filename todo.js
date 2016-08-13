/*global Vue*/
var app = new Vue({
  el: '#input',
  data: {
    listItem: []
  },
  ready: function () {
    this.getFirebase()
    var that = this
    setInterval(function () {
      that.getFirebase()
    }, 2000)
  },
  methods: {
    add: function (data) {
      console.log(data.id, data.name, data.url)
      var setdata = {
        id: data.id,
        name: data.name,
        url: data.url
      }
      this.postFirebase(setdata)
    },
    postFirebase: function (data) {
      var linkFire = 'https://testresapi.firebaseio.com/github.json'
      var that = this
      this.$http.post(linkFire, data).then(function (res) {
        that.getFirebase()
      })
    },
    getFirebase: function () {
      var linkFire = 'https://testresapi.firebaseio.com/github.json'
      var that = this
      this.$http.get(linkFire).then(function (res) {
        console.log(
          JSON.parse(res.body)
        )
        that.listItem = JSON.parse(res.body)
      })
    }
  }
})
console.log(app)
