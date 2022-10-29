import React from 'react'
import { useEffect } from 'react';
import web3 from '../interactors/web3';
import contract from '../interactors/payer';
import { useState } from 'react';
const { id } = useParams();

const Details = () => {

    const [employee, setemployee] = useState({})

    useEffect(() => {
      const init = async()=>{
        const emp = await contract.methods.getEmployee(id).call()
        setemployee({...emp})
      }
      
    }, [])
    
  return (
    <div>Details</div>
  )
}

export default Details