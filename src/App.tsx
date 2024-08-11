
import './App.css'
import Header from './components/header/header'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
          </Routes>
        </main>
      
        </BrowserRouter>
    </>
  )
}

export default App
