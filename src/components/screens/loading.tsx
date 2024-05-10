"use client";

import { useEffect } from "react";
import { P } from "../typography";

export default function LoadingScreen() {
    // handle loading screen

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            className={
                "fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-background"
            }
        >
            <div
                className={
                    "w-full max-w-60 flex flex-col-reverse gap-4 items-center justify-center"
                }
            >
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-neutral-800">
                    <div className="bg-neutral-500 h-2.5 rounded-full w-1/2"></div>
                </div>
                <P>Loading</P>
            </div>
        </div>
    );
}
