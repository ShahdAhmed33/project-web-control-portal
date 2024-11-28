import React from 'react';

const BootandGRUB= () => {
    const printHeading = (text) => {
        return <h1>{text}</h1>;
    };

    const printParagraph = (text) => {
        return <p>{text}</p>;
    };

    return (
        <div>
            {printHeading('Boot and GRUB')}
            {printParagraph('This section covers the Boot and GRUB process in detail.')}
        </div>
    );
};

export default BootandGRUB;