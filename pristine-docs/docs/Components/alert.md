---
sidebar_position: 2
---

# Alert

## Import

```jsx
import { Alert } from 'pristineui';
```

## Usage

```jsx title="src/pages/Alert.js"
import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Alert from 'pristineui'; 

function Alert() {
  return (
    <div className="Alert">
      <h1>Alert Component Example</h1>
      
      {/* Using the Alert Component */}
      <Alert
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        header="Pristine UI"
        time="2 min ago"
        backgroundColor="black"
        descriptionColor="white"
        headerColor="red"
        top="10px"
        right="10px"
        className="bg-dark rounded-lg"
        icon={<IoIosInformationCircleOutline color='red' size={30} />} // Adding the icon
        borderColor="white"
      />
    </div>
  );
}

export default Alert;

```
## Props

| Prop                | Type   | Description                                                                                   |
|---------------------|--------|-----------------------------------------------------------------------------------------------|
| `description`       | string | The main content of the alert.                                                                |
| `header`            | string | The title or header text of the alert.                                                        |
| `time`              | string | A string to display the time of the alert (e.g., "2 min ago").                               |
| `backgroundColor`   | string | Sets the background color of the alert.                                                       |
| `descriptionColor`  | string | Sets the text color of the description.                                                       |
| `headerColor`       | string | Sets the text color of the header.                                                            |
| `top`               | string | Distance from the top of the viewport (CSS value).                                           |
| `right`             | string | Distance from the right of the viewport (CSS value).                                         |
| `className`         | string | Additional CSS classes for custom styling.                                                    |
| `icon`              | node   | An optional icon to display alongside the alert.                                              |
| `borderColor`       | string | Sets the border color of the alert.                                                           |


## Customization

You can further customize the Button using CSS classes and inline styles.