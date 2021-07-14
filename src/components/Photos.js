import React, { useContext } from 'react'
import { Context } from '../Context'
import getClass from '../utils/index'
import Image from './Image'
import './Photos.scss'

function Photos() {
    const {allPhotos} = useContext(Context);
    const Images = allPhotos.map((item , index) => {
        return <Image key={item.id} item={item} className={getClass(index)}/>
    })

    return (
        <div className="photos-grid">
            {Images}
        </div>
    )
}

export default Photos
