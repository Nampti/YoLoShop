import PropTypes from 'prop-types';
import ProductView from '../ProductView';
import Button from '../Button';
import productData from "../../assets/fake-data/products";
import styles from './ProductModalView.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function ProductModalView() {
    const product = productData.getProductBySlug('quan-jean-phong-cach-10')[0];
    return (
        <div className={cx('product-view__modal', `${product === undefined ? '' : 'active'}`)}>
            <div className={cx('product-view__modal__content')}>
                <ProductView
                    product={product}
                />
                <div className={cx('product-view__modal__content__close')}>
                    <Button
                        size="sm"
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductModalView;