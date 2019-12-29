import React from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Login from './Login'
import Home from './Home'

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Navbar extends React.Component
{
    render()
    {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;

        return(
          <div>
            <div>
              <nav className="navbar navbar-dark bg-light">
                <a className="navbar-brand">Bookmark App</a>
                <form className="form-inline">
                {user 
                ?
                  <div>
                  <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={signOut}>Sign out</button> &nbsp;
                  <img src={user.photoURL} alt="prof" class="rounded-circle" width="30" height="30" /> </div> : 
                  <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={signInWithGoogle}>Sign in</button>
                }
                </form>
              </nav>
            </div>
            <div className="App">
                {
                  user 
                    ? <div><h5>Hello, {user.displayName}</h5>
                      <Home /> 
                      </div>
                    : <div><header className="App-header"><Login />
                    <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
                    </header></div>
                }
            </div>
          </div>
        );
    }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Navbar);
