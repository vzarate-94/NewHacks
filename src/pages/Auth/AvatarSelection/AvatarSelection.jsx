import React from 'react'
import './AvatarSelection.css'

import beard from '../../../assets/avatars/beard.png'
import blonde from '../../../assets/avatars/blonde.png'
import blueBoy from '../../../assets/avatars/blueBoy.png'
import boy from '../../../assets/avatars/boy.png'
import curlyHair from '../../../assets/avatars/curlyHair.png'
import girl from '../../../assets/avatars/girl.png'
import man from '../../../assets/avatars/man.png'
import teacher from '../../../assets/avatars/teacher.png'
import woman from '../../../assets/avatars/woman.png'


function AvatarSelection(props) {
  return (
    <div className='popup-container'>
      <div className='popup-menu'>
        <div className='popup-header'>
          <h3>Select An Avatar</h3>
          <button id='close-button' className='' onClick={props.handlePopup}>X</button>
        </div>
        <img src={props.formData.avatar} alt="profile-Avatar"></img>
        <div className='bottom-ui'>
          <select onChange={(e) => props.handleChange(e)} name="avatar" value={props.formData.avatar}>
            <option value={beard}>Man 1</option>
            <option value={man}>Man 2</option>
            <option value={boy}>Man 3</option>
            <option value={blueBoy}>Man 4</option>
            <option value={curlyHair}>Woman 1</option>
            <option value={girl}>Woman 2</option>
            <option value={teacher}>Woman 3</option>
            <option value={woman}>Woman 4</option>
            <option value={blonde}>Woman 5</option>
          </select>
          <button onClick={props.handlePopup} type="button">Confirm</button>

        </div>
      </div>
    </div>
  )
}

export default AvatarSelection