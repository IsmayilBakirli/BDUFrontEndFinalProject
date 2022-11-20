import React from 'react';
import { Link } from 'react-router-dom';
import InfoButton from '../Buttons/İnfoButton';
export default function DiscoverItem(props) {
    const { imageName, venue, description, id } = props;
    return (
        <div className="myCard" >
            <div className="cardHeader">
                <img src={imageName} />
            </div>
            <div className="cardBody">
                <h3 className='mt-3 mb-2 text-light'>{venue} </h3>
                <span className='text-light'>{description.substring(0, description.indexOf(".") + 1)} </span>
            </div>
            <div className="loadMore mt-5">
                <Link  to={{pathname:`eventdetail/${id}`}} className="text-decoration-none text-light" ><InfoButton name="Ətraflı oxu"/></Link>
            </div>
        </div>
    )
}
