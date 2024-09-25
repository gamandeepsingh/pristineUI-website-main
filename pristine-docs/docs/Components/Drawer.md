---
sidebar_position: 4
---

# Drawer

The `Drawer` component is a flexible UI element that slides in from a specified direction and displays content such as text, images, and buttons. It can be customized with various props for styling and behavior.

## Import 
```jsx
import { Drawer } from 'pristineui';
```

## Usage

```jsx title="/src/components/Drawer.jsx"
import Drawer from 'pristineui';

const Drawer = () => (
  <Drawer
    headerText="Elanine Creatives"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    image={camera}
    className="bg-dark"
    direction="bottom"
    buttonDisplay={true}
  >
    {/* Children content goes here */}
  </Drawer>
);

export default Drawer;
```

## Props

| Prop Name      | Type        | Description                                                                                             | Default   |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------- | --------- |
| `headerText`   | `string`    | The text displayed as the header of the drawer.                                                          | `""`      |
| `description`  | `string`    | The text displayed as the description inside the drawer.                                                 | `""`      |
| `image`        | `string`    | The URL or image path for the image displayed in the drawer.                                             | `null`    |
| `className`    | `string`    | Custom CSS class for additional styling.                                                                 | `""`      |
| `direction`    | `'left' \| 'right' \| 'top' \| 'bottom'` | The direction from which the drawer will slide in.                                                           | `'left'`  |
| `buttonDisplay`| `boolean`   | Whether a button should be displayed inside the drawer.                                                   | `false`   |
| `children`     | `ReactNode` | Any children elements to render inside the drawer.                                                        | `null`    |

#### Possible Values:
- **`'left'`**: The drawer will slide in from the left side of the screen.
- **`'right'`**: The drawer will slide in from the right side of the screen.
- **`'top'`**: The drawer will slide down from the top of the screen.
- **`'bottom'`**: The drawer will slide up from the bottom of the screen.

## `buttonDisplay` Prop
When `true`, a button will be displayed inside the drawer. You can customize its label or functionality by passing button-related content as children.

## Customization

You can further customize the Button using CSS classes and inline styles.