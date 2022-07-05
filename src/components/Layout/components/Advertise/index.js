import classNames from 'classnames/bind';
import styles from './Advertise.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Advertise() {
    const carousel = [images.carousel1, images.carousel2, images.carousel3, images.carousel4];
    const [count, setCount] = useState(0);
    const [showCarousel, setShowCarousel] = useState(carousel[0]);

    // const handlePrev = () => {
    //     if (count == 0) setCount(carousel.length - 1);
    //     else {
    //         setCount(count - 1);
    //     }
    //     console.log(count);
    //     setShowCarousel(carousel[count]);
    // };
    // const handleNext = () => {
    //     if (count >= carousel.length - 1) setCount(0);
    //     else {
    //         setCount(count + 1);
    //     }
    //     console.log(count);
    //     setShowCarousel(carousel[count]);
    // };

    useEffect(() => {
        setTimeout(() => {
            if (count >= carousel.length - 1) {
                setCount(0);
            } else {
                setCount((prev) => prev + 1);
            }

            console.log(count);
            setShowCarousel(carousel[count]);
        }, 3000);
    }, [count]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Hot Sales</div>
            <div className={cx('carousel')}>
                <div className={cx('carousel__inner')}>
                    <img className={cx('carousel__image')} src={showCarousel} />
                </div>
                {/* <div className={cx('carousel__button')}>
                    <button className={cx('carousel__icon')}>
                        <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} />
                    </button>
                    <button className={cx('carousel__icon')}>
                        <FontAwesomeIcon icon={faAngleRight} onClick={handleNext} />
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Advertise;
