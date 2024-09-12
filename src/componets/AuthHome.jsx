import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

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
          <h1 className="text-5xl sm:text-6xl font-bold" style={{ fontSize: '3rem', fontWeight: '700' }}>
            SupaSafe: Your Community's Watchful Eye
          </h1>
          <p className="text-muted-foreground text-sm" style={{ lineHeight: '1.6' }}>
            Transform how you stay connected with your neighborhood through SupaSafe! Our platform offers a streamlined and intuitive approach to community safety and engagement. Enjoy a user-friendly interface that helps you stay informed and connected, ensuring your neighborhood is safer and more interactive. Experience the power of real-time updates and community alerts with our easy-to-use design, built for maximum convenience and reliability.
          </p>
        </div>
        <div className="col-lg-5">
          <div className="p-4 p-md-5 border rounded-3" style={{ backgroundColor }}>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </form>
            <div className="auth-container mt-3">
              {user ? (
                <div className="auth-user">
                  <h1>Welcome, {user.email}!</h1>
                  <button className="logout-button" onClick={logout}>
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="auth-login">
                  <button className="login-button github" onClick={login_GitHub}>
                    Log In with GitHub
                  </button>
                  <p>or</p>
                  <button className="login-button google" onClick={loginWithGoogle}>
                    Log In with Google
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;
