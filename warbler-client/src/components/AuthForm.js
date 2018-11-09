import React, {Component} from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            console.log('Logged in.')
        });
    }

    render() {
        const {email, username, password, profileImageUrl} = this.state;
        const {heading, buttonText, signUp, errors, removeError, history} = this.props;

        history.listen(() => {
            removeError();
        });

        return (
            <div>
                <div className="justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>

                            {errors.message && (
                                <div className='alert alert-danger'>
                                    {errors.message}
                                </div>
                            )}

                            <label htmlFor="email">Email:</label>
                            <input type="text"
                                className='form-control'
                                id='email'
                                name='email'
                                onChange={this.handleChange}
                                value={email}
                            />

                            <label htmlFor="email">Password:</label>
                            <input type="password"
                                className='form-control'
                                id='password'
                                name='password'
                                onChange={this.handleChange}
                            />

                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input type="text"
                                        className='form-control'
                                        id='username'
                                        name='username'
                                        onChange={this.handleChange}
                                        value={username}
                                    />

                                    <label htmlFor="image-url">Avatar URL:</label>
                                    <input type="text"
                                        className='form-control'
                                        id='image-url'
                                        name='profileImageUrl'
                                        onChange={this.handleChange}
                                        value={profileImageUrl}
                                    />
                                </div>
                            )}

                            <button type='submit' className='btn btn-primary btn-block btn-lg'>{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;