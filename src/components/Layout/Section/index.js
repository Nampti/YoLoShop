import styles from './Section.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Section(props) {
    return (
        <div className={cx('section')}>
            {props.children}
        </div>
    );
}
export const SectionTitle = props => {
    return (
        <div className={cx('section__title')}>
            {props.children}
        </div>
    )
}
export const SectionBody = props => {
    return (
        <div className={cx('section__body')}>
            {props.children}
        </div>
    )
}
export default Section;