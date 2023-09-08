'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
            className="
                bg-white
                h-[100vh]
                flex 
                flex-col 
                justify-center 
                items-center 
            "
        >
            <PuffLoader
                size={100}
                color="black"
            />
        </div>
    );
}

export default Loader;