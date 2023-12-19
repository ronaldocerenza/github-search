import { useEffect, useState } from "react"
import classes from './Repos.module.css'
import { RepoProps } from "../types/repos"

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
      {repos.map((repo: RepoProps) => (
        <div className={classes.repos} key={repo.id}>
          <p className={classes.name}>{repo.name}</p>
          <div className={classes.description}>
            {!repo.description && (<p>Descrição não Informada</p>)}
            {repo.description && (<p>{repo.description}</p>)}
            {repo.language && (<p>{repo.language}</p>)}
            {!repo.language && (<p>Linguagem não Informada</p>)}
          </div>
          <a href={ repo.html_url }>Veja no Git</a>
        </div>
      ))}
    </div>
  )
}
