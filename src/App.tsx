import { Link, Outlet } from "react-router-dom"

import classes from './App.module.css'

function App() {


  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Link className={classes.link} to={`/`}>Home</Link>
      <Outlet />
    </div>
  )
}

export default App
