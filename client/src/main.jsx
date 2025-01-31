import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Toaster } from './components/ui/toaster'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<Provider store={store}>
{/* <main>{children}</main> */}
    <App />
        <Toaster />
</Provider>
 </BrowserRouter>

)
