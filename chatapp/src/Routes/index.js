import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Login = lazy(() => import('../Pages/Login'));
const Home = lazy(() => import('../Pages/Home'));

const Routes = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <div className="body_main">
                    <Switch>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Route path="/" exact component={Login} />
                            <Route path="/home" exact component={Home} />
                        </Suspense>
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </Fragment>
    )

}

export default Routes;
