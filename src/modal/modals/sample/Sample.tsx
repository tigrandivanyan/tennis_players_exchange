import React from 'react';
import '../sample/sample.css';

interface ISampleData{
    data?: any,
    closeModal?:() => void
}

const Sample: React.FC<ISampleData> = ({ data, closeModal }) => {



    return(
        <div className='modal-sample'>
            <h1>Sample modal</h1>
            {data.text}
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default Sample;