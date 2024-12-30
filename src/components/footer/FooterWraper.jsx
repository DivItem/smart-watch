import React from 'react'

export default function footerWraper({children}) {
  return (
    <footer className="footer-area section-gap">
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
	</footer>
  )
}
