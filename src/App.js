import React, {useState, useEffect} from "react";
import api from "./services/api.js";
import "./App.css";

export default function App(){
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      try{

        const response = await api.get('naruto')
        setFilmes(response.data)
      }catch(error){
        console.error("vai se fude", error)

      }
      
    }
    carregarFilmes();
  }, []);

  return(
    <div className="app-container">
      <h1>Filmes da TV Maze</h1>
      <div className="filme-container">
        {filmes.map(filme => (

          <div key={filme.show.id} className="filme-card">
            {filme.show.image && (
              <img 
                src={filme.show.image.medium}
                alt={filme.show.name}
                className="filme-imagem"
              />
            )}

            <div className="filme-info">
              <h2>{filme.show.name}</h2>
              <p>{filme.show.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

