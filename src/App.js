import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${categoria}&apiKey=e615a5057c2040d4ac1e019ace84d7da`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias.articles);

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='News Search'
        />

        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria} 
          />
        </div>
    </Fragment>
  );
}

export default App;
