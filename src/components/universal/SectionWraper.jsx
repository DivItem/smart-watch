import React from 'react'

export default function SectionWraper({ id, className, children }) {
  return (
    <section id={id} className={className}>
      <div className="container">
          {children}
      </div>
    </section>
  )
}
