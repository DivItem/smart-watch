import React from 'react'

export default function SingleFaq({ id, headerId, question, answer, defaultOpen }) {
  return (
    <div className="card">
      <div className="card-header" id={headerId}>
        <h5 className="mb-0">
          <button 
          className={`btn btn-link ${defaultOpen ? "" : "collapsed"}`} 
          data-toggle="collapse" 
          data-target={`#${id}`}
          aria-expanded={defaultOpen}
          aria-controls={id}>
            {question}
          </button>
        </h5>
      </div>

      <div 
      id={id}
      className={`collapse ${defaultOpen ? "show" : ""}`}
      aria-labelledby={headerId} 
      data-parent="#accordion">
        <div className="card-body">
            {answer}
        </div>
      </div>
    </div>
  )
}
