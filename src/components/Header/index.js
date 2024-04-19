import {withRouter} from 'react-router'

import './index.css'

const Navbar = () => (
    <nav className='nav-bg'>
        <img 
        src="https://res.cloudinary.com/dgga8cymk/image/upload/v1713459897/Amrutam/amrutam-logo.png"
         alt="website logo" className='website-logo'/>

        {/* Navigation buttons  */}
        <div className='nav-options'>
            <button type="button" className='option'>Home</button>
            <button type="button" className='option'>Find Doctors</button>
            <button type="button" className='option'>About Us</button>
        </div>

        {/* log-in and sign-up buttons  */}
        <div className="log-options">
            <button className='login-btn'>Login</button>
            <button className='sign-up-btn'>Sign-Up</button>
        </div>
    </nav>
)

export default withRouter(Navbar)