import { Search } from "../components/Search";

import { useState } from "react";
import { UserProps } from "../types/user";
import { User } from "../components/User";
import { Error } from "../components/Error";


export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    // resetar o erro e o usuário
    setError(false)
    setUser(null)

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()

    if (response.status === 404) {
      setError(true)
      return
    }
    // transformar os dados recebidos em um objeto, de acordo com as propriedades de UserProps
    const { avatar_url, followers, following, location, login } = data

    // criar um objeto com as propriedades de UserProps
    const userData: UserProps = {
      avatar_url,
      followers,
      following,
      location,
      login,
    };
    
    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && (
        <User {...user}/>
      )}
      {error && (
        <Error />
      )}
    </div>
  )
}