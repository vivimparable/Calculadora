import { useState } from 'react';
import Buttons from './components/Buttons'
import Pantalla from './components/Pantalla'
import Clear from './components/Clear'
import {evaluate} from 'mathjs';
import './App.css';

function App() {

  const valoracion = (e) =>{
    if(e != '='){
      setCalcNum(calcNum+e)
    }else{
      setCalcNum(evaluate(calcNum))
    }
    
  }

  const limpieza = () =>{
    setCalcNum('')
  }

  const [calcNum,setCalcNum]= useState('')
  return (
    <div className="App">
      <div className='calculadora'>
            <Pantalla  input = {calcNum}/>

            <div className='fila'>
              
              <Buttons agregacion = {valoracion} >1</Buttons>
              <Buttons agregacion = {valoracion} >2</Buttons>
              <Buttons agregacion = {valoracion} >3</Buttons>
              <Buttons agregacion = {valoracion} >+</Buttons>
            </div>
            <div className='fila'>
            <Buttons agregacion = {valoracion} >4</Buttons>
              <Buttons agregacion = {valoracion} >5</Buttons>
              <Buttons agregacion = {valoracion} >6</Buttons>
              <Buttons agregacion = {valoracion} >-</Buttons>
            </div>
            <div className='fila'>
            <Buttons agregacion = {valoracion} >7</Buttons>
              <Buttons  agregacion = {valoracion}>8</Buttons>
              <Buttons agregacion = {valoracion}>9</Buttons>
              <Buttons agregacion = {valoracion}>*</Buttons>
            </div>
            <div className='fila'>
            <Buttons agregacion = {valoracion} >=</Buttons>
              <Buttons agregacion = {valoracion} >0</Buttons>
              <Buttons agregacion = {valoracion} >.</Buttons>
              <Buttons agregacion = {valoracion} >/</Buttons>
            </div>
            <div className='fila'>
            <Clear limpiar={limpieza} >Clear </Clear>
            </div>

      </div>
    </div>
  );
}

export default App;
