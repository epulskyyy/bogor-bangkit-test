import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Layout} from "../components";
import {routes} from "./routes";

const Routes = () => (
    <Layout>
        <Suspense fallback={<div/>}>
            <Switch>
                {routes.map((v,k)=>(
                <Route key={k} path={v.path} component={v.component}/>))}
            </Switch>
        </Suspense>
    </Layout>
);

const RootRoutes = () => <Route component={Routes}/>;

export default RootRoutes;
