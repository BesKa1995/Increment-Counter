const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const prevVal = +counter.innerText
    counter.innerText
    const increment = target / 100
    if (prevVal < target) {
      counter.innerText = `${(prevVal + increment)}`
      setTimeout(updateCounter, 1)
    }
  }
  updateCounter()
})
