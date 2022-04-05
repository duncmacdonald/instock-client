import React from 'react'
import './TableHeader.css'
import Sort from '../../assets/Icons/sort-24px.svg'

const TableHeader = () => {
  return (
    <div className='table-Header'>
        <ul>
            <div className='inventory-item'>
            <li><h4>INVENTORY ITEM</h4></li>
            <img src={Sort}></img>
            </div>
            <div className='category'>
            <li><h4>CATEGORY</h4></li>
            <img src={Sort}></img>
            </div>
            <div className='status'>
            <li><h4>STATUS</h4></li>
            <img src={Sort}></img>
            </div>
            <div className='quantity'>
            <li><h4>QUANTITY</h4></li>
            <img src={Sort}></img>
            </div>
            <div className='actions'>
            <li><h4>ACTIONS</h4></li>
            
            </div>
        </ul>

    </div>

  )
}


export default TableHeader