import React from 'react'
import { Badge } from '../Badge'
import styles from './BadgeList.module.css'

interface BadgeListProps {
  children?: React.ReactNode
}

export const BadgeList = ({ children }: BadgeListProps) => {
  return <ul className={styles.list}>{children}</ul>
}

export const BadgeListItem = ({ children, ...props }: BadgeListProps) => {
  return <li className={styles.listItem}><Badge {...props}>{children}</Badge></li>
}