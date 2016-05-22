var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  console.log(data.body[0])
  console.log(data.body[0].id)
  document.body.innerHTML = example({ name: "Space" });

  xhr.get('https://api.wheretheiss.at/v1/satellites/' + JSON.parse(data.body.replace('/[|]/g', ''))[0].id, function(err, iss) {
    console.log((err) ? err : iss)
  })

})

