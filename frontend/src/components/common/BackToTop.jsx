import React from 'react'

const BackToTop = () => {
    return (
        <div>
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="hidden text-8xl dark:text-white md:block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
        </div>
    )
}

export default BackToTop