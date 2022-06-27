// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSortDown } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
// import images from '~/assets/images';
// import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSortDown} />,
        title: 'Áo',
        to: '/ao',
    },
    {
        icon: <FontAwesomeIcon icon={faSortDown} />,
        title: 'Quần',
        to: '/quan',
    },
    {
        icon: <FontAwesomeIcon icon={faSortDown} />,
        title: 'Phụ kiện',
        to: '/phukien',
    },
];

function Header() {
    // const [menuResult, setMenuResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setMenuResult([1, 2, 3]);
    //     }, 0);
    // }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('inner-logo')}>
                    <span>L</span>O<span>G</span>O
                </div>
            </div>

            <div className={cx('menu')}>
                <div className={cx('li')}>
                    <a href="/" className={cx('active')}>
                        Home
                    </a>
                </div>
                <Menu items={MENU_ITEMS}>
                    <div className={cx('menu-place')}>
                        <a href="/">
                            Shop
                            <FontAwesomeIcon className={cx('icon-down')} icon={faAngleDown} />
                        </a>
                    </div>
                </Menu>

                <div className={cx('li')}>
                    <a href="/">Blog</a>
                </div>
                <div className={cx('li')}>
                    <a href="/">Contact</a>
                </div>
                <div className={cx('li')}>
                    <a href="/">Log in</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
