import HeroSlider from "../../components/Layout/HeroSlider";
import heroSliderData from "../../assets/fake-data/hero-slider"
import Section, { SectionTitle, SectionBody } from "../../components/Layout/Section";
import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/ProductCard"
import PolicyCard from "../../components/PolicyCard";
import policy from "../../assets/fake-data/policy";
import banner from "../../../src/assets/images/banner.png"
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from "../../sass/grid.module.scss";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <HeroSlider
                data={heroSliderData}
                controls={true}
                auto={true}
                timeOut={5000}
            />
            <Section>
                <SectionBody>
                    <div className={cx('row')}>
                        {
                            policy.map((item, index) =>
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                    col={item.col}
                                />
                            )
                        }
                    </div>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <div className={cx('row')}>
                        {
                            productData.getProducts(4).map((item, index) => (
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
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <div className={cx('row')}>
                        {
                            productData.getProducts(8).map((item, index) => (
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
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt=""></img>

                    </Link>

                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <div className={cx('row')}>
                        {
                            productData.getProducts(12).map((item, index) => (
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

    )
}

export default Home;