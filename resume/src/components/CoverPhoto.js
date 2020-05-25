import React from 'react';

const CoverPhoto = ({imgSrc, className}) => {
    return (
        <div className={`container-fluid px-0 ${className}`}>
            <img className="w-100" src={imgSrc} alt=""></img>
        </div>
    );
}

export default CoverPhoto;