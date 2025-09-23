"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogOverlay } from "./dialog"; // Ensure DialogOverlay is imported correctly

const EmailInputDialog = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userEmail", email);
        onClose(); // Close the dialog after saving
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay /> {/* This overlay might be essential for handling outside clicks */}
            <DialogContent className="rounded-lg bg-slate-800 p-6 shadow-xl">
                <DialogTitle className="text-xl font-semibold">Email Required</DialogTitle>
                <DialogDescription className="mt-2 text-sm text-white">
                    Please enter your email. We'll use this to communicate with you if the bot fails
                    to answer your question.
                </DialogDescription>
                <form onSubmit={handleEmailSubmit} className="mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EmailInputDialog;
