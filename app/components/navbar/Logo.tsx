'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            className="cursor-pointer"
            src="/assests/icons/logo.webp"
            height="100"
            width="100"
            alt="Logo"
        />
    );
}

export default Logo;