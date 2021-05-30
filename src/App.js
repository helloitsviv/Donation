import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "./Home"
import ContactUs from "./ContactUs"
import About from "./About"



function App() {
  return (
    <>
    <AnimationRevealPage>
      
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ContactUs' exact component={ContactUs} />
           <Route path='/About' exact component={About} />
        </Switch>
      </Router>
      
    </AnimationRevealPage>
    </>
  )
}

export default App;