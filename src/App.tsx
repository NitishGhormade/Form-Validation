import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

