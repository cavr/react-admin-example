import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_CHECK
} from 'react-admin';


export default ( type, params ) => {
    if ( type === AUTH_LOGIN ) {
        localStorage.setItem( 'login' , 'login');

    }
    if ( type === AUTH_LOGOUT ) {
        localStorage.removeItem( 'login');

    }
    if ( type === AUTH_CHECK && !localStorage.getItem( 'login' ) ) {
        return Promise.reject();
    }
    return Promise.resolve();


}