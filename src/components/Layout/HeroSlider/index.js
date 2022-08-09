import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './HeroSlider.module.scss';
import heroSliderData from "../../../assets/fake-data/hero-slider";
import Button from '../../../components/Button';
const cx = classNames.bind(styles);
function HeroSlider(props) {
    const data = props.data;
    const timeOut = props.timeOut ? props.timeOut : 3000;
    const [activeSlide, setActiveSlide] = useState(0);
    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
            setActiveSlide(index);
        },
        [activeSlide, data],
    )
    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    }
    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }

        }
    }, [nextSlide, timeOut, props])
    return (
        <div className={cx('hero__slider')} >
            {
                data.map((item, index) => (
                    <div key={index} className={cx('hero__slider__item', `${index === activeSlide ? 'active' : ''}`)} >
                        <div className={cx('hero__slider__item__info')}>
                            <div className={cx('hero__slider__item__info__title')} style={{ color: `${item.color}` }}>
                                <span>{item.title}</span>
                            </div>
                            <div className={cx('hero__slider__item__info__description')}>
                                <span>{item.description}</span>
                            </div>
                            <div className={cx('hero__slider__item__info__btn')}>
                                <Link to={item.path}>
                                    <Button
                                        backgroundColor={item.color}
                                        icon="bx bx-cart"
                                        animated={true}
                                        size="sm"
                                    >
                                        Xem chi tiết
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('hero__slider__item__img')}>
                            <div className={cx('shape')} style={{ backgroundColor: `${item.color}` }}></div>
                            <img src={item.img} ></img>
                        </div>
                    </div >
                ))
            }
            {
                props.controls ? (
                    <div className={cx('hero__slider__control')}>
                        <div className={cx('hero__slider__control__item')} onClick={prevSlide}>
                            <i className={cx('bx bx-chevron-left')}></i>
                        </div>
                        <div className={cx('hero__slider__control__item')}>
                            <div className={cx('index')}>
                                {activeSlide + 1} / {data.length}
                            </div>
                        </div>
                        <div className={cx('hero__slider__control__item')} onClick={nextSlide}>
                            <i className={cx('bx bx-chevron-right')}></i>
                        </div>
                    </div>
                ) : null
            }
        </div>

    );
}
HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    controls: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
}
export default HeroSlider;