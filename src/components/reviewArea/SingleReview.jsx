import React from 'react'

export default function SingleReview({name, review, ratings}) {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="single-review">
            <h4>{name}</h4>
            <p>{review}</p>
            <div className="star">
                {[...Array(5)].map((_, index) => (
                    <span
                    key={index}
                    className={`fa fa-star ${index < ratings ? "checked" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    </div>
  )
}
