import {Component} from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { filters,doctorsList } from '../DataLists';

import './index.css'
import Navbar from '../Header'
import Options from '../CategoryFilters';
import ProfileCard from '../DoctorProfile';

class FindDoctors extends Component {
    state = {activeFilters:[]}

    //Function to add filters
    onChangeFilter = val =>{
        this.setState(prevState => ({activeFilters:[...prevState.activeFilters,val]}))
    }

    //Banner details section 
    bannerSection = () => (
        <div className="filter-banner">
            <h2 className="banner-heading">Find expert Doctors for an In-clinic session here </h2>
            <div className='banner-filters'>
                <div className='location-container'>
                    <FaLocationDot color="#3a643b"/>
                    
                    <select id="location" placeholder='location'>
                        <option value="">Location</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="chennai">Chennai</option>
                        <option value="kochi">Kochi</option>
                        <option value="vishakapattanam">Vishakapattanam</option> 
                    </select>
                </div>

                <div className='input-container'>
                <input type='search' placeholder='eg. Doctor, specialization, clinic name' className='search-input'/>
                <BsArrowRightShort/>
                </div>
            </div>
        </div>
    )

    //Contains Filter Categories 
    filtersSection = () => (
        <div className="filters-container">
            {filters.map(item => (<Options key={item.title} optionData={item} addFilter={this.onChangeFilter}/>))}
            <select id="all" className='all-options'>
                <option value=''>All Filters</option>
                <option value="allDoctors">All Doctors</option>
                <option value="allGenders">All Genders</option>
                <options value="allFees">All Fees</options>
            </select>
        </div>
    )

    //Displays the applied Filters
    selectedFilters = () => {
        const {activeFilters} = this.state

        return(
        <div className="selected-filter-card">
            
            {activeFilters.length ? activeFilters.map(filter => (<div className='selected-filter' key={filter}>
                <p className="filter-text" >{filter}</p>
                <MdClose />
            </div>)) : <>
            <div className='selected-filter'>
                <p className="filter-text">Hair</p>
                <MdClose/>
            </div>
            <div className='selected-filter'>
                <p className="filter-text">Female</p>
                <MdClose/>
            </div>
            <div className='selected-filter'>
                <p className="filter-text">Hindi</p>
                <MdClose/>
            </div> 
            </>}
            
        </div>
    )}

    //Renders the Profile card of Doctors. 
    doctorsProfileCard = () =>(
        <ul className='profile-card-container'>
            {doctorsList.map(doctor => (<ProfileCard key={doctor.name} doctorData={doctor}/>))}
        </ul>
    )

    render(){
        return(
            <>
            <Navbar/>
            <div className='find-doctor'>
                {this.bannerSection()}
                {this.filtersSection()}
                {this.selectedFilters()}
                {this.doctorsProfileCard()}
            </div>
            </>
        )
    }
}

export default FindDoctors