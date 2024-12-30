import React from 'react'

export default function SingleCourse({icon, link, title, text}) {
  return (
    <div className="single-course">
        <span className={`lnr ${icon}`}></span>
        <a href={link}><h4>{title}</h4></a>
        <p>{text}</p>
    </div>
  )
}
