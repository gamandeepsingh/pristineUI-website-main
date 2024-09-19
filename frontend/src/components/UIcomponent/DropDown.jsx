import React, { useEffect, useState } from 'react';
import { IoCopy, IoAdd, IoTrash } from 'react-icons/io5';

const Dropdown = ({ options, defaultSelected, onChange, className, backgroundColor, textColor }) => {
    const [selected, setSelected] = useState(defaultSelected || options[0]?.value);
    // console.log(options);

    const handleOptionChange = (event) => {
        const newValue = event.target.value;
        setSelected(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className={`dropdown-menu select ${className}`} style={{ "--dropdown-background-color": backgroundColor, "--dropdown-arrow-color": textColor }}>
            <div className="selected" style={{ color: textColor }}>
                {options.find(option => option.value === selected)?.label || "Select an option"}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="arrow"
                    fill={textColor}
                >
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>
                </svg>
            </div>
            <div className="options">
                {
                    options.map((option) => (
                        <div key={option.value}>
                            <input
                                id={option.value}
                                name="option"
                                type="radio"
                                value={option.value}
                                checked={selected === option.value}
                                onChange={handleOptionChange}
                            />
                            <label className="option" htmlFor={option.value} >
                                {option.label}
                            </label>
                        </div>
                    ))}
            </div>
        </div>
    );
};

const DropDownComponent = () => {
    const [data, setData] = useState({
        defaultSelected: 'success',
        options: [
            { label: 'Success', value: 'success' },
            { label: 'Danger', value: 'danger' },
            { label: 'Warning', value: 'warning' },
            { label: 'Info', value: 'info' },
            { label: 'Default', value: 'default' },
        ],
        backgroundColor: 'grey',
        onChange: (value) => console.log(value),
        textColor: 'white',
    });

    const [newOptionLabel, setNewOptionLabel] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleAddOption = () => {
        if (newOptionLabel.trim()) {
            const newOption = {
                label: newOptionLabel,
                value: newOptionLabel.trim().toLowerCase(),
            };
            setData({
                ...data,
                options: [...data.options, newOption],
            });
            setNewOptionLabel(''); // Reset the input field
        }
    };

    useEffect(() => {
        setData({ ...data })
    }, [newOptionLabel])

    const handleOptionEdit = (index, field, value) => {
        const updatedOptions = data.options.map((option, i) => {
            if (i === index) {
                return { ...option, [field]: value };
            }
            return option;
        });
        setData({
            ...data,
            options: updatedOptions,
        });
    };

    const handleDeleteOption = (index) => {
        const updatedOptions = data.options.filter((_, i) => i !== index);
        setData({
            ...data,
            options: updatedOptions,
        });
    };


    const copyCodeToClipboard = () => {
        const code = `
<Dropdown
    options={${JSON.stringify(data.options, null, 4)}}
    defaultSelected="${data.defaultSelected}"
    onChange={(value) => console.log(value)}
    backgroundColor="${data.backgroundColor}"
    textColor="${data.textColor}"
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
        <div className='w-screen relative bg-light dark:bg-dark text-dark dark:text-white py-3 grid md:grid-cols-2 gap-2 md:gap-10 sm:px-10'>
            <div className='flex justify-center items-center'>
                <div className='bg-dark/10 dark:bg-white/10 w-full h-full rounded-2xl flex flex-col items-center md:justify-start md:p-3 gap-y-1 relative'>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Default Selected:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="defaultSelected"
                                value={data.defaultSelected}
                                onChange={handleInputChange}
                                placeholder="Default Selected"
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Background Color:</label>
                            <input
                                className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100"
                                type="text"
                                name="backgroundColor"
                                value={data.backgroundColor}
                                onChange={handleInputChange}
                                placeholder="Background Color"
                            />
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-dark dark:text-primary'>Text Color:</label>
                            <input
                                className='text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100'
                                type="text"
                                name="textColor"
                                value={data.textColor}
                                onChange={handleInputChange}
                                placeholder="Text Color"
                            />
                        </div>

                        {/* Add Option Input */}
                        <div className="flex flex-col gap-y-2">
                            <label className="text-dark dark:text-primary">Add Option:</label>
                            <div className="flex flex-col gap-2 relative">
                                <input
                                    className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:outline-none hover:shadow-lg hover:border-primary bg-gray-100"
                                    type="text"
                                    value={newOptionLabel}
                                    onChange={(e) => setNewOptionLabel(e.target.value)}
                                    placeholder="New Option Label"
                                />
                                <button
                                    className="absolute right-0  px-4 py-2 dark:bg-dark bg-white dark:text-white text-black rounded-r-lg hover:dark:bg-dark/50 hover:bg-white/50 flex justify-center items-center h-10 w-fit"
                                    onClick={handleAddOption}
                                >
                                    <IoAdd size={20} />
                                </button>
                            </div>
                        </div>


                    </div>
                    <div className="mt-5 grid grid-cols-1">
                        <h4 className="text-dark dark:text-primary mb-2">Edit Options:</h4>
                        {data.options.map((option, index) => (
                            <div key={index} className="flex gap-2 items-center  mb-2">
                                <div className='flex justify-center items-center gap-2'>
                                    <input
                                        className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100"
                                        type="text"
                                        value={option.label}
                                        onChange={(e) => handleOptionEdit(index, 'label', e.target.value)}
                                        placeholder="Option Label"
                                    />
                                    <input
                                        className="text-sm custom-input w-full md:w-fit px-4 py-2 border text-dark border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-primary hover:shadow-lg hover:border-primary bg-gray-100"
                                        type="text"
                                        value={option.value}
                                        onChange={(e) => handleOptionEdit(index, 'value', e.target.value)}
                                        placeholder="Option Value"
                                    />
                                </div>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded-lg hover:bg-red-600"
                                    onClick={() => handleDeleteOption(index)}
                                >
                                    <IoTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Copy Code Button */}
                    <div className="absolute right-0 -top-5 md:top-1 -translate-x-1">
                        <button
                            className="px-4 py-2 dark:bg-dark bg-white dark:text-white text-black rounded-lg hover:dark:bg-dark/50 hover:bg-white/50"
                            onClick={copyCodeToClipboard}
                        >
                            <IoCopy />
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-white dark:bg-light/10 bg-dark/10 flex justify-center items-center min-h-80 rounded-xl'>
                <div className='w-full h-full flex items-center justify-center rounded-2xl relative'>
                    <Dropdown
                        {...data}
                    />
                </div>
            </div>
        </div>
    );
};

export default DropDownComponent;    
