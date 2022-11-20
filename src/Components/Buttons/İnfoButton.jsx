import React from 'react'

export default function İnfoButton(props) {
    const{name}=props;
  return (
    <button className='info'>
        <span>{name}</span>
    </button>
  )
}
