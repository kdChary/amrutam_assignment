import './index.css'

const Navbar = () => (
    <nav className='nav-bg'>
        <img 
        src="https://res.cloudinary.com/dgga8cymk/image/upload/v1713459897/Amrutam/amrutam-logo.png"
         alt="website logo" className='website-logo'/>

        <div className='nav-options'>
            <button type="button" className='option'>Home</button>
            <button type="button" className='option'>Find Doctors</button>
            <button type="button" className='option'>About Us</button>
        </div>
    </nav>
)

export default Navbar