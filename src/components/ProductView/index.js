import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import styles from './ProductView.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import numberWithCommas from "../../utils"
const cx = classNames.bind(styles);
function ProductView(props) {
    const product = props.product;
    const history = useNavigate();
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        }
        else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])
    const check = () => {
        let res = true;
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }
        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }
        return true
    }
    const addToCart = () => {
        if (check()) console.log({ color, size, quantity })
    }
    const goToCart = () => {
        if (check()) history('/cart')
    }
    return (
        <div className={cx('product')}>
            <div className={cx('product__images')}>
                <div className={cx('product__images__list')}>
                    <div className={cx('product__images__list__item')} onClick={() => setPreviewImg
                        (product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className={cx('product__images__list__item')} onClick={() => setPreviewImg
                        (product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className={cx('product__images__main')}>
                    <img src={previewImg} alt=""></img>
                </div>
                <div className={cx('product-description', `${descriptionExpand ? 'expand' : ''}`)}>
                    <div className={cx('product-description__title')}>
                        Chi tiết sản phẩm
                    </div>
                    <div className={cx('product-description__content')} dangerouslySetInnerHTML={{ __html: product.description }} >

                    </div>
                    <div className={cx('product-description__toggle')} >
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('product__info')}>
                <h1 className={cx('product__info__title')}>{product.title}</h1>
                <div className={cx('product__info__item')}>
                    <span className={cx('product__info__item__price')}>
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>
                        Màu sắc
                    </div>
                    <div className={cx('product__info__item__list')}>
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className={cx('product__info__item__list__item', `${color === item ? 'active' : ''}`)} onClick={() => setColor(item)}>
                                    <div className={cx('circle', `bg-${item}`)}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>
                        Kích cỡ
                    </div>
                    <div className={cx('product__info__item__list')}>
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={cx('product__info__item__list__item', `${size === item ? 'active' : ''}`)} onClick={() => setSize(item)}>
                                    <div className={cx('product__info__item__list__item__size')} >
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>
                        Số lượng
                    </div>
                    <div className={cx('product__info__item__quantity')}>
                        <div className={cx('product__info__item__quantity__btn')} onClick={() => updateQuantity('minus')}>
                            <i className={cx('bx bx-minus')}></i>
                        </div>
                        <div className={cx('product__info__item__quantity__input')}>
                            {quantity}
                        </div>
                        <div className={cx('product__info__item__quantity__btn')} onClick={() => updateQuantity('plus')} >
                            <i className={cx('bx bx-plus')}></i>
                        </div>
                    </div>
                </div>
                <div className={cx('product__info__item')}>
                    <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
                    <Button onClick={() => goToCart()}>mua ngay</Button>

                </div>
            </div>
        </div >
    );
}
ProductView.propTypes = {
    product: PropTypes.object.isRequired
}
export default ProductView;