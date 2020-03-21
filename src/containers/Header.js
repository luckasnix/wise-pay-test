import React from 'react'
import Badge from '../components/Badge'
import { ReactComponent as Bell } from '../media/bell.svg'

function Header() {
  return (
    <header>
      <Badge notifications={[
        { content: 'Blá', link: 'https://bla.com' },
        { content: 'Blá', link: 'https://bla.com' },
        { content: 'Blá', link: 'https://bla.com' },
      ]}>
        <Bell/>
      </Badge>
    </header>  
  )
}

export default Header