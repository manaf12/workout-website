import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const {logout} = useLogout();
  const {user} = useAuth();
  const handlesubmit = ()=>{
      logout();
    }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            {user && <span>{user.email} </span>}
              <button onClick={handlesubmit}>
                  Logout
              </button>
          </div>
          {!user && (
           <div>

           <Link to='/login'>
             Login
             </Link>
             <Link to='/signup' >Signup</Link>
         </div>
          
          )}
           
        </nav>
      </div>
    </header>
  )
}

export default Navbar