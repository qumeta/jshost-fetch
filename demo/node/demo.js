fetch('http://127.0.0.1:6000')
  .then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }

    return res.json()
  })
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.error(err)
  })
