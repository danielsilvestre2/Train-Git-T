 const functions1 = (hello) => {
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

functions1(hello)

// =======================≠=======================

 const buscarUsuario = (callback) => {
  const erro = false

  if (erro) callback('User finded', {nome: "Daniel", idade: 16})
  else callback('User finded', {nome: "Daniel", idade: 12})
}
buscarUsuario((erro, usuario) => {

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

// ===================================================

let age = 23

if (age > 0 && age <= 14) {
   console.log("You are a child!")
} else if (age > 14 && age <= 17) {
   console.log("You are an adolecent!")
} else if (age > 17 && age >= 60) {
   console.log("You are an adult!")
} else if (age > 60) {
   console.log("You are an old people!")
}
