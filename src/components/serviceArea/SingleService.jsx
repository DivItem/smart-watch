import React from 'react'

export default function SingleService({iconClass, title, text}) {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="single-service">
            <h4><span className={`lnr ${iconClass}`}></span>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}
