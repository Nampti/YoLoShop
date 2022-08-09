import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/ProductCard";
import ProductView from "../../components/ProductView";
import Section, { SectionTitle, SectionBody } from "../../components/Layout/Section";
import { useParams } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);
function Product() {
    const { slug } = useParams();
    const product = productData.getProductBySlug(slug)[0];
    const relatedProducts = productData.getProducts(8)
    return (
        <div>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <div className={cx('row')}>
                        {
                            relatedProducts.map((item, index) => (
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
                    </div>
                </SectionBody>
            </Section>

        </div>

    );
}
export default Product;