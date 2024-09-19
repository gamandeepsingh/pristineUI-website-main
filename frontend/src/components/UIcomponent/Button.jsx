import React from 'react'
import { IoCopy } from 'react-icons/io5';
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
    btnText = 'Button',
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

const Button = () => {
    const [data, setData] = React.useState({
        type: 'slideCenterTopBottom',
        backgroundColor: 'white',
        hoverBtnColor: 'black',
        disabled: false,
        hoverCircleColor: "",
        circleColor: "",
        hoverTextColor: 'white',
        textColor: 'black',
        btnText: 'Button',
    });
    const [copyMessage, setCopyMessage] = React.useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const copyCodeToClipboard = () => {
        const code = `
<DynamicButton 
    type="${data.type}" 
    backgroundColor="${data.backgroundColor}"
    textColor="${data.textColor}"
    disabled={${data.disabled}}
    ${data.circleColor ? `circleColor="${data.circleColor}"` : ''}
    hoverTextColor="${data.hoverTextColor}"
    ${data.hoverCircleColor ? `hoverCircleColor="${data.hoverCircleColor}"` : ''}
    hoverBtnColor="${data.hoverBtnColor}"
>
${data.btnText}
</DynamicButton>
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
        <div className='bg-light dark:bg-dark  w-screen  py-3 grid md:grid-cols-2 gap-2 md:gap-10 sm:px-10'>
            <div className='text-white flex justify-center items-center '>
                <div className='w-full dark:bg-light/10 bg-dark/10 h-full flex items-center justify-center rounded-2xl'>
                    <DynamicButton
                        {...data}
                        className='bg-black rounded-xl'
                    >
                        {data.btnText}
                    </DynamicButton>

                </div>
            </div>
            <div className='flex justify-center items-center '>
                <div className='bg-dark/10 dark:bg-white/10 w-full h-full rounded-2xl flex flex-col items-center md:justify-start md:p-3 gap-y-1 relative'>
                    {/* Select Card Type */}
                    <label className='text-dark dark:text-primary'>Button Type:</label>
                    <select name="type" value={data.type} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:border-primary     block w-[300px] md:w-fit p-2.5 relative">
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

                    {/* Input Fields for dynamic card properties */}
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Button Text:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="btnText"
                                value={data.btnText}
                                onChange={handleInputChange}
                                placeholder="'Button'"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Text Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="textColor"
                                value={data.textColor}
                                onChange={handleInputChange}
                                placeholder="'red'"
                            />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Hover Text Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="hoverTextColor"
                                value={data.hoverTextColor}
                                onChange={handleInputChange}
                                placeholder="'black'"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Hover Button Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="hoverBtnColor"
                                value={data.hoverBtnColor}
                                onChange={handleInputChange}
                                placeholder="'red'"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Background Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="backgroundColor"
                                value={data.backgroundColor}
                                onChange={handleInputChange}
                                placeholder="Background Color"
                            />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Circle Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="circleColor"
                                value={data.circleColor}
                                onChange={handleInputChange}
                                placeholder="Circle Color"
                            />
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Hover Circle Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="hoverCircleColor"
                                value={data.hoverCircleColor}
                                onChange={handleInputChange}
                                placeholder="Hover Circle Color"
                            />
                        </div>

                        
                    </div>



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

            
        </div>
    )
}

export default Button

// const type =[
//     simple,
//     slideSide,
//     slideBottom,
//     slideCenterSide,
//     slideCenterTopBottom,
//     growRound,
//     softShadow,
//     hardShadow,
//     iconOnly,
//     growRate
// ]





