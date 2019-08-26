import React from 'react';

class Preindex extends React.Component{
    render(){
      return(
        <main>
          <div className="jumbotron">
  <h1 className="display-4">¡Bienvenido a Coorp!</h1>
  <p className="lead">Coorp es un sistema cuyo objetivo principal es relacionar a los trabajadores y emprendedores con empresas, mediante sus currículums y proyectos.</p>
  <hr className="my-4"/>
  <p>Si desea saber más sobre nosotros clickee en el siguiente botón:</p>
  <button className="btn btn-info">Quiero saber más</button>
</div>
<div className="card text-white bg-info mb-3" style={{width: "18rem"}}>
  <div className="card-header">¿Qué puedo publicar?</div>
  <div className="card-body">
    <h5 className="card-title">Puedes publicar:</h5>
    <p className="card-text">Tu curriculum, y aquellos proyectos que desarrolles y estes buscando inversores. Recomendamos que el proyecto se encuentre patentado.</p>
  </div>
  </div>
        </main>
      )
    }
  }

  export default Preindex