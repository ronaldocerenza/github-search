import { useEffect, useState } from "react"
import classes from './Repos.module.css'

export const Repos = () => {
  const [repos, setRepos] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/ronaldocerenza/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }
  , [])


  return (
    <div className={classes.repos_conteiner}>
      {repos.map((repo: any) => (
        <div className={classes.repos} key={repo.id}>
          <p className={classes.name}>{repo.name}</p>
          <p className={classes.description}>{repo.description}</p>
          <p>{repo.language}</p>
          <a href={ repo.html_url }>Veja no Git</a>
        </div>
      ))}
    </div>
  )
}
