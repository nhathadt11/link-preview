window.document.addEventListener('DOMContentLoaded', () => {
  const form = window.document.querySelector('form')
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      setLoading(true)

      const targetUrl = document.getElementById('targetUrl').value
      fetch(`/api/lookup?q=${targetUrl}`)
        .then(res => res.json())
        .then(json => {
          setLoading(false)
          setError()
          display(json)
        })
        .catch(setError)
    })
  }
})

const setLoading = (show = true) => {
  const lookupButton = document.getElementById('lookupBtn')
  if (show) {
    lookupButton.classList.add('loading')
  } else {
    lookupButton.classList.remove('loading')
  }
}

const display = (content) => {
  const results = document.getElementById('results')
  if (results) {
    results.innerHTML = prettyPrintJson.toHtml(content)
  }
}

const setError = (error) => {
  document.getElementById('error').innerText = error
  setLoading(false)
}
