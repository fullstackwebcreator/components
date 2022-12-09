import React, { useState } from "react"
import styles from "./button.module.scss"

interface ButtonProps {
  label: string
  disabled?: boolean
  size?: "small" | "medium" | "large"
  variant?: "elevated" | "filled" | "outlined" | "text"
  onClick?: () => void
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
	const {
		label,
		size = "small",
		variant = "elevated",
		disabled,
		onClick = () => {
			setIsLoading(!isLoading)
		},
		fullWidth = false,
	} = props;
	const w = fullWidth ? "w-100" : "w-content"
	const [isLoading, setIsLoading] = useState(false);
	const renderLabel = () => {
		if (isLoading) {
			return (
        <div className={styles["lds-ellipsis"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
		}
		return label;
	}
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        styles["btn"],
        styles[`btn-${size}`],
        styles[variant],
        styles[w],
      ].join(" ")}
    >
      {renderLabel()}
    </button>
  )
}
