import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

function Header() {
    return (
        <AppBar
            position="sticky"
            sx={{
                padding: '10px 0',
                background: 'rgba(255, 255, 255, 1)',
                zIndex: 3,
                width: '100%',
                boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)',
            }}
        >
            <Container
                sx={{
                    width: { 768: 750, 992: 970, 1200: 1174 },
                    padding: '0 15px',
                }}
            >
                <Toolbar disableGutters sx={{ width: '100%' }}>
                    Header
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
