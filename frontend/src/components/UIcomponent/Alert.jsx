import { useState, useEffect } from 'react'
import { IoCopy } from 'react-icons/io5';

const Alert = ({
    children,
    className,
    display,
    timer = 3000,
    backgroundColor,
    top,
    left,
    right,
    bottom,
    icon,
    headerIcon,
    descriptionColor,
    headerColor,
    header,
    image,
    headerImage,
    time,
    description,
    borderColor,
    ...props }) => {
    const [showAlert, setShowAlert] = useState(true); // Start with true to show alert initially

    const handleRemoveAlert = () => {
        if (!display)
            setShowAlert(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleRemoveAlert();
        }, timer);
        return () => clearTimeout(timeout);
    }, [timer]);

    return (
        showAlert && ( // Only render the alert if showAlert is true
            <div
                className={`${className} alert`}
                style={{
                    backgroundColor: backgroundColor || "transparent",
                    top,
                    left,
                    right,
                    bottom,
                    borderColor
                }}
                {...props} // Spread other props (valid ones) here
            >
                {image && !headerIcon && !icon && !headerImage && (
                    <div className="alert-icon" style={{ alignItems: `${!description || !header ? "center" : ""}`, width: "100px" }}>
                        <img src={image} alt={"icon"} loading='eager' />
                    </div>
                )}
                {icon && !headerIcon && !image && !headerImage && (
                    <div className="alert-icon" style={{ alignItems: `${!description || !header ? "center" : ""}` }}>
                        <div dangerouslySetInnerHTML={{ __html: icon }} />
                    </div>
                )}
                {headerImage && !headerIcon && !icon && !image && (
                    <div className="alert-header-icon" style={{ alignItems: `${!description || !header ? "center" : ""}` }}>
                        <img src={headerImage} alt={"header icon"} loading='eager' />
                    </div>
                )}
                {headerIcon && !headerImage && !icon && !image && (
                    <div className="alert-icon" style={{ alignItems: `${!description || !header ? "center" : ""}` }}>
                        <div dangerouslySetInnerHTML={{ __html: headerIcon }} />
                    </div>
                )}

                <div className='alert-right-container'>
                    <div className='alert-header'>
                        {header && (
                            <p style={{ color: headerColor, fontWeight: 600 }}>{header}</p>
                        )}
                        {time && (
                            <p className='alert-time'>{time}</p>
                        )}
                    </div>
                    <p className='alert-description' style={{ color: descriptionColor }}>{description}</p>
                </div>
            </div>
        )
    );
};

const AlertComponent = () => {
    const [data, setData] = useState({
        timer: 3000,
        backgroundColor: "#f8d7da",
        headerColor: "#721c24",
        descriptionColor: "#721c24",
        header: "Error!",
        time: "Just now",
        description: "This is a danger alert—check it out!",
        top: "10px",
        right: "10px",
        image: "",
        headerImage: "",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="white" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7h-6v13h-2v-6h-2v6H9V9H3V7h18z"/></svg>`,
        headerIcon: ``
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
<Alert
backgroundColor="${data.backgroundColor}"
headerColor="${data.headerColor}"
descriptionColor="${data.descriptionColor}"
header="${data.header}"
time="${data.time}"
description="${data.description}"
bottom="${data.bottom}"
right="${data.right}"
timer={${data.timer}}
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


                    {/* Input Fields for dynamic card properties */}
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Header:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="header"
                                value={data.header}
                                onChange={handleInputChange}
                                placeholder="Header"
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Description:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Background Color:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="backgroundColor"
                                value={data.backgroundColor}
                                onChange={handleInputChange}
                                placeholder="Background Color"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Header Color:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="headerColor"
                                value={data.headerColor}
                                onChange={handleInputChange}
                                placeholder="Header Color"
                            />
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Description Color:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="descriptionColor"
                                value={data.descriptionColor}
                                onChange={handleInputChange}
                                placeholder="Description Color"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Time:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="time"
                                value={data.time}
                                onChange={handleInputChange}
                                placeholder="Time"
                            />
                        </div>
                    </div>
                    <p className='text-dark dark:text-primary mt-3 text-start'>Only set the required positions</p>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Bottom:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="bottom"
                                value={data.bottom}
                                onChange={handleInputChange}
                                placeholder="Bottom"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Right:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="right"
                                value={data.right}
                                onChange={handleInputChange}
                                placeholder="Right"
                            />
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Top:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="top"
                                value={data.top}
                                onChange={handleInputChange}
                                placeholder="Top"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Left:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="left"
                                value={data.left}
                                onChange={handleInputChange}
                                placeholder="Left"
                            />
                        </div>
                    </div>
                    <p className='text-dark dark:text-primary mt-3 text-start'>Only fill one from below <span className='text-sm'>(from 4 field)</span></p>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Header Icon:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="headerIcon"
                                value={data.headerIcon}
                                onChange={handleInputChange}
                                placeholder="Header Icon"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Icon:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="icon"
                                value={data.icon}
                                onChange={handleInputChange}
                                placeholder="Icon (as JSX)"
                            />
                        </div>

                    </div>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Header Image:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="headerImage"
                                value={data.headerImage}
                                onChange={handleInputChange}
                                placeholder="Header Image"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Image:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm bg-gray-100"
                                type="text"
                                name="image"
                                value={data.image}
                                onChange={handleInputChange}
                                placeholder="Image Link"
                            />
                        </div>

                    </div>

{/* 
                    <div className='flex items-center justify-center gap-1'>
                        <input
                            className=''
                            type="checkbox"
                            name="disabled"
                            checked={data.disabled}
                            onChange={handleInputChange}
                            id='disabled'
                        />
                        <label className='text-dark dark:text-primary' htmlFor='disabled'>Button Disabled</label>
                    </div> */}

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
            <div className='text-white dark:bg-light/10 bg-dark/10 flex justify-center items-center min-h-80 rounded-xl'>
                <div className='w-full h-full flex items-center justify-center rounded-2xl relative'>
                    <Alert
                        {...data}
                        display={true}
                    />

                </div>
            </div>
        </div>
    )
}

export default AlertComponent

