import web3 from '../interactors/web3';
import contract from '../interactors/payer';

import React, { useEffect, useState } from 'react';
import Lister from '../components/Lister';
import "./list.css"

const List = () => {

    const [empList, setemployees] = useState([])

    useEffect(() => {
      const init = async ()=>{

        const empList = await contract.methods.getEmployees().call()
        setemployees([...empList])

      }

      init();
    
      
    }, [])

    
    
    return (
      <Lister employees={[...empList]}></Lister>
  )
}

export default List