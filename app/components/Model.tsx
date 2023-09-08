import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
} from '@/components/ui/dialog';
import { MdOutlineBookmarkAdded } from 'react-icons/md'

interface TextModalProps {
    content: string;
    isOpen: boolean;
    onClose: () => void;
}

const TextModal: React.FC<TextModalProps> = ({ content, isOpen, onClose }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[425px] bg-black text-white font-sans border-none">
                <div className="flex-center flex-col gap-3">
                    <p className='text-xl'>
                        <MdOutlineBookmarkAdded style={{ fontSize: '1.5em' }} />
                    </p>
                    <p>{content}</p>
                </div>
                <DialogFooter>
                    <button
                        onClick={onClose}
                        className="btn text-white"
                    >
                        Close
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TextModal;
