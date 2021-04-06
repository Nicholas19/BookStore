import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import routes from 'routes';

const Login = ({ formData, users, onLogin, getUserName }) => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        const { User, Password, Remember } = data;

        const i = users.findIndex(item => item.userName === User && item.password === Password);

        if (i > -1) {
            onLogin(data);
            localStorage.setItem('userName', Remember ? User : '');
            getUserName(User);
            history.push(routes.Home);
        } else {
            alert('Неверное имя пользователя или пароль');
        }

    }

    return (
        <>
            <Form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group>
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        name="User"
                        ref={register({
                            required: true,
                            pattern: formData[0].pattern
                        })}
                        placeholder="Имя пользователя"
                        type="text"
                        style={{ borderColor: errors[formData[0].label] && "red" }}
                    />
                    {!errors[formData[0].label] ? '' :
                        <Form.Text className="text-muted">
                            {formData[0].error}
                        </Form.Text>
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="Password"
                        ref={register({
                            required: true,
                            pattern: formData[1].pattern
                        })}
                        placeholder="Пароль"
                        type="password"
                        style={{ borderColor: errors[formData[1].label] && "red" }}
                    />
                    {!errors[formData[1].label] ? '' :
                        <Form.Text className="text-muted">
                            {formData[1].error}
                        </Form.Text>
                    }
                </Form.Group>
                <Form.Group className={styles.checkbox}>
                    <Form.Check
                        name="Remember"
                        ref={register}
                        type="checkbox"
                        label="Remember me"
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Sign In
  			    </Button>
            </Form>
        </>
    );
}

Login.propTypes = {
	formData: PropTypes.array.isRequired,
	users: PropTypes.array.isRequired,
	onLogin: PropTypes.func,
    getUserName: PropTypes.func
}

Login.defaultProps = {
	onLogin: function (e) { },
	getUserName: function (e) { }
}

export default Login;