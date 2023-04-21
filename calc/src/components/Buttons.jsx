import React from 'react'

export default function Buttons({children,agregacion}) {

    const esOperador =(valor)=>{
        if (isNaN(valor) && valor != '.' && valor != '='){
            return true;
        }else{
            return false;
        }
    };

    if(esOperador(children)){
        return (<div onClick={()=>agregacion(children)} className={
            `boton-contenedor operador`}>
                {children}
            </div>)
    }else{
        return(<div onClick={()=>agregacion(children)} className={
            'boton-contenedor'}>
                {children}
            </div>)
    }

  
}
