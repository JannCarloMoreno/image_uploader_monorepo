import './styles.css'
import React from 'react'
import { Button } from '../../atoms' 
import { ImageDragZone } from '../../organisms'

interface ImageUploaaderProps{
    titleText: string,
    subTitleText: string,
    imgSrc: string,
    dragAndDropText: string,
    imgAltText: string,
    buttonText: string
}

const ImageUploader:React.FC<ImageUploaaderProps> = ({titleText, subTitleText, imgSrc, dragAndDropText, imgAltText,buttonText}) => {
    return (
        <section className='imageUploader'>
            <h1 className='imageUploader--h1'>{titleText}</h1>
            <h2 className='imageUploader--h2'>{subTitleText} </h2>
            <ImageDragZone text={dragAndDropText} imgSrc={imgSrc}  altText={imgAltText}/>
            <span className='imageUploader--span'>Or</span>
            <Button text={buttonText} className='button'/>
        </section>
    )
}

export default ImageUploader