import React from 'react'
import Avatar from '../components/Avatar'
import styles from './SideBar.module.css'
import { ReactComponent as Chart } from '../media/chart.svg'
import { ReactComponent as Group } from '../media/group.svg'
import { ReactComponent as Money } from '../media/money.svg'
import { ReactComponent as Gear } from '../media/gear.svg'

const tabTopList = [
  { label: 'Gráficos', icon: Chart },
  { label: 'Time', icon: Group },
  { label: 'Saldo', icon: Money },
]

const tabBottomList = [
  { label: 'Configurações', icon: Gear },
]

function SideBar({ className, id, style }) {
  return (
    <aside
      className={[className, styles.sideBar].join(' ')}
      id={id}
      style={style}
    >
      <div className={styles.tab}>
        <Avatar/>
        {tabTopList.map(({ icon: Icon, label }, idx) => {
          return (
            <div className={styles.icon} key={idx} label={label}>
              <Icon/>
            </div>
          )
        })}
      </div>
      <div className={styles.tab}>
        {tabBottomList.map(({ icon: Icon, label }, idx) => {
          return (
            <div className={styles.icon} key={idx} label={label}>
              <Icon/>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default SideBar