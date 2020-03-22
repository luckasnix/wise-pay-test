import React from 'react'
import styles from './Table.module.css'
import { transationList } from '../utils/transationList'

function Table({ className, id, style }) {
  return (
    <table
      className={[className, styles.table].join(' ')}
      id={id}
      style={style}
    >
      <thead>
        <tr>
          <th>Payment Method</th>
          <th>Card Number</th>
          <th>Customer Name/No</th>
          <th>Current/Total Balance</th>
        </tr>
      </thead>
      <tbody>
        {transationList.map((
          {
            paymentNetwork,
            paymentMethod,
            cardNumber,
            customerName,
            customerNumber,
            currentTransation,
            totalBalance,
          },
          idx
        ) => {
          return (
            <tr key={idx}>
              <td className={styles.payment}>
                <p>{paymentNetwork}</p>
                <p>{paymentMethod}</p>
              </td>
              <td className={styles.card}>{cardNumber}</td>
              <td className={styles.customer}>
                <p>{customerName}</p>
                <p>{customerNumber}</p>
              </td>
              <td className={styles.balance}>
                <p>{`$ ${currentTransation}`}</p>
                <p>{`$ ${totalBalance}`}</p>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table