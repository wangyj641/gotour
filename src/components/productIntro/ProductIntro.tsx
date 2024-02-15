import React from "react";
import styles from './ProductIntro.module.css'

interface PropsType {
    title: string;
    shortDescription: string;
    price: string | number;
    coupons: string;
    points: string;
    discount: string;
    rating: string | number;
    pictures: string[];
}

export const ProductIntro: React.FC<PropsType> = ({
    title,
    shortDescription,
    price,
    coupons,
    points,
    discount,
    rating,
    pictures,
}) => {
    return (
        <div className={styles["intro-container"]}></div>
    )
}
