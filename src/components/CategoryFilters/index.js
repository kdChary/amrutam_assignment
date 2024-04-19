import './index.css'

const Options = props => {
    const {optionData,addFilter} = props
    const {title,optn1,optn2,optn3,optn4} = optionData

    const onChangeFilter = event =>{
        const value = event.target.value
        addFilter(value)
    }

    return(
        <select id={title} className='filter-dropdown' onChange={onChangeFilter}>
            <option value="">{title}</option>
            <option value={optn1}>{optn1}</option>
            <option value={optn2}>{optn2}</option>
            <option value={optn3}>{optn3}</option>
            <option value={optn4}>{optn4}</option>
        </select>
    )
}

export default Options