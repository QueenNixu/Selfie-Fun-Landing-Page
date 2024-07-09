import React from 'react'
import { Link } from 'react-router-dom'
import "./CardItem.css"

const CardItem = (props) => {

    return (
        <li class="cards__items">
            <Link class="cards__item__link" to={props.path}>
                <figure class="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="image" class="cards__item__img" />
                </figure>
                <div class="cards__item__info">
                    <h5 className='cards_item_text'>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    )

}

export default CardItem
