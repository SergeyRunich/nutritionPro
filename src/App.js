import { Layout } from "antd";
import "./App.css";
import "./styles/layout.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Logo from "./components/logo";
import Orders from "./components/orders";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Navigation from "./components/navigation";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <div className="header">
            <NavLink to="/" className="logo">
              <Logo />
            </NavLink>
            <Navigation />
          </div>

          <Content>
            <div className="contentContainer">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/orders">
                  <Orders />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Content>

          <div className="footerContent">
            <span>© 2021 NUTRITIONPRO</span>
            <span className="contact">+420 774 137 352</span>
          </div>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
