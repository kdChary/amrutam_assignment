import {Component} from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import './index.css'
import Navbar from '../Header'
import Options from '../CategoryFilters';

const filters = [
    {
        title:"Expertise",
        optn1:"skin",
        optn2:"fertility",
        optn3:"heart",
        optn4:'ent',
        optn5:'gynecology',
    },{
        title:"Gender",
        optn1:"Male",
        optn2:"Female",
        optn3:"Neutral",
        optn4:'',
        optn5:'',
    },{
        title:"Fees",
        optn1:"499-999",
        optn2:"1000-1599",
        optn3:"1599-1799",
        optn4:'1799-1999',
        optn5:'1999-2599',
    },{
        title:"Languages",
        optn1:"Telugu",
        optn2:"English",
        optn3:"Tamil",
        optn4:'Hindi',
        optn5:'Kannada',
    }
]

class FindDoctors extends Component {
    state = {}

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

    filtersSection = () => (
        <div className="filters-container">
            {filters.map(item => (<Options key={item.title} options={item} />))}
            <select id="all" className='all-options'>
                <option value=''>All Filters</option>
                <option value="allDoctors">All Doctors</option>
                <option value="allGenders">All Genders</option>
                <options value="allFees">All Fees</options>
            </select>
        </div>
    )

    selectedFilters = () => (
        <div className="selected-filter-card">
            <div className='selected-filter'>
                <p className="filter-text">Hair care</p>
                <MdClose/>
            </div>
            <div className='selected-filter'>
                <p className="filter-text">Female</p>
                <MdClose/>
            </div>
            <div className='selected-filter'>
                <p className="filter-text">Telugu</p>
                <MdClose/>
            </div>
        </div>
    )

    render(){
        return(
            <>
            <Navbar/>
            <div className='find-doctor'>
                {this.bannerSection()}
                {this.filtersSection()}
                {this.selectedFilters()}
                Hello Render me !!
            </div>
            </>
        )
    }
}

export default FindDoctors