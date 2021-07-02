import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/produtos">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
