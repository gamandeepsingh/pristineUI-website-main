---
sidebar_position: 3
---

# Card

## Import

```jsx
import { Card } from 'pristineui';
```

## Usage

```jsx title="src/pages/Card.js"
import React from 'react';
import { Card } from 'pristineui';

function Card() {
  return (
    <div className="Card">
      <h1>Card Component Example</h1>
      
      {/* Using the Card Component */}
      <Card
        type="productWithFullImage"
        logo={""}  // Replace with a valid image URL
        image={""} // Replace with a valid image URL
        captionText="Trending"
        ProductName="Product Name"
        ProductPrice="5000"
        btnDisabled={false}
        ctaText="Coming Soon"
        btnText="Buy now"
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
        className="bg-dark rounded-lg w-full"
        hiddenCta={true}
        headerText="Elanine Creatives"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
      />
    </div>
  );
}

export default Card;

```

## Types

### 1. Default Card1

```jsx title="/src/components/Card.jsx"
<Card
type="defaultCard1"
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 2. Default Card2

```jsx title="/src/components/Card.jsx"
<Card
type="defaultCard2"
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 3. Default Card3

```jsx title="/src/components/Card.jsx"
<Card
type="defaultCard3"
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 4. Product card

```jsx title="/src/components/Card.jsx"
<Card
type="product"
image={camera}
ProductName={"Product Name"}
ProductPrice={"5000"}
btnDisabled={false}
btnText={"Buy now"}
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 5. Product card with full image

```jsx title="/src/components/Card.jsx"
<Card
type="productWithFullImage"
image={camera}
ProductName={"Product Name"}
ProductPrice={"5000"}
btnDisabled={false}
btnText={"Buy now"}
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 6. Vertical Card With Header

```jsx title="/src/components/Card.jsx"
<Card
type="defaultVerticalCardWithHeader"
image={camera}
ProductName={"Product Name"}
ProductPrice={"5000"}
btnDisabled={false}
btnText={"Buy now"}
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 7. Horizontal Card With Header

```jsx title="/src/components/Card.jsx"
<Card
type="defaultHorizontalCardWithHeader"
image={camera}
ProductName={"Product Name"}
ProductPrice={"5000"}
btnDisabled={false}
btnText={"Buy now"}
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```
### 8. Horizontal Elongated Card With Header

```jsx title="/src/components/Card.jsx"
<Card
type="defaultHorizontalElongatedCardWithHeader"
image={camera}
ProductName={"Product Name"}
ProductPrice={"5000"}
btnDisabled={false}
btnText={"Buy now"}
paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
className='bg-dark rounded-lg w-full'
/>
```

## Props

| Prop            | Type     | Description                                                      |
|-----------------|----------|------------------------------------------------------------------|
| `type`          | string   | Defines the type of the card (e.g., `defaultCard1`, `defaultCard2`, `defaultCard3`, `productWithFullImage`,`etc`). |
| `logo`          | string   | URL or path to the logo image.                                   |
| `image`         | string   | URL or path to the main image of the card.                       |
| `captionText`   | string   | Text displayed as a caption on the card.                         |
| `ProductName`   | string   | Name of the product displayed on the card.                       |
| `ProductPrice`  | string   | Price of the product.                                            |
| `btnDisabled`   | boolean  | Whether the button is disabled (`true` or `false`).              |
| `ctaText`       | string   | Text for the Call To Action (CTA) button.                        |
| `btnText`       | string   | Text for the button displayed on the card.                       |
| `paragraph`     | string   | A description or additional information about the product.       |
| `className`     | string   | Additional CSS classes for custom styling.                       |
| `hiddenCta`     | boolean  | Whether to hide the Call To Action button (`true` or `false`).   |
| `headerText`    | string   | Header text for the card.                                        |
| `description`   | string   | Description text displayed below the header.                     |

## Customization

You can further customize the Button using CSS classes and inline styles.