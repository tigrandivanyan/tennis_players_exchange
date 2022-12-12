import React from 'react';

interface ISampleData{
    data?: object,
    closeModal?:() => void
}

const Acceptdecline = (data, closeModal) => {

    return(
        <div className='modal-sample'>
            {data.text}
            <button onClick={closeModal}>Closeable</button>
        </div>
    )
}

export default Acceptdecline;