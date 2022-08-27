import React from 'react';



const NovedadItem = ({title, image,body,subtitle}) =>{
    console.log()
    return (
        <div className='card'>
            <div className='container'>  
               <img src={image} alt={`${title} + imagen`}/>
            </div>
            <div className='details'>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p dangerouslySetInnerHTML={{__html:body}}></p>
            </div>
            
        </div>
    );
};



export default NovedadItem;