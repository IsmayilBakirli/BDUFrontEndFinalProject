import React from 'react';
import { Link } from 'react-router-dom';
export default function LeftNavbar() {
    return (
        <div className="col-2 leftnav  mb-5" >
            <ul className='list-unstyled nav_ul' >
                <li className='nav_item' ><span className='text-light ' >Rektor</span></li>
                <li className='nav_item' ><span className='text-light' >Rektorlar</span></li>
                <li className='nav_item'><span className='text-light' >Taninmis mezunlar</span></li>
                <li className='nav_item'><span className='text-light' >Muellimler</span></li>
                <li className='nav_item'><span className='text-light' >Dekanlar</span></li>
                <li className='nav_item'><span className='text-light ' >ProRektorlar</span></li>
                <li className='nav_item'><span className='text-light '  >ElmiSura</span></li>
                <li className='nav_item'><span className='text-light' >Elaqe</span></li>
            </ul>
        </div>
    )
}
