import React from 'react'

export default function CourseFrame({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}