 import React from 'react'
 
 export default function FluidSectionWraper({id, className, children}) {
   return (
    <section  id={id} className={className}>
        <div className="container-fluid">
            {children}
        </div>	
    </section>
   )
 }
 