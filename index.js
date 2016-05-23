var whatsTheJoke = require('./views/whatsTheJoke.hbs')
var xhr = require('xhr')
var example = require('./views/example.hbs')
var whereTheIss = require('./views/whereTheIss.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err)

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" })

  var satellite = JSON.parse(data.body.replace('/[|]/g', ''))[0]

  $(document).ready(function (){

    console.log('READY READY READY')

    $('button').click(function () {

      console.log('CLICK CLICK CLICK')

      // xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite.id, function(err, res) {
      //   console.log("HEY HEY", (err) ? err : res)

      var httpRequest = new XMLHttpRequest()

      httpRequest.onreadystatechange = function(err, res) {
        console.log("HEY HEY", (err) ? err : res)
        var joke = JSON.parse(res.body)
        // document.getElementById('paragraph').innerHTML = whereTheIss(iss)
        document.getElementById('paragraph').innerHTML = whatsTheJoke(joke)
      }

      httpRequest.open('GET', 'http://192.168.1.246/v1/jokes/random', true)
      httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*')
      httpRequest.setRequestHeader('Accept', 'application/json')
      httpRequest.send()
    })
  })
})

