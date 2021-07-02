import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/produtos" component={Product}></Route>
    </Switch>
  );
}
