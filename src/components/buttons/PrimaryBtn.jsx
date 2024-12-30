import React from 'react'

export default function PrimaryBtn({className, buttonTxt}) {
  return (
    <a className={className} href="#">{buttonTxt}</a>
  )
}
