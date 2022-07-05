// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSortDown } from '@fortawesome/free-solid-svg-icons';

// import Tippy from '@tippyjs/react/headless';

// import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
// import images from '~/assets/images';
// import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSortDown} />,
        title: 'Áo',
        // to: '/ao',
        children: {
            title: 'Áo',
            data: [
                {
                    type: 'ao',
                    title: 'Áo Thun',
                },
                {
                    type: 'ao',
                    title: 'Áo Polo',
                },
                {
                    type: 'ao',
                    title: 'Áo Sơ Mi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faSortDown} />,
        title: 'Quần',
        // to: '/quan',
        children: {
            title: 'Quần',
            data: [
                {
                    type: 'quan',
                    title: 'Quần Tây',
                },
                {
                    type: 'quan',
                    title: 'Quần Jean',
                },
                {
                    type: 'quan',
                    title: 'Quần Short',
                },
            ],
        },
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

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            {/* <div className={cx('logo')}>
                <div className={cx('inner-logo')}>
                    <span>L</span>O<span>G</span>O
                </div>
            </div> */}

            <div className={cx('menu')}>
                <div className={cx('li')}>
                    <a href="/" className={cx('active')}>
                        Home
                    </a>
                </div>
                <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
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
