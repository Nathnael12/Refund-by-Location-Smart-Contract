import React from 'react'
import { useEffect } from 'react';
import web3 from '../interactors/web3';
import contract from '../interactors/payer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./details.css"
const Details = () => {
  const { id } = useParams();

  const [employee, setemployee] = useState({})

  useEffect(() => {
    const init = async () => {
      const emp = await contract.methods.getEmployee(id).call()
      emp.createdAt = getTime(emp.createdAt)
      setemployee({ ...emp })
    }
    init()

  }, [])

  const getTime = (timestamp) => {
    let unix_timestamp = timestamp
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    return date.toLocaleDateString('en-US');
  }

  return (
    <div className="all">

      <div className="emp-wrapper">
        <div className="employee">
          <div className="name">{employee.name}</div>
          <div className="location"> Centre Location: ({employee.lat},{employee.lng})</div>
          <div className="distance">Allowed Distance: {employee.distance} km</div>
          <div className="comply">Complied to Contract: {employee.comply ? "Yes" : "No"}</div>
          <div className="comply">Registered At: {employee.registeredAt}</div>

        </div>
        <div className="map">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${employee.lat},${employee.lng}&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details