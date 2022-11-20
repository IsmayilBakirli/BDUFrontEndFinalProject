import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterInput(props) {
    var dispatch=useDispatch();
    var data=useSelector((state)=>props.name);
    console.log("data:",data);
    return (
        <div className="formInput">
            <label htmlFor={props.name}></label>
            <input id={props.name}  onChange={(e)=>dispatch(props.action(e.target.value))}  type={props.type} />
        </div>
    )
}
