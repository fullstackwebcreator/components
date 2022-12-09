import React, { useState } from "react"
import styles from "./card.module.scss"

interface CardProps {
  children: React.ReactNode
  variant?: "elevated" | "filled" | "outlined"
}

export const Card = (props: CardProps) => {
	const { children, variant="elevated" } = props
	return (
    <div className={[styles["container"], styles[variant]].join(" ")}>
      <div className={styles["content"]}>{children}</div>
    </div>
  )
}