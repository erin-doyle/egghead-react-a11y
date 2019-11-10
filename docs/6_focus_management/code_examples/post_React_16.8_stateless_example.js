import React, { useRef, useEffect } from 'react';

function CustomTextInput() {
    const textInput = useRef(null);

    useEffect(() => {
        if (textInput && textInput.current) {
            textInput.current.focus();
        }
    }, []);

    return (
        <input type="text" ref={textInput} />
    );
}
