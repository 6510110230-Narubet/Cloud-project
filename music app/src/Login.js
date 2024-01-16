import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const AUTH_URL =
"https://accounts.spotify.com/authorize?client_id=27e87247be3840bea2c12f0fabec2f03&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#474747 ' }}>
      <div className="row">
        <div className="col-12 text-center mb-3">
          <img
            src={require('./image/anyalogo.png')}
            alt="Logo"
            className="logo-img"
            style={{ backgroundColor: 'white', width: '200px', height: '200px', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
          />
        </div>
        <div className="col-12 text-center">
          <Button type="button" className="btn btn-success" style={{ width: '200px', height: '60px' }} href={AUTH_URL}>
            Login with Treeman Music
          </Button>
        </div>
      </div>
    </div>
  );
}
