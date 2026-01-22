"use client";

import { useState } from "react";
import { BookingModal } from "./BookingModal";

interface BookingButtonProps {
    children: React.ReactNode;
    className?: string;
    onOpen?: () => void;
}

export function BookingButton({ children, className, onOpen }: BookingButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (onOpen) onOpen();
        setIsOpen(true);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={className}
            >
                {children}
            </button>
            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
