import React from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions';
import styles from './styles.module.scss';
import LoginForm from 'components/complex/login';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import routes from 'routes';

const Login = ({ formData, users, onLogin }) => {
    const user = localStorage.getItem('userName');

    return (
        <>
            {user || formData[0].value ? 
            <Button
                variant="danger"
                onClick={() => {
                    localStorage.removeItem("userName");
                    // console.log(this.history);
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
            />    
        }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        formData: state.login.formData,
        users: state.login.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => dispatch(actions.login.login(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);