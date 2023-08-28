import React from 'react'
import "./styles/card.css"
import { ShoesProps } from '@/types';
interface ShoesCardProps {
    shoes: ShoesProps;
}
// { shoes }: ShoesCardProps
const Card = () => {
    return (
        <div className="card">
            <div className="card__img-container">
                <img className='card__img' src='cardpic.jpg' alt='trial' />
            </div>
            <div className="card__text-container">
                <div className="card__line"></div>
                <h4>Nike AirMax</h4>
                <p>$79.99</p>
            </div>
        </div>
    )
}

export default Card