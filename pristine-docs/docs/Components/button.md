---
sidebar_position: 1
---

# Button

## Import

```jsx
import { Button } from 'pristineui';
```

## Usage

```jsx title="src/pages/MyButton.js"
import React from 'react';
import Button from 'pristineui'; 

function MyButton() {
  return (
    <div className="MyButton">
      <h1>Button Component Example</h1>
      
      {/* Using the Button Component */}
      <Button
        type="growRate"
        backgroundColor="green"
        textColor="black"
        hoverTextColor="black"
        hoverCircleColor="red"
        circleColor="black"
        circleSize="14px"
        style={{ /* your styles here */ }} // Add any additional styles if needed
        className="rounded-none"
        hoverBtnColor="yellow"
      >
        Click Me!
      </Button>
    </div>
  );
}

export default MyButton;

```

## Types

### 1. **Simple Button**

A basic button without animations.

```jsx 
<Button 
  type="simple" 
  backgroundColor="blue" 
  textColor="white">
  Simple Button
</Button>
```
### 2. **Slide Side Button**

A button that slides in from the side on hover.

```jsx 
<Button 
  type="slideSide" 
  backgroundColor="green" 
  textColor="white" 
  hoverBtnColor="darkgreen">
  Slide Side Button
</Button>
```
### 3. **Slide Bottom Button**

A basic button without animations.

```jsx 
<Button 
  type="slideBottom" 
  backgroundColor="orange" 
  textColor="white" 
  hoverBtnColor="darkorange">
  Slide Bottom Button
</Button>
```
### 4. **Slide Center Side Button**

A button that slides in from the center towards the side on hover.

```jsx 
<Button 
  type="slideCenterSide" 
  backgroundColor="purple" 
  textColor="white" 
  hoverBtnColor="darkpurple">
  Slide Center Side Button
</Button>
```
### 5. **Slide Center Top/Bottom Button**

A basic button without animations.

```jsx 
<Button 
  type="slideCenterTopBottom" 
  backgroundColor="red" 
  textColor="white" 
  hoverBtnColor="darkred">
  Slide Center Top/Bottom Button
</Button>
```
### 6. **Grow Round Button**

A basic button without animations.

```jsx 
<Button 
  type="growRound" 
  backgroundColor="teal" 
  textColor="white" 
  hoverBtnColor="darkteal">
  Grow Round Button
</Button>
```
### 7. **Soft Shadow Button**

A button with a soft shadow effect.

```jsx 
<Button 
  type="softShadow" 
  backgroundColor="lightgray" 
  textColor="black" 
  shadowColor="rgba(0, 0, 0, 0.2)">
  Soft Shadow Button
</Button>
```

### 8. **Hard Shadow Button**

A button with a soft shadow effect.

```jsx 
<Button 
  type="hardShadow" 
  backgroundColor="darkgray" 
  textColor="white" 
  shadowColor="rgba(0, 0, 0, 0.8)">
  Hard Shadow Button
</Button>
```
### 9. **Icon Only Button**

A button that only displays an icon without text.

```jsx 
<Button 
  type="iconOnly" 
  icon={<IoIosAddCircle />} 
  iconColor="blue" 
  hoverIconColor="darkblue">
</Button>

```
### 10. **Grow Rate Button**

A button that grows with a rate-based animation on hover.

```jsx 
<Button 
  type="growRate" 
  backgroundColor="yellow" 
  textColor="black" 
  hoverBtnColor="gold">
  Grow Rate Button
</Button>

```


## Props

| Prop               | Type   | Description                                      |
|--------------------|--------|--------------------------------------------------|
| `type`             | string | Defines the type of the button.                  |
| `backgroundColor`  | string | Sets the background color of the button.         |
| `textColor`        | string | Sets the text color.                             |
| `hoverTextColor`   | string | Text color on hover.                            |
| `hoverBtnColor`    | string | Background color on hover.                       |
| `circleSize`       | string | Size of the circle around the button.            |
| `shadowColor`      | string | Color of the shadow.                             |


## Customization

You can further customize the Button using CSS classes and inline styles.


