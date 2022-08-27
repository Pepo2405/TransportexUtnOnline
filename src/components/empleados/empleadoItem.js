import React from "react";

const EmpleadoItem = (props)=>{
    return<>
        <div className="persona">
            <div className='content'>
            <span></span>
            <div className="img">
            <img
              src={props.foto}
              alt="Juan gomes"
              />
              </div>
              <div className="persona-texto">
            <h4>{props.nombre}</h4>
            <h5>{props.puesto}</h5>
            <p>{props.datos}</p>
            {console.log(props.foto)}
              </div>
          </div>
        </div>
        </> 
    
}
export default EmpleadoItem;