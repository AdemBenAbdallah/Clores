import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion cursor-pointer">
            <motion.div
                className={`accordion-header ${isOpen ? 'open' : ''} text-[14px]`}
                onClick={toggleAccordion}
                initial={false}
            >
                <span className="accordion-title">{title}</span>
                <motion.span
                    className={`accordion-icon ${isOpen ? 'open' : ''} text-[12px] ml-[5px] cursor-pointer text-primary`}
                    initial={false}
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        translateY: isOpen ? -2 : 0, 
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    ▼
                </motion.span>

            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
