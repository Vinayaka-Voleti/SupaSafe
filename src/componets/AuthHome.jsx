import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import Welcome from './Welcome';

const AuthHome = (props) => {
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

  const login_GitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}`,
        queryParams: {
          prompt: 'select_account'
        }
      }
    });
    if (error) console.error('GitHub login error:', error.message);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Logout error:', error.message);
  };

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

  const backgroundColor = props.theme === 'dark' ? '#333' : '#f8f9fa'; // Greyish color

  return (
    <div className="container py-5">
      <div className="row align-items-center g-lg-5">
      <div className="col-lg-7 d-flex flex-column justify-content-center">
        <h2 className="text-5xl sm:text-6xl font-bold" style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'left', maxWidth: '90%' }}>
          SupaSafe: Your Community's Watchful Eye
        </h2>
        <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '1rem', textAlign: 'left', maxWidth: '90%' }}>
          Stay connected with your neighborhood through SupaSafe! Our intuitive platform enhances community safety with real-time updates and alerts. Enjoy a user-friendly design built for maximum convenience.
        </p>
      </div>



        
            <div className="" style={{display: "flex"}}>
              {user ? (
                <div className="auth-user">
                  <Welcome/>
                  {/* <h1>Welcome, {user.email}!</h1> */}
                  {/* <button className="logout-button" onClick={logout}>
                    Log Out
                  </button> */}
                </div>
              ) : (
                <div className="auth-login">
                  {/* <button className="login-button github" onClick={login_GitHub}>
                    Log In with GitHub
                  </button>
                  <p>or</p> */}
                  <button className="btn btn-success" onClick={loginWithGoogle}>
                    Get Started
                  </button>
                </div>
              )}
            </div>
      </div>
    </div>
  );
};

export default AuthHome;
