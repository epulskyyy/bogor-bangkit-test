import Home from './Home'
import Auth from './Auth'
import Register from './Register'

export const routes  = [
    {path: "/register", component: Register, exact:true},
    {path: "/login", component: Auth},
    {path: "/", component: Home},
]
