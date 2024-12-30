import React from 'react'

export default function CourseWraper({children}) {
  return (
    <div className="row justify-content-center align-items-center">
        {children}
    </div>
  )
}
