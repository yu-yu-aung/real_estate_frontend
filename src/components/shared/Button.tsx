import React from 'react'

type BtnType = {
  variant: "ghost" | "main" | "tertiary"; 
  text: string;
}

const styles = {
  ghost: 'text-center px-8 py-4 border border-primary rounded-md bg-transparent hover:bg-cyan-600 active:bg-cyan-800 active:text-white disabled:border-cyan-200 disabled:text-cyan-200 font-semibold', 
  main: 'text-center px-8 py-4 border border-primary rounded-md bg-primary hover:bg-tertiary text-white active:bg-tertiary disabled:bg-primary font-semibold', 
  tertiary: 'text-center underline px-8 py-4 bg-transparent rounded-md text-heading hover:text-[var--(color-tertiary)] active:text-[var-(color-secondary)] font-semibold'
}

const Button = ({variant, text}: BtnType) => {
  return (
    <button className={styles[variant]}>
      {text}
    </button>
  )
}

export default Button