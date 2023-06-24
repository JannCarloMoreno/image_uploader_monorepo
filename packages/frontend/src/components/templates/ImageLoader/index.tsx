import './styles.css'
import React from 'react'
import { ProgressBar } from '../../atoms'

type ImageLoaderProps = {
    text: string
}

const ImageLoader:React.FC<ImageLoaderProps> = ({text}) => {
    return (
        <section className='imageLoader'>
            <div className='imageLoader--div'>
                <h1 className='imageLoader--h1'>{text}</h1>
                <ProgressBar/>
            </div>
        </section>
    )
}

export default ImageLoader