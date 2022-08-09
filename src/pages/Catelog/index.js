import { useState, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from "./Catalog.module.scss";
import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/ProductCard";
import category from "../../assets/fake-data/category";
import colors from "../../assets/fake-data/product-color";
import size from "../../assets/fake-data/product-size"
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import InfinityList from '../../components/InfinityList';
const cx = classNames.bind(styles);
function Catelog() {
    const initFilter = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
                    break
                case "COLOR":
                    setFilter({ ...filter, color: [...filter.color, item.color] })
                    break
                case "SIZE":
                    setFilter({ ...filter, size: [...filter.size, item.size] })
                    break
                default:
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({ ...filter, category: newCategory })
                    break
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({ ...filter, color: newColor })
                    break
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({ ...filter, size: newSize })
                    break
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <div className={cx('catalog')}>
            <div className={cx('catalog__filter')}>
                <div className={cx('catalog__filter__widget')}>
                    <div className={cx('catalog__filter__widget__title')}>
                        danh mục sản phẩm
                    </div>
                    <div className={cx('catalog__filter__widget__content')}>
                        {
                            category.map((item, index) => (
                                <div key={index} className={cx('catalog__filter__widget__content__item')}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect("CATEGORY",
                                            input.checked, item)}
                                        checked={filter.category.includes(item.categorySlug)}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className={cx('catalog__filter__widget')}>
                    <div className={cx('catalog__filter__widget__title')}>
                        màu sắc
                    </div>
                    <div className={cx('catalog__filter__widget__content')}>
                        {
                            colors.map((item, index) => (
                                <div key={index} className={cx('catalog__filter__widget__content__item')}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect("COLOR",
                                            input.checked, item)}
                                        checked={filter.color.includes(item.color)}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className={cx('catalog__filter__widget')}>
                    <div className={cx('catalog__filter__widget__title')}>
                        kích cỡ
                    </div>
                    <div className={cx('catalog__filter__widget__content')}>
                        {
                            size.map((item, index) => (
                                <div key={index} className={cx('catalog__filter__widget__content__item')}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect("SIZE",
                                            input.checked, item)}
                                        checked={filter.size.includes(item.size)}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className={cx('catalog__filter__widget')}>
                    <div className={cx('catalog__filter__widget__content')}>
                        <Button size="sm" onClick={clearFilter}>Xóa bộ lọc</Button>

                    </div>
                </div>
            </div>
            <div className={cx('catalog__content')}>
                <InfinityList
                    data={products} />
                {/* <div className={cx('row')}>
                    {
                        products.map((item, index) => (
                            <ProductCard
                                key={index}
                                col={item.col}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={item.price}
                                slug={item.slug}
                            />
                        ))
                    }

                </div> */}

            </div>
        </div>
    );
}
export default Catelog;