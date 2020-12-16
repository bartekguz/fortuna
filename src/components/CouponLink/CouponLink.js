import React from 'react';
import './CouponLink.css';

const CouponLink = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="lighter-gray shadow-5 pa4 br1">
            <p className="f3 white ">
                {'LINK DO KUPONU '}
                <input
                    className="f4 pa2 w-40 mh1"
                    type="text"
                    onChange={onInputChange}
                />
                <button
                    className="grow f4 link ph3 pv2 dib black bg-yellow"
                    onClick={onButtonSubmit}>ENTER</button>
            </p>
        </div>

    );
}

export default CouponLink;