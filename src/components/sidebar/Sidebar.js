import React, {Component} from 'react';
import {Column, Row} from 'simple-flexbox';
import {StyleSheet, css} from 'aphrodite';
import Logo from './Logo.js';
import MenuItem from './MenuItem.js';
import {Home, Layout, Menu, Settings, User} from "react-feather";
import {Link} from "react-router-dom";

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    mainContainerExpanded: {
        width: '100%',
        minWidth: '100vh',
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class Sidebar extends Component {

    state = {expanded: false};

    onItemClicked = (item) => {
        this.setState({expanded: false});
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({expanded: !prevState.expanded}));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <Menu color="black"/>
        </div>
    }

    render() {
        const {expanded} = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{position: 'relative'}}>
                <Row className={css(styles.mainContainer)} breakpoints={{768: css(styles.mainContainerMobile)}}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)}
                            breakpoints={{768: css(styles.containerMobile, expanded ? styles.show : styles.hide)}}>
                        <Logo/>
                        <Column className={css(styles.menuItemList)}>
                            <Link to="/">
                                <MenuItem
                                    title="Home"
                                    icon={<Home color="white"/>}
                                    onClick={() => this.props.onChange('Home')}
                                    active={this.props.selectedItem === 'Home'}
                                />
                            </Link>
                            <Link to="/layout">
                                <MenuItem
                                    title="Layout"
                                    icon={<Layout color="white"/>}
                                    onClick={() => this.props.onChange('Layout')}
                                    active={this.props.selectedItem === 'Layout'}
                                />
                            </Link>
                            <Link to="/profile">
                                <MenuItem
                                    title="Profile"
                                    icon={<User color="white"/>}
                                    onClick={() => this.props.onChange('Profile')}
                                    active={this.props.selectedItem === 'Profile'}
                                />
                            </Link>
                            <div className={css(styles.separator)}/>
                            <Link to="/setting">
                                <MenuItem
                                    title="Setting"
                                    icon={<Settings color="white"/>}
                                    onClick={() => this.props.onChange('Setting')}
                                    active={this.props.selectedItem === 'Setting'}
                                />
                            </Link>
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>

            </div>

        );
    };
};

export default Sidebar;