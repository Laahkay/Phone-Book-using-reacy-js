import React from 'react'
import {Link} from 'react-router-dom'
const navBar = () => {
  return (
   <div >
   <nav className='nav'>
<Link to='/'>Phone Book</Link>

<Link to='/display'>Phone Book List</Link>
</nav>
</div>
  )
}

export default navBar
