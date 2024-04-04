import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import { useAuth } from './hooks/useAuth';
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login  from './pages/Login';
import Signup from './pages/Signup';
import { Suspense } from 'react';
import Loading from './components/Loading';
function App() {
const {user} = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
        

            <Route 
              path="/" 
              element={user ? <Home/>  : <Navigate to="/login"/>} 
              
            />
            <Route path='/login'
              element={!user ? <Login/> : <Navigate to="/"/>}
            >

            </Route>
            <Route path='/signup'
              element={!user ? <Signup/> : <Navigate to="/"/>}
            >

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

