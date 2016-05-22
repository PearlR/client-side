var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" });

  xhr.get('https://api.wheretheiss.at/v1/satellites/' + data.body[0].id, function(err, iss) {
    console.log((err) ? err : iss)
  })

})

