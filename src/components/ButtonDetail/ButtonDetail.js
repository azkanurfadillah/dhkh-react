import React from 'react';

const ButtonDetail = (kedai, id) => {
    const handleClick = (e, kedaiId) => {
        e.preventDefault()
        // console.log('the button was click', kedaiId);
        // const kedai = this.state.kedaikedai.filter(kedai => kedai._id === kedaiId)
        // this.setState(prevState => ({
        //     display: !prevState.display,
        //     thisKedaiId: kedaiId,
        //     showKedai: kedai
        // }))
        console.log('button was click', kedaiId)
        
       
    }

    console.log('id', kedai)
        
    return(
        <>
            <button type="button" className="btn btn-primary btn-sm float-right" onClick={(e) => handleClick(e, id)}>Detail</button>
        </>
    )
}

export default ButtonDetail