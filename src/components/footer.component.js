
import React from 'react'
import {Link} from 'react-router-dom'

const footer = () => {
    return (
        <div className='navbar  bg-dark fixed-bottom'>
            <div className='col-md-5'>
            <Link className='navbar-brand'  to='/'>
        </Link>
        </div>
        </div>
    )
}

export default footer