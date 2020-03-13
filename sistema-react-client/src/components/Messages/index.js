import React from 'react';
import { useSelector } from 'react-redux';

export default function Messages() {

    const isShow = useSelector((state) => state.mensagem.showMessage);

    return (
        <React.Fragment>
            {isShow && (
                <div className="container mt-3">
                    <div className="alert alert-success" role="alert">
                        Operação realizada com sucesso.
                </div>
                </div>
            )}
        </React.Fragment>
    );
}