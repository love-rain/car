import React, {Component} from 'react'
import {connect} from "react-redux";
import {i18n, withNamespaces} from '../i18n'

@connect(state => ({

}), (dispatch) => ({

}))
class Home extends Component {
    

    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        }
    }


    render() {

        return (
           <div>
               Hello words
           </div>
        )
    }
}

export default withNamespaces('common')(Home)