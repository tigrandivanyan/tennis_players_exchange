import React from 'react';
import '../sample/sample.css';

interface ISampleData{
    data?: object,
    closeModal?:() => void
}

const Sample: React.FC<ISampleData> = ({ data, closeModal }) => {



    return(
        <div className='modal-sample'>
            {/*{data.text}*/}
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default Sample;