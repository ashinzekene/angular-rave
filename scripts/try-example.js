var fs = require("fs")

files = ['angular-rave.component.ts', 'angular-rave.directive.ts', 'angular-rave.module.ts', 'rave-options.ts']
for (let filename of files) {
  fs.readFile(`src/${filename}`, "utf-8", (err, data) => {
    if(err) console.log(err)
    fs.writeFile(`example/src/app/angular-rave/${filename}`, data, (err) => {
      if(err) console.log(err)
        console.log(`Written ${filename}`)
    })
  })

}