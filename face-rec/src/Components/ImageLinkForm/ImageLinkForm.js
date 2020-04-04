import React from "react";
import './ILF.css'


const ILF = () => {
    return (
        <div>
            <p className="f3">
                {"This magic brain detect faces in your pictures!!!"}
            </p>
            <div className="center">
                <div className='form center pa4 br3 shadow-5'>
                    <input className="f4 pa3 w-70 center" type="tex" />
                    <button className="w=30 grow f4 link ph3 pv2 dib white bg-light-purple">
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ILF;
