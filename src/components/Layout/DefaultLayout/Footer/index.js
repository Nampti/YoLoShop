import logo from '../Footer/Logo-2.png';
import { Link } from "react-router-dom";
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/"
    },
    {
        display: "Liên hệ",
        path: "/catelog"
    },
    {
        display: "Tuyển dụng",
        path: "/"
    },
    {
        display: "Tin tức",
        path: "/"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/"
    },
];
const footerCustomerLinks = [
    {
        display: "Chính sách đối trả",
        path: "/"
    },
    {
        display: "Chính sách bảo hành",
        path: "/"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/"
    },
]
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('grid', 'wide', 'container')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('footer__title')}>Tổng đài hỗ trợ</div>
                        <div className={cx('footer__content')}>
                            <p> Liên hệ đặt hàng
                                <strong>0123456789</strong>
                            </p>
                            <p> Thắc mắc đơn hàng
                                <strong>0123456789</strong>
                            </p>
                            <p> Góp ý, khiếu nại
                                <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('footer__title')}>Về Yolo</div>
                        <div className={cx('footer__content')}>
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('footer__title')}>Chăm sóc khách hàng</div>
                        <div className={cx('footer__content')}>
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'footer__about')}>
                        <p>
                            <Link to={'/'}>
                                <img className={cx('footer__logo')} src={logo} alt="logo"></img>
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;