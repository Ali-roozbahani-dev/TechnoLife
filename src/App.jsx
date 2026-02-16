import Pages from './Routes'
import ContextProvider from './Context.jsx'
import ShoppingBagProvider from './Components/Context/ShoppingBag_Context/shopping-bag.context.jsx.jsx'
import CommentAlertProvider from './Components/Context/alerts/CommentAlertContext.jsx'
import ScrollToTop from './Components/Common/ScrollToTop.jsx'


function App() {  

  return (
    <>
    <ScrollToTop />
    <ShoppingBagProvider>
      <ContextProvider>
        <CommentAlertProvider>
         <Pages />
        </CommentAlertProvider>
      </ContextProvider>
    </ShoppingBagProvider>
    </>
  )
}

export default App
