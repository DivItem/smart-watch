import React from 'react'

export default function SectionContent(props) {
    const { ClassName, topTitle, title, subTitle, text, btnClass, link, btnText } = props;
  
    return (
      <div className={ClassName}>
        <h6>{topTitle}</h6>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p>
          <span>{subTitle}</span>
        </p>
        <p>{text}</p>
        <a className={btnClass} href={link}>{btnText}</a>
      </div>
    );
  }