import { FaStar,FaGraduationCap,FaRupeeSign } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { LuPill } from "react-icons/lu";

import './index.css'

const ProfileCard = props => {
    const {doctorData} = props
    const {name,
        image,
        rating,
        specialty,
        experience,
        languages,
        videoFee,
        chatFee} = doctorData

    return(
    <div className='profile-card'>
        <div className='card'>
            <img 
            src={image} 
            alt="dr_prerna" 
            className="profile-image"/>
            <div className='rating-card'>
                <p className='rating'>{rating}</p>
                <FaStar className="icon"/>
            </div>
        </div>

        <div className="doctor-details-card">
            <h3 className="doctor-name">{name}</h3>

            <ul className="specifications-list">
                <li className="specification-item">
                    <LuPill className="details-icon"/>
                    <p className="profession">{specialty}</p>
                </li>

                <li className="specification-item">
                    <FaGraduationCap className="details-icon"/>
                    <p className="profession">{experience}</p>
                </li>

                <li className="specification-item">
                    <MdOutlineChat className="details-icon"/>
                    <p className="profession">{languages}</p>
                </li>
            </ul>
        </div>

        <div className="consultation-details">
            <div className="consultation-card">
                <p className="consultation-type">Video Consultation</p>
                <p className="consultation-fee">
                    <FaRupeeSign />{videoFee}
                </p>
            </div>

            <div className="consultation-card">
                <p className="consultation-type">Chat Consultation</p>
                <p className="consultation-fee">{chatFee}</p>
            </div>
        </div>

        <div className="view-profile-section">
            <button className="profile-btn" type="button" >View Profile</button>
            <button className="profile-btn book" type="button" >Book a consultation</button>
        </div>
    </div>
)
}
export default ProfileCard