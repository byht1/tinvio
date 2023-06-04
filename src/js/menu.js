import ref from './ref'
const { burgerBtn, header, body } = ref

burgerBtn.addEventListener('click', function (e) {
  header.classList.toggle('show')
  body.classList.toggle('hidden')
})
