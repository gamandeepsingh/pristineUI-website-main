import React, { useState } from 'react'
import { IoCopy } from "react-icons/io5";


const Button = ({ children, className, ...props }) => {
    const { disabled } = props;
    return (
        <button
            className={`test-button ${disabled ? 'btn-disabled' : ''} ${className}`}
            disabled={disabled}
            {...props}
        >
            <span className="test-button-content">{children}</span>
        </button>
    );
};

const Card = ({
    style,
    type,
    logo,
    headerText,
    paragraph,
    btnText,
    btnDisabled = false,
    image,
    backgroundColor = 'transparent',
    description,
    ProductName,
    ProductPrice,
    captionText,
    ctaText,
    hiddenCta = false,
    className = '',
    children,
    ...props
}) => {
    const renderCardContent = () => {
        // console.log("Rendering Card of type:", type);
        switch (type) {
            case 'defaultCard1':
                return (
                    <div className={`${className} card-default-1 card`} {...props} style={style}>
                        <p>{paragraph}</p>
                        {children}
                    </div>
                );
            case 'defaultCard2':
                return (
                    <div className={`${className} card-default-2 card`} {...props} style={style}>
                        <p>{paragraph}</p>
                        {children}
                    </div>
                );
            case 'defaultCard3':
                return (
                    <div className={`${className} card-default-3 card`} {...props} style={style}>
                        <p>{paragraph}</p>
                        {children}
                    </div>
                );
            case 'product':
                return (
                    <div className={`${className} product-card`} style={style}>
                        {image && (
                            <div className='product-card-image'>
                                <img src={image} alt={`${'product'} img`} loading='lazy' />
                            </div>
                        )}
                        {ProductName && (
                            <div className='product-card-name'>
                                <div>
                                    <p>{ProductName}</p>
                                </div>
                                {ProductPrice && (
                                    <div className='product-card-price'>
                                        <p>{ProductPrice}</p>
                                        <p className='incl-prc'>(incl. of all taxes)</p>
                                    </div>
                                )}
                            </div>
                        )}
                        {description && (
                            <div className='product-card-description'>
                                <p>{description.length > 50 ? description.slice(0, 100) + "..." : description}</p>
                            </div>
                        )}
                        {btnText && (
                            <div className={`product-card-btn ${btnDisabled ? 'btn-disabled' : ''}`}>
                                <Button disabled={btnDisabled}>{btnText}</Button>
                            </div>
                        )}
                    </div>
                );
            case 'productWithFullImage':
                return (
                    <div className={`${className} product-card-with-full-image rounded-lg`} style={style}>
                        <div className="product-card-with-full-image-img z-0">
                            <img src={image} alt="" />
                        </div>
                        {(
                            <div className="product-card-with-full-image-name z-10">
                                {captionText && <p>{captionText}</p>}
                                {ProductName && <p>{ProductName}</p>}
                            </div>
                        )}
                        {ctaText && btnText && (
                            <div className={`product-card-with-full-image-cta ${hiddenCta ? 'product-card-with-full-image-cta-transit' : ''}`}>
                                <p>{ctaText}</p>
                                <button className={`cta-btn ${btnDisabled ? 'btn-disabled' : ''}`}>
                                    {btnText}
                                </button>
                            </div>
                        )}
                    </div>
                );
            case 'defaultVerticalCardWithHeader':
                return (
                    <div className={`${className} default-card-with-header-vertical`} {...props} style={style}>
                        {(logo || headerText) && (
                            <div className='default-card-with-header-container'>
                                <div className='default-card-with-header-upper'>
                                    {logo && <img src={logo} alt={`${headerText || 'logo'} img`} loading='lazy' />}
                                    {headerText && <p>{headerText}</p>}
                                </div>
                                <div className='bar'></div>
                            </div>
                        )}
                        <div className='default-card-with-header-lower'>
                            {paragraph && (
                                <div className='default-card-with-header-text'>
                                    <p>{paragraph}</p>
                                </div>
                            )}
                            {btnText && (
                                <div className='default-card-with-header-btn-container'>
                                    <Button disabled={btnDisabled}>{btnText}</Button>
                                </div>
                            )}
                        </div>
                        {children}
                    </div>
                );
            case 'defaultHorizontalCardWithHeader':
                return (
                    <div className={`${className} default-card-with-header-horizontal`} {...props} style={style}>
                        {logo && (
                            <div className='default-card-with-header-container'>
                                <div className='default-card-with-header-upper'>
                                    <img src={logo} alt={`${'logo'} img`} loading='lazy' />
                                </div>
                            </div>
                        )}
                        {logo && <div className='bar'></div>}
                        <div className='default-card-with-header-lower'>
                            {paragraph && (
                                <div className='default-card-with-header-text'>
                                    <p>{paragraph}</p>
                                </div>
                            )}
                        </div>
                        {children}
                    </div>
                );
            case 'defaultHorizontalElongatedCardWithHeader':
                return (
                    <div className={`${className} default-card-with-header-horizontal-elongated`} {...props} style={style}>
                        {logo && (
                            <div className='default-card-with-header-container'>
                                <div className='default-card-with-header-upper'>
                                    <img src={logo} alt={`${'logo'} img`} loading='lazy' />
                                </div>
                            </div>
                        )}
                        {logo && <div className='bar'></div>}
                        <div className='default-card-with-header-lower'>
                            {paragraph && (
                                <div className='default-card-with-header-text'>
                                    <p>{paragraph}</p>
                                </div>
                            )}
                        </div>
                        {children}
                    </div>
                );
            default:
                return <p className='invalid-card-text'>Invalid Card Type or Missing Props</p>
        }
    };

    return (
        renderCardContent()
    );
};

const CardComponents = () => {
    const [data, setData] = useState({
        type: 'product',
        logo: 'https://res.cloudinary.com/dib0peewu/image/upload/v1725112664/Screenshot_from_2024-08-31_19-23-09-removebg-preview_emtywq.png',
        headerText: 'Header Text',
        paragraph: 'Paragraph Text Paragraph Text Paragraph Text ParagraphParagraph ',
        btnText: 'Button Text',
        btnDisabled: false,
        image: 'https://assets.lummi.ai/assets/QmYq1Ev4L2oR2pTVACav6DNqutyXsRk56UtLFv2YurUsoH?auto=format&w=1500',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ProductName: 'Product Name',
        ProductPrice: 'Product Price',
        captionText: 'Caption Text',
        ctaText: 'CTA Text',
        hiddenCta: false
    });
    const [copyMessage, setCopyMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const copyCodeToClipboard = () => {
        const code = `
<Card 
  type="${data.type}" 
  logo="${data.logo}" 
  headerText="${data.headerText}" 
  paragraph="${data.paragraph}" 
  btnText="${data.btnText}" 
  btnDisabled={${data.btnDisabled}} 
  image="${data.image}" 
  description="${data.description}" 
  ProductName="${data.ProductName}" 
  ProductPrice="${data.ProductPrice}" 
  captionText="${data.captionText}" 
  ctaText="${data.ctaText}" 
  hiddenCta={${data.hiddenCta}} 
/>
        `;
        navigator.clipboard.writeText(code).then(
            () => {
                setCopyMessage('Copied!');
                setTimeout(() => setCopyMessage(''), 2000); // Remove message after 2 seconds
            },
            (err) => {
                setCopyMessage('Failed!');
                console.error('Could not copy text: ', err);
            }
        );
    };


    return (
        <div className=' w-screen dark:bg-dark bg-light py-3 grid md:grid-cols-2 gap-2 md:gap-10 sm:px-10'>
            <div className='flex justify-center items-center '>
                <div className='bg-dark/10 dark:bg-white/10 w-full h-full rounded-2xl flex flex-col items-center md:justify-start md:p-3 gap-y-1 relative'>
                    {/* Select Card Type */}
                    <label className='text-dark dark:text-primary'>Card Type:</label>
                    <select name="type" value={data.type} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] md:w-fit p-2.5 relative">
                        <option value="null">Choose type</option>
                        <option value="product">product</option>
                        <option value="productWithFullImage">productWithFullImage</option>
                        <option value="defaultCard1">defaultCard1</option>
                        <option value="defaultCard2">defaultCard2</option>
                        <option value="defaultCard3">defaultCard3</option>
                        <option value="defaultVerticalCardWithHeader">defaultVerticalCardWithHeader</option>
                        <option value="defaultHorizontalCardWithHeader">defaultHorizontalCardWithHeader</option>
                        <option value="defaultHorizontalElongatedCardWithHeader">defaultHorizontalElongatedCardWithHeader</option>
                    </select>

                    {/* Input Fields for dynamic card properties */}
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Logo URL:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="logo"
                                value={data.logo}
                                onChange={handleInputChange}
                                placeholder="Logo URL"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Header Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="headerText"
                                value={data.headerText}
                                onChange={handleInputChange}
                                placeholder="Header Text"
                            />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Paragraph:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="paragraph"
                                value={data.paragraph}
                                onChange={handleInputChange}
                                placeholder="Paragraph"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Button Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="btnText"
                                value={data.btnText}
                                onChange={handleInputChange}
                                placeholder="Button Text"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Image URL:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="image"
                                value={data.image}
                                onChange={handleInputChange}
                                placeholder="Image URL"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Description:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Product Name:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="ProductName"
                                value={data.ProductName}
                                onChange={handleInputChange}
                                placeholder="Product Name"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Product Price:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="ProductPrice"
                                value={data.ProductPrice}
                                onChange={handleInputChange}
                                placeholder="Product Price"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Caption Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="captionText"
                                value={data.captionText}
                                onChange={handleInputChange}
                                placeholder="Caption Text"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>CTA Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="ctaText"
                                value={data.ctaText}
                                onChange={handleInputChange}
                                placeholder="CTA Text"
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-1'>
                        <input
                            className=''
                            type="checkbox"
                            name="hiddenCta"
                            checked={data.hiddenCta}
                            onChange={handleInputChange}
                            id='hiddenCta'
                        />
                        <label className='text-dark dark:text-primary' htmlFor='hiddenCta'>Hide CTA</label>
                    </div>

                    <div className='flex justify-center items-center gap-1'>
                        <input
                            className=''
                            type="checkbox"
                            name="btnDisabled"
                            checked={data.btnDisabled}
                            onChange={handleInputChange}
                            id='btnDisabled'
                        />
                        <label className='text-dark dark:text-primary' htmlFor='btnDisabled' >Button Disabled</label>
                    </div>

                    {/* Copy Code Button */}
                    <div className="absolute right-0 -top-5 md:top-1 -translate-x-1">
                        <button
                            className="px-4 py-2 dark:bg-dark bg-white dark:text-white text-black  rounded-lg hover:dark:bg-dark/50 hover:bg-white/50 relative"
                            onClick={copyCodeToClipboard}
                        >
                            <IoCopy />
                            <p className={`absolute left-0 -top-1 -translate-x-1/4 -translate-y-full text-light bg-dark py-2 px-3 ml-1 rounded-3xl transform ${copyMessage ? "scale-100" : "scale-0"} transition-transform duration-200`}>
                                {copyMessage}
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-white flex justify-center items-center '>
                <div className='w-full h-full flex items-center justify-center bg-dark/10 dark:bg-light/10 rounded-2xl'>
                    <Card
                        {...data}
                        className='bg-black rounded-xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default CardComponents
        