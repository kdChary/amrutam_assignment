import './index.css'

const Options = props => {
    const {options} = props
    const {title,optn1,optn2,optn3,optn4} = options

    return(
        <select id={title} className='filter-dropdown'>
            <option value="">{title}</option>
            <option value={optn1}>{optn1}</option>
            <option value={optn2}>{optn2}</option>
            <option value={optn3}>{optn3}</option>
            <option value={optn4}>{optn4}</option>
        </select>
    )
}

export default Options