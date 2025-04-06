import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        queryParams: { prompt: 'select_account' }
      }
    });
    if (error) console.error('Google login error:', error.message);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      setUser(null);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="#">
          {props.title}
        </a>

        {/* Toggle button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="/event">Events</a>
            </li>
          </ul>

          {/* Authentication Section */}
          <div className="d-flex align-items-center">
            {user ? (
              <div className="dropdown">
                <div 
                  className=" dropdown-toggle d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {user.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="User Avatar"
                      className="rounded-circle me-2"
                      style={{ width: '40px', height: '40px' }}
                    />
                  ) : (
                    <span>No Avatar</span>
                  )}
                </div>
                  {/* <span className="ms-2">{user.user_metadata?.full_name || 'User'}</span> */}
                <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <button className="dropdown-item" onClick={logout}>Events</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>Settings</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>Log Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn btn-success" onClick={loginWithGoogle}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
