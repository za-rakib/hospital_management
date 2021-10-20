import React from 'react'
import { HeaderMain } from '../HeaderMain/HeaderMain'

import './Header.css' 

export const Header = () => {
    return (
        <div className='header-container' style={{marginTop: '-48px'}}>
            <HeaderMain/>
        </div>
    )
}
