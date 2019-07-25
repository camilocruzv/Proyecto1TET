import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Ingresar</h2>
          <div class="text-center social-btn">
            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Ingresar con <b>Facebook</b></a>
            <a href="#" class="btn btn-info btn-block"><i class="fa fa-twitter"></i> Ingresar con <b>Twitter</b></a>
            <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Ingresar con <b>Google</b></a>
          </div>
          <div class="or-seperator"><i>o</i></div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" name="username" placeholder="Usuario" required="required"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input type="password" class="form-control" name="password" placeholder="Contraseña" required="required"></input>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-block login-btn">Ingresar</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default App;
