import itemDetails from '../components/view/itemDetails'
import inventory from "../components/view/inventory";
// import Test from '../components/view/test'


export const routes = [
    {
        path: '/',
        component: inventory
    },
    {
        path: '/items/:id',
        component: itemDetails
    },
]