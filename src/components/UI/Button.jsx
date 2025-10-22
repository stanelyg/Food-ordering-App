import React from 'react'

const Button = ({ children,textOnly,className,...props }) => {
    let  buttonClass = textOnly ? 'text-button' : 'button';
    buttonClass += ' ' + className;
  return (
    <button className={buttonClass} {...props}>{children}</button>
  )
}

export default Button