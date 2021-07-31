import routes, { adminRoutes } from './routes/routes';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import PrivateRoute from './routes/PrivateRoute';
import AdminLayout from './components/layout/AdminLayout';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={adminRoutes.login.route} component={adminRoutes.login.component} />
                <Layout>
                    <Switch>
                        {
                            routes.map((route, i) => <Route key={i} exact path={route.route} component={route.component} />)
                        }
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
                <AdminLayout>
                    <PrivateRoute exact path={adminRoutes.users.route} component={adminRoutes.users.component} />
                </AdminLayout>                
            </Switch>
        </BrowserRouter>
    );
}

export default App;
