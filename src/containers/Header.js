import React from 'react'
import Search from '../components/Search'
import Badge from '../components/Badge'
import { ReactComponent as Bell } from '../media/bell.svg'
import { ReactComponent as ShoppingCart } from '../media/shopping-cart.svg'
import styles from './Header.module.css'

const badgeList = [
  {
    icon: Bell,
    notifications: [
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
    ],
  },
  {
    icon: ShoppingCart,
    notifications: [
      { description: 'Exemple', to: '/exemple' },
      { description: 'Exemple', to: '/exemple' },
    ],
  },
]

function Header({ className, id }) {
  return (
    <header className={[className, styles.wrapper].join(' ')} id={id}>
      <Search/>
      <div className={styles.noticeBoard}>
        {badgeList.map(({ icon: Icon, notifications }, idx) => {
          return (
            <Badge key={idx} notifications={notifications}>
              <Icon/>
            </Badge>
          )
        })}
      </div>
    </header>  
  )
}

export default Header