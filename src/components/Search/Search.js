import React from 'react'
import './Search.css'

const Search = (props) => {
        return (
        <>
            <div className='divSearch'>
                <input className='inputSearch' id='inputSearchId' 
                    onChange={props.handelChange} value={props.value} 
                    // onKeyDown={props.filltersearch}
                    />
                <span className="loupe">&#128269;</span>
            </div> 
        </>)
    }
    
export default Search