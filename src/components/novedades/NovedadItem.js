import React from 'react';



const NovedadItem = ({title, image,body}) =>{
    console.log()
    return (
        <div className='card'>
            <div className='container'>  
               <img src={image}/>
            </div>
            <div className='details'>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{__html:body}}></p>
            </div>
            
        </div>
    );
};



export default NovedadItem;