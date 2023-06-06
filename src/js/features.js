import ref from './ref'
const { featuresBthList, listChats, listOrders, listPayments, imgChats, imgOrders, imgPayments } =
  ref

const addClass = (node) => {
  node.forEach((el) => {
    el.classList.add('visually-hidden')
  })
}

const removeClass = (node) => {
  node.forEach((el) => {
    el.classList.remove('visually-hidden')
  })
}

featuresBthList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return
  const operation = e.target.dataset.operation

  switch (operation) {
    case 'chats':
      removeClass([listChats, imgChats])
      addClass([listOrders, listPayments, imgOrders, imgPayments])
      break
    case 'orders':
      removeClass([listOrders, imgOrders])
      addClass([listChats, listPayments, imgPayments, imgChats])
      break
    case 'payments':
      removeClass([listPayments, imgPayments])
      addClass([listChats, listOrders, imgOrders, imgChats])
      break
  }
})
