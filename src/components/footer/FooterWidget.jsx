import React from 'react'

export default function FooterWidget({className, children}) {
  return (
    <div className={className}>
        <div className="single-footer-widget">
            {children}
        </div>
    </div>
  )
}
