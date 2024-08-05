import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class = "login">
        <div class = "from-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo"/>
            <form action="/" class="form">
                <label for="email" class="label">Email address</label>
                <input type="text" id="email" placeholder="example@gmail.com" class="input input-email"></input>
                <label for="password" class="label">Password</label>
                <input type="password" id="password" placeholder="**********" class="input input-password"></input>
               <input type="submit"
                value="Log in" class="primary-button login-button"></input>
                <a href="./clase2.html">Forget my password</a>
            </form>
            <button class = "secundary-button singup-button">Sign up</button>
        </div>
    </div>
  );
}

export default App;
