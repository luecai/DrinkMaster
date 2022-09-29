import React from 'react';

const SpinnerFlex = () => {
    return (
        <>
            <div class="d-flex align-items-center">
            <strong>Cargando...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </>
    );
}

export default SpinnerFlex;
