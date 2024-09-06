import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.jsx'
import './index.css'
import Usercontextprovider from './Context/UserContext.jsx';
import Cartcontextprovider from './Context/CartContext.jsx';
import WishListProvider from './Context/WishlistContext.jsx';

createRoot(document.getElementById('root')).render(

  <WishListProvider>
    <Cartcontextprovider>
      <StrictMode>
        <Usercontextprovider>
          <App />
        </Usercontextprovider>
      </StrictMode>,
    </Cartcontextprovider>
  </WishListProvider>
)
