import React from 'react'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import Router from 'next/router';
import moment from 'moment';
import App, {Container} from 'next/app'

import store from '../app/store'
import withStore from "../app/lib/withStore";
import {appWithTranslation} from '../i18n'
import MainLayOut from "../app/containers/layout";

import "../static/assets/styles.less";

moment.locale('vi');


Router.events.on('routeChangeComplete', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
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
          <MainLayOut>
            <Component {...pageProps}/>
          </MainLayOut>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(withStore)(appWithTranslation(MyApp));
