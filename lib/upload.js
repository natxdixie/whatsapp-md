const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

module.exports = async buffer => {
  const { ext } = await fromBuffer(buffer)
  let form = new FormData
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://uploader.frangky.me/upload', {
    method: 'POST',
    body: form
  })
  let img = await res.json()
  if (img.error) throw img.error
  return img
}
