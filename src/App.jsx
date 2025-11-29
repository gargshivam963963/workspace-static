import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import SinglePage from './pages/SinglePage'
import FormWrapper from "./pages/auth/FormWrapper"
import { BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import SignInComponent from './pages/auth/components/SignInComponent'
import SignUpComponent from './pages/auth/components/SignUpComponent'

function Layout() {

  return (
      <Routes>
        <Route path="/landing" element={<LandingWrapper />}>
          <Route index  element={<LandingPage />} />
          <Route path=":slug" element={<SinglePage />} />
        </Route>

        <Route path="/auth" >
          <Route index element={<Navigate to="/auth/sign-in" ></Navigate> }/>
          <Route path="sign-in" element={<SignInComponent />} />
          <Route path="sign-up" element={<SignUpComponent />} />

          <Route path="accept-invite/:token1/:token2/:token3" element={<FormWrapper />} />
          <Route path=":formName" element={<FormWrapper />} />

        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

const LandingWrapper = ()=>{
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  return <>
          <Modal
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Navbar
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Outlet />
        <Footer />

  </>
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;