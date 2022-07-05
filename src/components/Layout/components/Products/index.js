import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p>Gen-Rub</p>
            </div>
            <div className={cx('products')}>
                <div className={cx('products__line')}>
                    <div className={cx('products__item')}>
                        <img
                            className={cx('product__image')}
                            src="http://product.hstatic.net/200000195489/product/z3113942113874_42034db9bf62422cc93ecdb24387c26b_386b92cac8164c0d8ba1f59f29000697_master.jpg"
                        />
                        <div className={cx('product__name')}>POLO 2.0 LOGO GB</div>
                        <div className={cx('product__price')}>289,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img
                            className={cx('product__image')}
                            src="//product.hstatic.net/200000195489/product/green_wave_polo_xanh_la_truoc_d57d0400a40b4778a934786b23ba3044_master.jpg"
                        />
                        <div className={cx('product__name')}>GREEN WAVE POLO GB</div>
                        <div className={cx('product__price')}>298,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img
                            className={cx('product__image')}
                            src="//product.hstatic.net/200000195489/product/z3113942096505_deb64747c63139abd37c115bf29ac2f5_162c912a1b7243a3b03a7fafdad98405_master.jpg"
                        />
                        <div className={cx('product__name')}>POLO NEW WHITE GB</div>
                        <div className={cx('product__price')}>259,000 đ</div>
                    </div>
                </div>
                <div className={cx('products__line')}>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.coat__bau} />
                        <div className={cx('product__name')}>JACKET SWE GB</div>
                        <div className={cx('product__price')}>389,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.coat__hoddie__1} />
                        <div className={cx('product__name')}>HODDIE DORIS GB</div>
                        <div className={cx('product__price')}>398,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.coat__hoddie__2} />
                        <div className={cx('product__name')}>HODDIE DRAGON GB</div>
                        <div className={cx('product__price')}>398,000 đ</div>
                    </div>
                </div>
                <div className={cx('products__line')}>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.short__au__2} />
                        <div className={cx('product__name')}>EURO KILLEN GB</div>
                        <div className={cx('product__price')}>439,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.short__jean__1} />
                        <div className={cx('product__name')}>SCROTE BLACK GB</div>
                        <div className={cx('product__price')}>359,000 đ</div>
                    </div>
                    <div className={cx('products__item')}>
                        <img className={cx('product__image')} src={images.short__jean__2} />
                        <div className={cx('product__name')}>JEAN ABI GB</div>
                        <div className={cx('product__price')}>379,000 đ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
