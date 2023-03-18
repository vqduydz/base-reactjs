import { Box } from '@mui/material';
import classNames from 'classnames/bind';

import icon from '_/assets/icon';
import images from '_/assets/images';
import { Button } from '_/components/common';
import { Inner } from '_/components/common/CustomComponents/CustomMui';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#f5f5f5' }} className={cx('border-bottom')}>
                <Inner sx={{ padding: '40px 15px', color: '#333' }}>Home</Inner>
            </Box>
        </Box>
    );
}
export default Home;
