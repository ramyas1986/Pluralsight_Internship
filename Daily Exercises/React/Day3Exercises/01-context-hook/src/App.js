import { createContext, useState } from 'react'

import ComponentA from './components/ComponentA'

export const UserContext = createContext();

function App() {
  const [user] = useState({
    username: 'timk',
    firstName: 'tim',
    lastName: 'kellogg'
  })

  return (
    <div>
      <UserContext.Provider value={{user}}>
      <ComponentA user={user}/>
      </UserContext.Provider>
    </div>
  )
}

export default App