import React from 'react'

export default function SectionTitle({className, title, subTitle}) {
  return (
    <div className="title text-center">
        <h1 className={className}>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}
