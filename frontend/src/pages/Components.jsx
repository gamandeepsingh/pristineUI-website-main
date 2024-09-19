import React from 'react'
import CardComponents from '../components/UIcomponent/Card'
import FitText from '../components/common/FitText'
import Button from '../components/UIcomponent/Button'
import AlertComponent from '../components/UIcomponent/Alert'
import Drawer from '../components/UIcomponent/Drawer'
import DropDown from '../components/UIcomponent/DropDown'

const Components = () => {
  return (
    <div className='w-screen pt-28 md:pt-24'>
        <FitText text="Card Component" />
        <CardComponents/>
        <FitText text="Button Component" />
        <Button/>
        <FitText text="Alert Component" />
        <AlertComponent/>
        <FitText text="Drawer Component" />
        <Drawer/>
        <FitText text="Dropdown Component"/>
        <DropDown/>
    </div>
  )
}

export default Components