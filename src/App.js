import routes, { adminRoutes } from './routes/routes';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Layout from './components/layout/Layout';

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
                    </Switch>
                </Layout>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
