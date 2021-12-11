const test:string = 'Qualquer String Tipada'

const button = document.querySelector('.teste3')

button?.addEventListener('click', () => {
  const title = document.querySelector('h1')

  if (title?.className === 'teste') {
    title.classList.remove('teste')
    title.classList.add('teste2')
    return
  }

  if (title?.className === 'teste2') {
    title.classList.remove('teste2')
    return
  }

  title?.classList.add('teste')
})