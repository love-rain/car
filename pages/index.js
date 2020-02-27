import React, {Component} from 'react'
import {connect} from "react-redux";
import {
  i18n,
  withNamespaces
} from '../i18n'
import MainLayOut from "../app/containers/layout";

@connect(state => ({}), (dispatch) => ({}))

class Home extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <MainLayOut/>
    )
  }
}

export default withNamespaces('common')(Home);
