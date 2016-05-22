var xhr = require('xhr')
var example = require('./views/example.hbs')
var whereTheIss = require('./views/whereTheIss.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" })

  var satellite = JSON.parse(data.body.replace('/[|]/g', ''))[0]

  document.getElementById('button').addEventListener('click', function () {

    xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite.id, function(err, res) {
      console.log("HEY HEY", (err) ? err : res)

      var iss = JSON.parse(res.body)

      document.getElementById('paragraph').innerHTML = whereTheIss(iss)

    })

  })

})
