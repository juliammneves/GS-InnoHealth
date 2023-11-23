import { useState } from 'react'
import Spline from '@splinetool/react-spline';

function Login() {
   const [usuario, setUsuario] = useState({
      usuario: "",
      senha: "",
   })

   const handleChange = async (e) => {
      const { name, value } = e.target;
      setUsuario({ ...usuario, [name]: value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
   
      let user;
   
      try {
         const response = await fetch("http://localhost:5000/usuarios");
         if (response.ok) {
            const users = await response.json();
   
            for (let i = 0; i < users.length; i++) {
               const use = users[i];
   
               if (use.nome === usuario.usuario && use.senha === usuario.senha) {
                  user = use;
                  break;
               }
            }
         }
   
         if (user) {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
   
            setTimeout(() => {
               window.location = '/Home';
            }, 1000);
         } else {
            alert("Usuário/senha inválidos");
            setUsuario({
               usuario: "",
               senha: "",
            });
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='login-page'>
         <div className="cic-verde"></div>
         <div className="cic-azul"></div>
         <div className="login">
            <div className="col-2">
               <h1>Login</h1>
               <p>Bem-vindo de volta! Faça login para uma experiência exclusiva.</p>
               <form onSubmit={handleSubmit}>
                  <div className='input-field'>
                     <input
                        type="text"
                        name="usuario"
                        value={usuario.usuario}
                        onChange={handleChange}
                        placeholder='Digite seu usuário' />
                     <label>Usuário</label>
                  </div>

                  <div className='input-field'>
                     <input
                        type="password"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleChange}
                        placeholder='Digite sua senha' />
                        <label>Senha</label>
                  </div>

                  <button type="submit">Entrar</button>
               </form>
            </div>
            <Spline className='logo' scene="https://prod.spline.design/nLkKXHQaQJ2osxJi/scene.splinecode" />
         </div>
      </div>
   )
}

export default Login