import Home from './Home'
import Auth from './Auth'
import Register from './Register'
import Otp from './Otp'

export const routes  = [
    {path: "/otp", component: Otp, exact:true},
    {path: "/register", component: Register, exact:true},
    {path: "/login", component: Auth},
    {path: "/", component: Home},
]
