import React from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions';
import styles from './styles.module.scss';
import LoginForm from 'components/complex/login';
import { Button } from 'react-bootstrap';
import routes from 'routes';

const Login = ({ formData, users, user, onLogin, getUserName, history }) => {

    return (
        <>
            {user ? 
            <Button
                variant="danger"
                onClick={() => {
                    localStorage.removeItem("userName");
                    getUserName(null);
                    history.push(routes.Home);
                }
            }
            >
                Log Out
            </Button> 
            :
            <LoginForm
                formData={formData}
                users={users}
                onLogin={onLogin}
                getUserName={getUserName}
            />    
        }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        formData: state.login.formData,
        users: state.login.users,
        user: state.login.User,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => dispatch(actions.login.login(data)),
        getUserName: (userName) => dispatch(actions.login.getUser(userName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);