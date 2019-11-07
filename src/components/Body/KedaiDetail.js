import React from 'react'

const KedaiDetail = ({kedai, style}) => {
    // console.log('detail',style)
    const display = (style) => {
        // console.log('xxxx',style)
        if(style){
            console.log("block")
            return {display: 'block'}
        }else{
            console.log("none")
            return {display: 'none'}
        }
    } 
    // display()

    return(
        <div className="kedai-detail" style={display(style)} >
            <h6>detil lokasi</h6>
            <p>{kedai.detil_lokasi}</p>
            <h6>lihat lokasi di Google Map </h6>
            <a href={kedai.gmaps_link}> gmaps {kedai.nama_kedai}</a>
            <h6>jam operasional </h6>
            <p>{kedai.jam_operasional}</p>
            <h6>menu rekomendasi </h6>
            <p>{kedai.menu_rekomendasi}</p>
            <h6>info lain </h6>
            <p>{kedai.info_lain}</p>
            <h6>kontributor</h6>
            <p>{kedai.kontributor}</p>
            {/* <img/>  */}
            <hr/>
        </div>
    
    )
}

export default KedaiDetail;