import React from 'react'

export default function RightNavbar() {
    return (
        <div className="col-2 rightnav" style={{ marginTop: "130px" }}>
            <ul className='list-unstyled nav_ul' >
                <li className='nav_item' ><span className='text-light ' >Rektor</span></li>
                <li className=' nav_item' ><span className='text-light' >Rektorlar</span></li>
                <li className=' nav_item'><span className='text-light' >Taninmis mezunlar</span></li>
                <li className=' nav_item'><span className='text-light' >Muellimler</span></li>
                <li className=' nav_item'><span className='text-light' >Dekanlar</span></li>
                <li className=' nav_item'><span className='text-light ' >ProRektorlar</span></li>
                <li className=' nav_item'><span className='text-light '  >ElmiSura</span></li>
                <li className=' nav_item'><span className='text-light' >Elaqe</span></li>
            </ul>
        </div>
    )
}
