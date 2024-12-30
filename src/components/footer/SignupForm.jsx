import React from 'react'

export default function SignupForm({placeholder}) {
  return (
    <div className="" id="mc_embed_signup">
        <form target="_blank" noValidate="true" action="" method="get" className="form-inline">
            <input className="form-control" name="EMAIL" placeholder={placeholder} type="email" />
                <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            <div className="info"></div>
        </form>
    </div>
  )
}
