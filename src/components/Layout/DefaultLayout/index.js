import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
// import Sidebar from './Sidebar';
import images from '~/assets/images';
import Advertise from '../components/Advertise';
import Products from '../components/Products';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={images.banner} />
                </div>
                <Advertise />
                <Products />
            </div>
        </div>
    );
}

export default DefaultLayout;
