import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers.js/getproducts.js";
import cart from "./components/cart.js";



/*  UI Elements  */
/* Ocultar loader */

loader() 

/* mostrar menu */
showMenu ()

/* mostrar carrito */

showCart()

/* End UI Elements */


/* products */
products(await getProducts())
const {db, printProducts} = products(await getProducts())

/* carrito */
cart(db, printProducts)