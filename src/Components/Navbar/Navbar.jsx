import "./Navbar.css"
import { Calendar, LogOut, Menu, Settings, User } from 'lucide-react'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useContext } from "react"
import { DataContext, SignupContext } from "../../App"
import { UserContext } from "../../Navigation/ProtectedRoutes"

const Navbar = ({ setsidebarOpen }) => {

  const navigate = useNavigate();
  const { user, setuser } = useContext(UserContext);
  const { data, setdata } = useContext(DataContext);

  const logoutHandler = () => {
    setdata({
      ...data,
      currentUser: {
        id: null,
        status: false
      }
    });
    navigate('/login');
    toast.success("Logout successful");
  }

  const handleYearChange = (e) => {
    const select = e.target.value;
    setuser({
      ...user,
      selectedYear: select
    });
  }

  return (
    <div className='navbar'>
      <div className='nav-left'>
        <button className='nav-btn' onClick={() => setsidebarOpen(true)}>
          <Menu size={35} />
        </button>
        <div className='nav-logo'>
          <h2>🌾 KrishiKosh</h2>
          <h3>Farmer's Expense & Revenue Tracker</h3>
        </div>
      </div>
      <div className="nav-right">
        <div className="year-selection">
          <Calendar className='calender-icon' />
          <select className="year-select" id="financial_year" name="financial_year" value={user?.selectedYear ?? '2024-25'} onChange={handleYearChange}>
            {user?.years?.map(year => (<option key={year.year} value={year.year}>{year.year}</option>)) || (<option value='2024-25'>2024-25</option>)}
          </select>
        </div>
        <div className="profile-container">
          <ProfileIcon className='profile-avtar' />
          <div className="profile-info">
            <h3>{user?.name || 'User'}</h3>
            <p>Farmer</p>
          </div>
          <div className="profile-drop-down">
            <button onClick={() => navigate('/setting')} className='account-setting profile-btn'>
              <Settings className='icon' />
              <span>Account Setting</span>
            </button>
            <button onClick={logoutHandler} className='profile-logout profile-btn'>
              <LogOut className='icon' />
              <span> Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar