/* const functions1 = (hello) => {
  console.log('Hello, World!')
  hello()
  setTimeout(() => {
    console.log('Hello Universe!')
  }, 500)
}

const hello = () => {
  setTimeout(() => {
    console.log('Hello Galaxy!')
  }, 1000)
}

functions1(hello) */

// =======================≠=======================

/* const buscarUsuario = (callback) => {
  const erro = false
  
  if (erro) callback('User finded', {nome: "Daniel", idade: 16})
  else callback('User finded', {nome: "Daniel", idade: 12})
}
buscarUsuario((erro, usuario) => {
  */
  
const img = document.querySelector('.viewer')
  
const testFunc = async () => {
  const options = {
    method: 'get',
    headers: { 
      'Content-type': 'application/json',
      'Authentication': 'Client-Id Q2tld8ltGnBRav2hRUdJihze4IOr05VYzf2vEHjAMy8'
    }
  }
  try {
    const resp = await fetch('https://jsonplaceholder.com/users')
    const json = resp.json()
    console.log(json)
  }
  catch(error) {
    throw new Error('Seever Error')
  }
}

testFunc()