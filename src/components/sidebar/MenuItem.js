import React from 'react';
import {bool, object, string} from 'prop-types';
import {Row} from 'simple-flexbox';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#DDE2FF',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    activeTitle: {
        color: '#DDE2FF'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(221,226,255, 0.08)'
        },
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#A4A6B3',
        marginLeft: 24
    }
});

function MenuItem(props) {
    const {active, icon, title, ...otherProps} = props;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(styles.activeBar)}></div>}
            {icon}
            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
        </Row>
    );
}

MenuItem.propTypes = {
    active: bool,
    icon: object,
    title: string
};
export default MenuItem;