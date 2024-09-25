---
sidebar_position: 4
---

# Usage Guide

This guide demonstrates how to use various components from the Pristine UI library in your React application.

## Importing Components

First, import the components you need from 'pristineui':

```jsx title=" "
import { 
Button, 
Card, 
Alert, 
Card
DrawerModal, 
Dropdown,
...manyMore
} from 'pristineui'
```

### Note:You may also need to import icons or other assets:

## Using Components

Here are examples of how to use various Pristine UI components:

### Button
    ```jsx title="/src/components/Button.jsx"
    <Button
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
</Button>
    ```

### Alert

    ```jsx title="/src/components/Alert.jsx"
<Alert
  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  header="Elanine Creatives"
  time="2 min ago"
  backgroundColor="black"
  descriptionColor="white"
  headerColor="red"
  top="10px"
  right="10px"
  className="bg-dark rounded-lg"
  icon={<IoIosInformationCircleOutline color='red' size={30} />}
  borderColor="white"
/>
    ```
### DrawerModal

    ```jsx title="/src/components/DrawerModal.jsx"
<DrawerModal
  headerText={'Elanine Creatives'}
  description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
  image={camera}
  className='bg-dark'
  direction='bottom'
  buttonDisplay={true}
  buttonText='Click me'
>
</DrawerModal>
    ```
### Dropdown

    ```jsx title="/src/components/Alert.jsx"
<Alert
  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  header="Elanine Creatives"
  time="2 min ago"
  backgroundColor="black"
  descriptionColor="white"
  headerColor="red"
  top="10px"
  right="10px"
  className="bg-dark rounded-lg"
  icon={<IoIosInformationCircleOutline color='red' size={30} />}
  borderColor="white"
/>
    ```
### Alert

    ```jsx title="/src/components/DropDown.jsx"
const options = [
  { label: 'Select', value: 'select' },
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
];

<Dropdown
  options={options}
  defaultSelected="select"
  className="rounded-sm"
  backgroundColor="orange"
  textColor="white"
/>
    ```

## Customization

Most Pristine UI components accept various props for customization. You can adjust colors, sizes, styles, and behaviors to match your design needs. Refer to each component's specific documentation for a full list of available props and customization options.

<!-- ![Locale Dropdown](./img/localeDropdown.png) -->
