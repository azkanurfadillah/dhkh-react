import React from 'react';

const KedaiList = ({kedaiS}) => {

    return(
        <div>
            {kedaiS.map((kedai) => (
                <div className = "kedai-list">
                    <h4>{kedai.nama_kedai} </h4>
                    <p>{kedai.halte_stasiun} </p>
                </div>
            ))}
        </div>
    )

}

export default KedaiList;