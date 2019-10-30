import React from 'react';
import { connect } from 'react-redux';

import styles from './style.scss';

const Home = (props) => {
    console.log(props)
    return (
        <div className={styles.gridContainer}>
            <header className={styles.header}>
                Header
            </header>
            <aside className={styles.sidenav}>
                Aside
            </aside>
            <main className={styles.main}>
                Main
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    );
};

export default connect(
    state => ({
        open: state.ui.open,
    }),
    null,
)(Home);
