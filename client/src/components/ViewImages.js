import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ViewImages({ gallery }) {
    return (

        <Carousel fade>
            { gallery.map(img => {
                return (
                    <Carousel.Item key={img.publicId} interval={ 1000 }>
                        <img className="d-block w-100" src={ img.url } alt={ img.alt_text } />
                    </Carousel.Item>
                )
            }) }
            
        </Carousel>

    );
}
