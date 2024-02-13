const accordions = document.querySelectorAll('.accordion-title')

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('open')
    accordion.nextElementSibling.classList.toggle('open')
  })
})
