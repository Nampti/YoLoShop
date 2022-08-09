import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from "../../components/Button";
import numberWithCommas from "../../utils"
import styles from './ProductCard.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function ProductCard(props) {
    return (
        <div className={cx('product-card', `${props.col}`)}>
            <Link to={`/catalog/${props.slug}`}>
                <div className={cx('product-card__image')}>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className={cx('product-card__name')}>{props.name}</h3>
                <div className={cx('product-card__price')}>
                    {numberWithCommas(props.price)}
                    <span className={cx('product-card__price__old')}>
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className={cx('product-card__btn')}>
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animated={true}
                >
                    chọn mua
                </Button>
            </div>

        </div>
    );
}
ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}
export default ProductCard;