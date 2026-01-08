import Pages from './Routes'
import ContextProvider from './Context.jsx'


function App() {  

  return (
    <ContextProvider>
      <Pages />
    </ContextProvider>
  )
}

export default App
