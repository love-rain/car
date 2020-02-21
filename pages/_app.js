import App, { Container } from 'next/app'
import React              from 'react'
import {Provider} from 'react-redux'
import store              from '../app/store'
import "../static/assets/styles.less";
import moment from 'moment';
import withRedux from 'next-redux-wrapper'
import withStore from "../app/lib/withStore";
import Router from 'next/router';
import { appWithTranslation } from '../i18n'


moment.locale('vi');


Router.events.on('routeChangeComplete', () => {
    if (process.env.NODE_ENV !== 'production') {
        const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
        const timestamp = new Date().valueOf();
        els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
    }
});

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {
            pageProps,
            Component,
            namespacesRequired: ['common'],
        }
    }


    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        )
    }
}

export default withRedux(withStore)(appWithTranslation(MyApp));
