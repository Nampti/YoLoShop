import Home from '../pages/Home';
import Catelog from '../pages/Catelog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catelog', component: Catelog },
    { path: '/cart', component: Cart },
    { path: '/catalog/:slug', component: Product },


]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }