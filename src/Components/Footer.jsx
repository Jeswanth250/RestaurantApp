import React from 'react'
import { Instagram,Twitter,Facebook,LinkedIn } from '@mui/icons-material'
import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'><Instagram/><Facebook/><Twitter/><LinkedIn/>
            <p>&copy; 2023 boomburger.com</p>

        </div>
    </div>
  )
}

export default Footer