import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import styles from './PolicyCard.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function PolicyCard(props) {
    return (
        <div className={cx(`${props.col}`)}>
            <Link to="/policy">
                <div className={cx('policy-card')}>
                    <div className={cx('policy-card__icon')}>
                        <i className={cx(props.icon)}></i>

                    </div>
                    <div className={cx('policy-card__info')}>
                        <div className={cx('policy-card__info__name')}>
                            {
                                props.name
                            }
                        </div>
                        <div className={cx('policy-card__info__description')}>
                            {
                                props.description
                            }
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
}
PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,


}
export default PolicyCard;