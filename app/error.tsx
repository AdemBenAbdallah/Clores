'use client';

import { useEffect } from "react";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div
            className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
        >
            <p>Something went wrong</p>
            <div className="w-48 mt-4">
                <button className="btn btn-error">Error</button>
            </div>
        </div >

    );
}

export default ErrorState;