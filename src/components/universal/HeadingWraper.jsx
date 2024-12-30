import React from 'react'

export default function HeadingWraper({className, children}) {
  return (
    <div className="row d-flex justify-content-center">
        <div className={className}>
            {children}
        </div>
    </div>
  )
}
