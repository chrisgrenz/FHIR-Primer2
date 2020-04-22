const fs = require('fs')

const list = function(path) {
  return fs.readdirSync(path).map(f=> {
    try {
      let fjson = JSON.parse(fs.readFileSync(`${path}/${f}`))
      return {
        "filename": `${path}/${f}`,
        "resourceType": fjson.resourceType,
        "id": fjson.id,
        "url": fjson.url,
        "version": fjson.version,
        "kind": fjson.kind,
        "type": fjson.type
      }
    }
    catch (e) {
      return { "filename": `${path}/${f}`}
    }
  })
}

exports.modules = {
  files: list('profiles').concat(list('resources'))
}
