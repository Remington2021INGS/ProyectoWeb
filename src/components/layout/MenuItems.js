import {
    Home,
    Person,
    // Money,
    // List
} from '@material-ui/icons';
import { adminRoutes } from '../../routes/routes';

const menuItems = [
    {
        name: 'Dashboard',
        icon: <Home color='inherit' />,
        route: adminRoutes.dashboard.route,
    },
    {
        name: 'Usuarios',
        icon: <Person color='inherit' />,
        route: adminRoutes.users.route,
    },
    // {
    //     name: 'Solicitudes',
    //     icon: <Money color='inherit'  />,
    //     route: adminRoutes.users.route,
    // },
    // {
    //     name: 'Contactos',
    //     icon: <List color='inherit'  />,
    //     route: adminRoutes.users.route,
    // },
];

export default menuItems;