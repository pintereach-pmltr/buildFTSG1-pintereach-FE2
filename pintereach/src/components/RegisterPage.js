// import React from 'react';
// import { connect } from 'react-redux'
// import { register } from '../actions/index'
// import { Link } from 'react-router-dom'

// class LoginPage extends React.Component {
//     state = {
//         credentials: {
//             username: '',
//             password: ''
//         }
//     }

//     handleChanges = event => {
//         this.setState({
//             credentials: {
//                 ...this.state.credentials,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     register = event => {
//         event.preventDefault();
//         this.props.login(this.state.credentials).then(() => {
//             this.props.history.push('/dashboard')
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <Link to='/login'></Link>
//                     <Link to='/register'></Link> 
//                     <input></input>
//                     <input></input>
//                     <button>Log In</button>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     isLoggingIn: state.isLoggingIn
// })

// export default connect(
//     mapStateToProps,
//     { register }
//   )(LoginPage);
  