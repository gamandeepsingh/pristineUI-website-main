---
sidebar_position: 3
---

# Installation

This guide will walk you through the process of installing and setting up Pristine UI in your project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 12 or later)
- npm (usually comes with Node.js) or yarn

## Installation Steps

1. Open your terminal and navigate to your project directory.

2. Install Pristine UI using npm:

   ```bash
   npm install pristineui
   ```

    Or if you're using yarn:
   ```bash
   yarn add pristineui
   ```
2. Install Pristine UI using npm:
   ```bash
   npm install react-icons
   ```

    Or if you're using yarn:
   ```bash
   yarn add react-icons
   ```

## Usage
    After installation, you can start using Pristine UI components in your React application. Here's a basic example of how to import and use Pristine components:

   ```jsx title="/src/App.jsx"
   import React from 'react'
import { Button, Card, Alert, DynamicButton, Dropdown } from 'pristineui'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function App() {
  const options = [
    { label: 'Select', value: 'select' },
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    // ... more options
  ];

  return (
    <div>
      <Button>Click me</Button>
      
      <DynamicButton
        type="growRate"
        backgroundColor="green"
        textColor='black'
        hoverTextColor="black"
        hoverCircleColor="red"
        circleColor="black"
        circleSize="14px"
        style={{ fontSize: '16px', height: '50px', width: "200px" }}
        className='rounded-none'
        hoverBtnColor='yellow'
      >
        Click Me!
      </DynamicButton>

      <Alert
        description="This is an alert message."
        header="Pristine Alert"
        time="2 min ago"
        backgroundColor="black"
        descriptionColor="white"
        headerColor="red"
        icon={<IoIosInformationCircleOutline color='red' size={30} />}
      />

      <Dropdown
        options={options}
        defaultSelected="select"
        className="rounded-sm"
        backgroundColor="orange"
        textColor="white"
      />
    </div>
  )
}

export default App
   ```

## Available Components

Pristine UI provides a wide range of components, including:

- **Button**
- **Card (various types including ProductCard, DefaultCard, etc.)**
- **Alert**
- **DynamicButton**
- **DrawerModal**
- **Dropdown**
- **And many more!**

For a full list of components and their props, please refer to our Component Documentation.

## Customization

Most Pristine UI components accept custom props for styling and behavior. You can customize colors, sizes, and other properties to match your design needs. Refer to each component's documentation for specific customization options.

