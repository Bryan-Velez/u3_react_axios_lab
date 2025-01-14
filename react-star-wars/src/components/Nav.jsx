import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <ul className='nav'>
            <li>
                <Link to ='/'>Home</Link>
            </li>
            <li>
                <Link to ='/starships'>Starships</Link>
            </li>
            <li>
                <Link to ='/films'>Films</Link>
            </li>
            <li>
                <Link to ='/planets'>Planets</Link>
            </li>
            <li>
                <Link to ='/characters'>Characters</Link>
            </li>
        </ul>
    )
}

export default Nav