import React from 'react'

export default function AccordionWraper({children}) {
  return (
    <div className="col-lg-6 faq-left">
        <div id="accordion">
            {children}
        </div>						
    </div>
  )
}
