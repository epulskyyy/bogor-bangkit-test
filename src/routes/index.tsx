import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Layout} from "../components";
import {routes} from "./routes";

const Routes = () => (
    <Layout title="Pemulihan Ekonomi">
        <Suspense fallback={<div/>}>
            <Switch>
                {routes.map((v,k)=>(
                <Route exact={v.exact} key={k} path={v.path} component={v.component}/>))}
            </Switch>
        </Suspense>
    </Layout>
);

const RootRoutes = () => <Route component={Routes}/>;

export default RootRoutes;
