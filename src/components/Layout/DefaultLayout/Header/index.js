import logo from '../Header/Logo-2.png';
import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from 'react'
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catelog"
    },
    {
        display: "Phụ kiện",
        path: "/product"
    },
    {
        display: "Liên hệ",
        path: "/"
    },
]
function Header() {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.className = cx('header', 'shrink')
            }
            else {
                headerRef.current.className = cx('header')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
    return (
        <div className={cx('header')} ref={headerRef}>
            <div className={cx('container')}>
                <div className={cx('header__logo')}>
                    <Link to={'/home'}>
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <div className={cx('header__menu')}>
                    <div className={cx('header__menu__left')}>
                        <div className={cx('header__menu__mobile-toggle')}>
                            <i className={cx('bx bx-menu-alt-left')}></i>
                        </div>
                        <div className={cx('header__menu__left-close')}>
                            <i className={cx('bx bx-chevron-left')}></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={cx('header__menu__item-left', `${index === activeNav ? 'active' : ''}`)}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx('header__menu__right')}>
                        <div className={cx('header__menu__item-right')}>
                            <i className={cx('bx bx-search')}></i>
                        </div>
                        <div className={cx('header__menu__item-right')}>
                            <Link to="/cart">
                                <i className={cx('bx bx-shopping-bag')}></i>
                            </Link>
                        </div>
                        <div className={cx('header__menu__item-right')}>
                            <i className={cx('bx bx-user')}></i>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
export default Header;
