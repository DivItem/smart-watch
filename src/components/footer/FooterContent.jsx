import React from 'react'

export default function FooterContent({title, text, Copyright}) {

  return (
    <>
    <h6>{title}</h6>
    <p>{text}</p>
    <span className="footer-text">{Copyright}</span>
    </>
  )
}
