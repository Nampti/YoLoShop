import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button(props) {
    const bg = props.backgroundColor ? props.backgroundColor : 'main';
    const size = props.size ? 'btn-' + props.size : '';
    const animate = props.animated ? 'btn__animate' : '';
    return (
        <button
            className={cx('btn', `${bg}`, `${size}`, `${animate}`)}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className={cx('btn__txt')}>{props.children}</span>
            {
                props.icon ? (
                    <span className={cx('btn__icon')}>
                        <i className={cx(`${props.icon}`, 'bx-tada')}> </i>
                    </span>
                ) : null
            }

        </button>
    );
}
Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animation: PropTypes.bool,
    onclick: PropTypes.func,
}
export default Button;