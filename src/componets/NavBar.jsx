import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import './NavBar'


const NavBar = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user);

      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            break;
          case "SIGNED_OUT":
            setUser(null);
            break;
          default:
            break;
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    };

    fetchSession();
  }, []);

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}`,
        queryParams: {
          prompt: 'select_account'
        }
      }
    });
    if (error) console.error('Google login error:', error.message);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Logout error:', error.message);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: '2rem' }}>
            {props.title}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div className="auth-container mt-3">
              {user ? (
                <div className="auth-user">
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="User Avatar"
                          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        />
                      ) : (
                        <span>No Avatar</span>
                      )}
                    </a>
                    <div className="dropdown-menu dropdown-menu-start">
                      <button className="dropdown-item" onClick={logout}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="auth-login">
                  <button className="btn btn-success" onClick={loginWithGoogle}>
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
