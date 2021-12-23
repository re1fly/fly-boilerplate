import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoApp from '../../assets/images/logo-gx-hitam.png';

const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: 12
    }
});

function Logo() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <img src={LogoApp} alt="Logo" width={50} />
            <span className={css(styles.title)}>Dashboard Admin</span>
        </Row>
    );
}

export default Logo;