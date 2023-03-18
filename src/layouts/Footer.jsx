import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { Inner } from '_/components/common/CustomComponents/CustomMui';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <Box className={cx('wrapper')}>
            <Inner
                sx={{
                    display: 'flex',
                    padding: '30px 15px 0',
                    flexDirection: { 0: 'column', 768: 'row' },
                }}
            >
                Footer
            </Inner>
        </Box>
    );
}

export default Footer;
