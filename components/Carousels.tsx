'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import "./styles/carousels.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Carousels = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="section container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className='carousel__img'
                        src='realnike.png'
                        alt='sunset'
                    />
                    <Carousel.Caption>
                        <h3>Adapt BB 2.0</h3>
                        <p>With new self-lacing tech to a basketball shoe </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='carousel__img'
                        src='realjordan.jpg'
                        alt='sunset'
                    />
                    <Carousel.Caption>
                        <h3>Air Jordan</h3>
                        <p>Who doesn't know Jordan? This shoes is absolutely damn good.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='carousel__img'
                        src='fly.jpg'
                        alt='sunset'
                    />
                    <Carousel.Caption>
                        <h3>Jordan Fly</h3>
                        <p>
                            With this shoes I'm pretty sure you can fly.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels