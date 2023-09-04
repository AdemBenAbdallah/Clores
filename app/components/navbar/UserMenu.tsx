'use client'

import useNavBarSm from "@/app/hooks/useNavbarSm";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react";

const UserMenu = () => {
    const router = useRouter()
    const { isOpen, onClose } = useNavBarSm()
    const menuRef = useRef<HTMLDivElement | null>(null)
    const toggleImgRef = useRef<HTMLImageElement | null>(null)



    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                e.target !== toggleImgRef.current
            ) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleOutside)
        }

        return () => {
            document.removeEventListener('click', handleOutside)
        }
    }, [isOpen, onClose])

    return (
        <>
            <div className="hidden md:flex items-center gap-10 text-xl">
                <p className="cursor-pointer" onClick={() => router.push('/aboutus')}>About Us</p>
                <p className="cursor-pointer" onClick={() => router.push('/shop')}>Shop</p>
                <p className="cursor-pointer" onClick={() => router.push('/blog')}>Blog</p>
                <p className="cursor-pointer">Contact</p>
            </div>
            {<AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: 300 }}
                        className="md:hidden absolute top-0 bottom-0 w-[50vw] h-screen right-0 p-4 bg-black flex-center"
                    >
                        <div className="flex flex-col gap-11">
                            <p className="cursor-pointer" onClick={() => router.push('/aboutus')}>About Us</p>
                            <p className="cursor-pointer" onClick={() => router.push('/shop')}>Shop</p>
                            <p className="cursor-pointer" onClick={() => router.push('/blog')}>Blog</p>
                            <p className="cursor-pointer">Contact</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
            }

        </>
    )
}

export default UserMenu