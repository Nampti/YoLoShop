import Header from "./Header";
import Footer from "./Footer";
import ProductModalView from "../../ProductModalView";
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('main')}>
                    {children}
                </div>
            </div>
            <Footer />
            {/* <ProductModalView /> */}
        </div>
    );
}

export default DefaultLayout
