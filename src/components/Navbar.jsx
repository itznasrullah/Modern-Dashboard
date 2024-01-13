import './Navbar.css'
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as UserProfile } from "../assets/user.svg";
import { ReactComponent as Newspaper } from "../assets/newspaper.svg";
import { ReactComponent as List } from "../assets/list.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { ReactComponent as Exit } from "../assets/exit.svg";

const Navbar = () => {
	return (
		<div className='Navbar' >
			<div className='nav-outer-btn'>
				<Logo className='logo'/>
				<Search className='nav-btn' alt="search-btn" />
			</div>
			<div className='nav-container'>
				<div className='nav-main-btn'>
					<Home className='nav-btn selected' alt="home-btn" />
					<Newspaper className='nav-btn fill' alt="newspaper-btn" />
					<List className='nav-btn fill' alt="list-btn" />
					<UserProfile className='nav-btn' alt="user-profile-btn" />
					<Search className='nav-btn search-btn' alt="search-btn" />
				</div>
				<div className='nav-outer-btn'>
					<Notification className='nav-btn' alt="notification-btn" />
					<Exit className='nav-btn' alt="exit-btn" />
				</div>
				<Notification className='nav-btn notification' alt="notification-btn" />
			</div>
		</div>
	)
}

export default Navbar