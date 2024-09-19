import React, { useState } from 'react'
import { IoCopy } from 'react-icons/io5';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const DynamicButton = ({
    children,
    className = '',
    backgroundColor = '#fff',
    textColor = '#000',
    disabled = false,
    style = {},
    circleColor,
    circleSize = '15px',
    hoverTextColor = 'white',
    hoverCircleColor = 'white',
    hoverBtnColor = 'black',
    type = 'growRound',
    ...props
}) => {
    return (
        <button
            className={`dynamic-button ${type} ${className} ${disabled ? 'disabled' : ''}`}
            disabled={disabled}
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
                border: 'none',
                '--hover-color': hoverBtnColor || 'transparent',
                '--btn-hover-circle-color': hoverCircleColor,
                '--btn-circle-border-color': circleColor,
                ...style,
            }}
            {...props}
        >
            <span className="btn-overlay" style={{ backgroundColor: `var(--hover-color)` }} />
            {circleColor && (
                <span
                    className="btn-circle"
                    style={{
                        width: circleSize,
                        height: circleSize,
                    }}
                ></span>
            )}
            <span className="btn-content" style={{ '--btn-hover-text-color': hoverTextColor }}>{children}</span>
        </button>
    );
};


const DrawerModal = ({
    direction = 'bottom',
    typeOfButton = 'softShadow',
    drawerButtonText = 'Show',
    buttonText = 'Confirm',
    buttonProps,
    headerText,
    description,
    onClickHandler,
    image,
    buttonDisplay = true,
    children,
    props,
    style,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [fullHeight, setFullHeight] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    if (!isOpen) return null;

    return (
        <div >
            <DynamicButton
                type={typeOfButton}
                {...buttonProps}
                onClick={toggleDrawer}
                className={className}
            >
                {drawerButtonText}
            </DynamicButton>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction={direction}
                style={{
                    borderRadius: direction === 'top' ? ' 0 0 20px 20px' : direction === 'bottom' ? '20px 20px 0px 0px' : direction === 'left' ? '0 20px 20px 0' : '20px 0 0 20px ',
                    height: direction === 'top' ? '100% !important' : "",
                    ...style
                }}
                {...props}
                className={className}
            >
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="drawer-top-rounded-button"
                />
                <div
                    className="drawer-container"
                    style={{
                        height: fullHeight ? '80vh' : '',
                    }}
                >
                    {headerText && (
                        <div className="drawer-header">
                            <h3>{headerText}</h3>
                        </div>
                    )}
                    {description && (
                        <div className="drawer-description">
                            <p>{description}</p>
                        </div>
                    )}
                    {image && (
                        <div className="drawer-image">
                            <img src={image} width="100%" height="100%" alt="drawer-image" />
                        </div>
                    )}
                    {children}
                    {
                        buttonDisplay &&
                        <DynamicButton
                            type="simple"
                            hoverTextColor="white"
                            onClick={onClickHandler}
                            className={`outline-2 ${className}`}
                        >
                            {buttonText}
                        </DynamicButton>
                    }
                    {
                        buttonDisplay &&
                        <DynamicButton
                            type="simple"
                            className={`outline-2`}
                            onClick={() => {
                                toggleDrawer();
                                setFullHeight(false);
                            }}
                        >
                            Close
                        </DynamicButton>
                    }
                </div>
            </Drawer>
        </div>
    );
};

const DrawerComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        direction: 'bottom',
        typeOfButton: 'softShadow',
        drawerButtonText: 'Show',
        buttonText: 'Confirm',
        buttonProps: "Click",
        headerText: "Header",
        description: "lorem ipsum",
        image: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
        buttonDisplay: true,
        onClickHandler: () => console.log('Button Clicked'),
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
<DrawerModal
    direction="${data.direction}"
    typeOfButton="${data.typeOfButton}"
    drawerButtonText="${data.drawerButtonText}"
    buttonText="${data.buttonText}"
    buttonProps="${data.buttonProps}"
    headerText="${data.headerText}"
    description="${data.description}"
    image="${data.image}"
    buttonDisplay={${data.buttonDisplay}}
    onClickHandler={${data.onClickHandler.toString()}}
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
        <div className='w-screen relative  bg-light dark:bg-dark text-dark dark:text-white py-3 grid md:grid-cols-2 gap-2 md:gap-10 sm:px-10'>
            <div className='flex justify-center items-center '>
                <div className='bg-dark/10 dark:bg-white/10 w-full h-full rounded-2xl flex flex-col items-center md:justify-start md:p-3 gap-y-1 relative'>

                    {/* <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Direction:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="direction"
                                value={data.direction}
                                onChange={handleInputChange}
                                placeholder="Direction"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Button Type:</label>
                            <select name="typeOfButton" value={data.typeOfButton} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 relative">
                                <option value="null">Choose type</option>
                                <option value="simple">simple</option>
                                <option value="productWithFslideSideullImage">slideSide</option>
                                <option value="defauslideBottomltCard1">slideBottom</option>
                                <option value="defaultslideCenterSideCard2">slideCenterSide</option>
                                <option value="slideCenterTopBottom">slideCenterTopBottom</option>
                                <option value="growRound">growRound</option>
                                <option value="softShadow">softShadow</option>
                                <option value="hardShadow">hardShadow</option>
                                <option value="iconOnly">iconOnly</option>
                                <option value="growRate">growRate</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'> Drawer Text Button: </label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="drawerButtonText"
                                value={data.drawerButtonText}
                                onChange={handleInputChange}
                                placeholder="Drawer Button Text"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Button Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="buttonText"
                                value={data.buttonText}
                                onChange={handleInputChange}
                                placeholder="Button Text"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'> Drawer Button Props: </label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="buttonProps"
                                value={data.buttonProps}
                                onChange={handleInputChange}
                                placeholder="Drawer Button Props"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Header Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="headerText"
                                value={data.headerText}
                                onChange={handleInputChange}
                                placeholder="Header Text"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'> Description: </label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Image Link:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="image"
                                value={data.image}
                                onChange={handleInputChange}
                                placeholder="Image Link"
                            />
                        </div>
                    </div>

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
                    </div> */}

                </div>
            </div>
            <div className='text-white dark:bg-light/10 bg-dark/10 flex justify-center items-center min-h-80 rounded-xl'>
                <div className='w-full h-full flex items-center justify-center rounded-2xl relative'>
                    lvkm
                    <DrawerModal
                        direction = 'bottom'
                        typeOfButton = 'softShadow'
                        drawerButtonText = 'Show'
                        buttonText = 'Confirm'
                        buttonProps = "Click"
                        headerText = "Header"
                        description = "lorem ipsum"
                        onClickHandler = {() => console.log('Button Clicked')}
                        image = "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
                        buttonDisplay = {true}
                    />

                </div>
            </div>
        </div>
    )
}

export default DrawerComponent;