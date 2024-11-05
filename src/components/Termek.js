import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Termek(props) {
    const {kosarba}=useContext(KosarContext)

  return (
    <div className='card col-lg-4'>
        <div class="card-header">{props.termek.title}</div>
        <img class="card-body" src={props.termek.image}/>
        <div class="card-footer">
            <button onClick={()=>kosarba(props.termek)}>Kosárba</button>
            {props.termek.price}$
        </div>
    </div>
  )
}

export default Termek