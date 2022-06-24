import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
// import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [menuResult, setMenuResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setMenuResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('inner-logo')}>
                    <span>Huyen</span>
                    Trinh
                </div>
            </div>
            <Tippy
                interactive="true"
                visible={menuResult.length > 0}
                render={(attrs) => (
                    <div className={cx('menu-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('menu-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('menu')}>
                    <div className={cx('li')}>
                        <a href="/" className={cx('active')}>
                            Home
                        </a>
                    </div>

                    <div className={cx('menu-place')}>
                        <a href="/">Shop</a>
                    </div>

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
            </Tippy>
        </header>
    );
}

export default Header;
