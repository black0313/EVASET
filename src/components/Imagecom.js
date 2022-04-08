import React from 'react';

function Imagecom({id}) {
    return (
        <div>
            {console.log(id)}
            <img className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${id}`} alt="###"/>
        </div>
    );
}

export default Imagecom;