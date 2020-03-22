import React from 'react'
import Search from '../components/Search'
import Badge from '../components/Badge'
import { ReactComponent as OpenMenu } from '../media/open-menu.svg'
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

function Header({ className, id, style }) {
  return (
    <header
      className={[className, styles.header].join(' ')}
      id={id}
      style={style}
    >
      <div className={styles.menu}>
        <div>
          <OpenMenu/>
        </div>
        <h1>Supplyr</h1>
      </div>
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