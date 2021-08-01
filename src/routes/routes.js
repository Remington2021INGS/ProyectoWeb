import Home from "../pages/Home";
import Requirements from './../pages/Requirements';
import Request from './../pages/Request';
import AboutUs from './../pages/AboutUs';
import Contact from './../pages/Contact';
import Login from './../pages/admin/Login';
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";

const routes = [
    {
        name: 'Inicio',
        route: '/',
        component: Home
    },
    {
        name: 'Requisitos',
        route: '/requirements',
        component: Requirements
    },
    {
        name: 'Solicitud de E-Card',
        route: '/request',
        component: Request
    },
    
    {
        name: '¿Quienes somos?',
        route: '/about-us',
        component: AboutUs
    },
    {
        name: 'Contactenos',
        route: '/contact',
        component: Contact
    }
]

export const adminRoutes = {
    login: {
        route: '/admin/login',
        component: Login
    },
    dashboard: {
        route: '/admin',        
        component: Dashboard
    },
    users: {
        route: '/admin/users',        
        component: Users
    },

}

export default routes;