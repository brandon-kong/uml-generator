"use client";

import React, { useEffect, useRef } from "react";

import { useCodeMirror } from "@uiw/react-codemirror";

export const Editor = () => {
    const editor = useRef<HTMLDivElement | null>(null);

    const javascriptClass =
        'class A {\n\n\t# a: number = 0;\n\t# b: number = 0; \n\n\tconstructor() {\n\t\tconsole.log("Hello World"); \n\t} \n}';
    const { setContainer } = useCodeMirror({
        container: editor.current,
        value: javascriptClass,
        onChange: (value) => {
            console.log("onChange:", value);
        },
        placeholder: "Enter class definition here...",
        theme: "dark",
        height: "400px"
    });

    useEffect(() => {
        if (editor.current) {
            setContainer(editor.current);
        }
    }, [editor.current]);

    return (
        <div
            ref={editor}
            className={"rounded-lg overflow-hidden w-full shadow-2xl"}
        />
    );
};

export default Editor;
