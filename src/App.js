import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// contexts
import { AuthProvider } from "./contexts/AuthContext"

// components
import Chats from "./components/Chats"
import Login from "./components/Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/Chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
