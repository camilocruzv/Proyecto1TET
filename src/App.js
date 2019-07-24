import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">Tweet</h5>
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div class="input-group">
                <input type="text" class="form-control bg-light border-0 small" placeholder="¿Qué está pasando?" aria-label="Search" aria-describedby="basic-addon2">
                </input>
              </div>
            </form>
            <a href="#" class="btn btn-primary">Tweetear</a>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
