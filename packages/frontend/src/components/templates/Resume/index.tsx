import './styles.css'
import React from 'react'
import { Button } from '../../atoms'

type ResumeProps = {
    iconSrc: string,
    text: string,
    imgSrc: string,
    buttonText: string,
    altText: string,
    url: string
}

const Resume:React.FC<ResumeProps> = ({iconSrc, text, imgSrc,altText= '', buttonText, url=''}) => {
    return (
        <section className='resume'>
            <figure className='resume__figure-icon'>
                <img src={iconSrc} alt='success icon' />
            </figure>
            <h1 className='resume__h1'>{text}</h1>
            <figure className='resume__figure-image'>
                <img src={imgSrc} alt={altText}/>
            </figure>
            <div className='resume__div'>
                <p className='resume__div__p'>{url}</p>
                <Button text={buttonText}/>
            </div>
        </section>
    )
}

export default Resume