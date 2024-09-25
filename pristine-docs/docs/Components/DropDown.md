---
sidebar_position: 5
---

# DropDown

The `DropDown` component is used to create a customizable dropdown menu with selectable options. Below is a breakdown of the props and how the component works.

## Import 
```jsx
import { DropDown } from 'pristineui';
```

## Usage

```jsx title="/src/components/DropDown.jsx"
import DropDown from 'pristineui';

const options = [
  { label: 'Select', value: 'select' },
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
];


const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('select');

  const handleChange = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  return (
    <DropDown
      options={options}
      defaultSelected={selectedOption}
      onChange={handleChange}
      className="rounded-sm"
      backgroundColor="pink"
      textColor="white"
    />
  );
};

export default DropDown;
```

## Props

| Prop Name         | Type                                    | Description                                                                 | Default        |
| ----------------- | --------------------------------------- | --------------------------------------------------------------------------- | -------------- |
| `options`         | `Array<{ label: string, value: string }>` | List of options to display in the dropdown. The `label` is the text displayed to the user, and the `value` is the internal value. | `[]`           |
| `defaultSelected`  | `string`                               | Default option to be selected when the component loads.                      | `''`           |
| `onChange`        | `function(value: string)`               | Callback function triggered when the selected option changes.                | `undefined`    |
| `className`       | `string`                               | Optional custom class to apply additional styles to the dropdown.            | `''`           |
| `backgroundColor` | `string`                               | Custom background color for the dropdown.                                    | `transparent`  |
| `textColor`       | `string`                               | Custom text color for the dropdown options.                                  | `black`        |


#### Possible Option field:
```jsx
const options = [
  { label: 'Select', value: 'select' },
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
];
```


## Customization

You can further customize the Button using CSS classes and inline styles.