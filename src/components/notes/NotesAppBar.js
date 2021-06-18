import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>15 de Junio de 2021</span>

            <div>
                <button className="btn">
                    Foto
                </button>

                <button className="btn">
                    Guardar
                </button>
            </div>
        </div>
    )
}
