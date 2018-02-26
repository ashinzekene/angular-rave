var fs = require("fs")

var files = ['LICENSE.md','CHANGELOG.md','README.md', 'package.json']
for (let file of files) {
  fs.readFile(`${file}`, "utf-8", (err, data) => {
    fs.writeFile(`lib/${file}`, data, (err) => {
      if(err) console.log(err)
      console.log(`Created lib/${file}`)
    })
  })
}