import React       from 'react';
// import NotFound    from '../app/components/Errors/NotFound';
// import ServerError from '../app/components/Errors/ServerError';
import {withNamespaces} from '../i18n';

class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {
            statusCode,
            namespacesRequired: ['common']
        }
    }

    render() {
        return (
            <div className='container-wrapper' style={{width : '100%', height : '100%'}}>
                <div style={{display : 'flex', flex : 0, justifyContent : 'center', alignItems : 'center'}}>
                    {/*{this.props.statusCode === 404 ? <NotFound/> : null}*/}
                    {/*{this.props.statusCode === 500 ? <ServerError/> : null}*/}
                </div>
            </div>
        )
    }
}

export default withNamespaces('common')(Error)

