import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from "./CheckBox.module.scss";
import { useRef } from 'react';
const cx = classNames.bind(styles);
function CheckBox(props) {
    const inputRef = useRef(null);
    const onChange = () => {
        if (props.onChange) { props.onChange(inputRef.current) }
    };
    return (
        <label className={cx('custom-checkbox')}>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}></input>
            <span className={cx('custom-checkbox__checkmark')}>
                <i className={cx('bx bx-check')}></i>
            </span>
            {props.label}
        </label >
    );
}
CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
}
export default CheckBox;