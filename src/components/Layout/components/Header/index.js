import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('inner-logo')}>
                    <span>Huyen</span>
                    Trinh
                </div>
            </div>

            <div className={cx('menu')}>
                <li>
                    <a href="/" className={cx('active')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/">Shop</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
            </div>
        </header>
    );
}

export default Header;
