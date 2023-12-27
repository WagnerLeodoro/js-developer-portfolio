const accordeon = document.querySelectorAll('.accordeon .trigger')

accordeon.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const accordeon = trigger.parentElement
    showAccordeonContent(accordeon)
  })
})

function showAccordeonContent(accordeon) {
  accordeon.classList.toggle('open')
}
