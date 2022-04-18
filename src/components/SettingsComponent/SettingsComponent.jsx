import React from 'react'

function SettingsComponent(props) {
  return (
    <div className='popup-container'>
      <div className='popup-menu'>
        <div className='popup-header'>
          <h3>Profile Settings</h3>
          <button id='close-button' className='' onClick={props.handlePopup}>X</button>
        </div>
        <div className='bottom-ui'>
          
          <button onClick={props.handlePopup} type="button">Confirm</button>

        </div>
      </div>
    </div>
  )
}

export default SettingsComponent