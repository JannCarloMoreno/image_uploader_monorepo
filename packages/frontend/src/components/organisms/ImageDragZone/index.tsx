import './styles.css'
import React from 'react'

interface Props {
    text: string,
    imgSrc: string,
    altText: string
}

const ImageDragZone:React.FC<Props> = ({text, imgSrc, altText=''}) => {
    return (
        <section className='ImageDragZone'>
            <figure>
                <img className="ImageDragZone--img" src={imgSrc} alt={altText} />
            </figure>
            <p className='imageDragZone--p'>{text}</p>
        </section>
    )
}

export default ImageDragZone