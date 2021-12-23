import React from 'react';
import {Column, Row} from 'simple-flexbox';
import {StyleSheet, css} from 'aphrodite';
import SidebarComponent from './components/sidebar/Sidebar.js';
import HeaderComponent from './components/header/Header';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import {RouteComponent} from "./routes/Router";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 45
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = {selectedItem: 'Home'};

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();


    render() {
        const {selectedItem} = this.state;
        return (
            <Router>
                <Row className={css(styles.container)}>
                    <SidebarComponent selectedItem={selectedItem}
                                      onChange={(selectedItem) => this.setState({selectedItem})}/>
                    <Column flexGrow={1} className={css(styles.mainBlock)}>
                        <HeaderComponent title={selectedItem}/>
                        <div className={css(styles.content)}>
                            <RouteComponent/>
                        </div>
                    </Column>
                </Row>
            </Router>
        );
    }
}

export default App;