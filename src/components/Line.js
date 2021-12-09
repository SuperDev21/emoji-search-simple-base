import React from 'react'


const Line = (props) => {
  return(
    <div className="divLine"> 
      {props.emojis.map((elem, index) => {
        return (
          // on click sur la line on copie le symbole
          <>
            <div title="cliquer pour copier l'emoji" className="Line" key={index} onClick={() => navigator.clipboard.writeText(elem.symbol)}>{elem.title}   {elem.symbol}</div>
          </>
        )
      })}
    </div>)
};

export default Line;
