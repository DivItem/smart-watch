import React from 'react'

export default function ContentWraper({children, rowClass}) {
  return (
    <div className={`row ${rowClass}`}>
        {children}
    </div>
  )
}
