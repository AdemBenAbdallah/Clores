'use client'

import useNavBarSm from "@/app/hooks/useNavbarSm";
import { User } from "@prisma/client";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react";

type UserMenuProps = {
    currentUser: User | null
}
const UserMenu = ({ currentUser }: UserMenuProps) => {
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

    const navigate = (routeName: string) => {
        onClose()
        router.push(`/${routeName}`)
    }
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
                            <p className="cursor-pointer" onClick={() => navigate('aboutus')}>About Us</p>
                            <p className="cursor-pointer" onClick={() => navigate('shop')}>Shop</p>
                            <p className="cursor-pointer" onClick={() => navigate('blog')}>Blog</p>
                            <p className="cursor-pointer">Contact</p>
                            {!currentUser ? (
                                <p className="cursor-pointer" onClick={() => navigate('singin')}>Sign In/ Sign Up</p>
                            ) : (
                                <p className="cursor-pointer" onClick={() => signOut()}>logout</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
            }

        </>
    )
}

export default UserMenu