import React from 'react';
import { Link } from 'react-router-dom';
export default function NewsItem(props) {
    const { id, imageName, title, content } = props;
    return (
        <div className="row mt-5 gx-0">
            <div className="col-md-8 mb-5">
                <div className="leftSide">
                    <img src={imageName} alt='just News' />
                    <div className="middle">
                        <Link className='text-decoration-none' to={{ pathname: `/newsdetail/${id}` }} ><span>Ətraflı</span></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="rightSide d-flex align-items-center ps-2 pe-2 ">
                    <div className="news">
                        <div className="newsTitle d-flex justify-content-center align-items-center mb-3">
                            <h3 >{title}</h3>
                        </div>
                        <div className="newsContent d-flex justify-content-center align-items-center mb-5">
                            <span className='text-black' style={{ fontWeight: "bolder" }}>{content.substring(0, content.indexOf("."))}</span>
                        </div>
                        {/* <div className="readMore">
                            <Link className='text-decoration-none' to={{ pathname: `/newsdetail/${id}` }} ><span>Ətraflı</span></Link>
                        </div> */}
                    </div>

                </div>
            </div>

        </div>
    )
}
