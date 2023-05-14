function getProducts () {
    return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err)=> {console.log(err) })
  }
  
  export default getProducts