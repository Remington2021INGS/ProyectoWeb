import routes, { adminRoutes } from './routes/routes';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={adminRoutes.login.route} component={adminRoutes.login.component} />
                <PrivateRoute exact path={adminRoutes.dashboard.route} component={adminRoutes.dashboard.component} />
                <PrivateRoute exact path={adminRoutes.users.route} component={adminRoutes.users.component} />
                <Layout>
                    <Switch>
                        {
                            routes.map((route, i) => <Route key={i} exact path={route.route} component={route.component} />)
                        }
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
