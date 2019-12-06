import React, {useEffect, useState} from 'react';
//import Repos from '../data/repos';
import Repository from './Repository';


const Repositories = () => {
  const [Repos, setRepos] = useState([]); //Repos es la variable, y setRepos la que actualizara la variable Repos
  const [ReposCount, setReposCount] = useState([]);

  useEffect(() =>{
    const data = sessionStorage.getItem("repos"); //obtenemos datos del sessionStorage

    let myRepos;

    if(data){ //si hay algo en el sessionStorage
      myRepos = JSON.parse(data);
      myRepos = myRepos.slice(1,13)

      setRepos(myRepos); //lo asignamos a la variable Repos
      setReposCount(myRepos.length);

      return;
    }

    async function FetchRepos(){
      const response = await fetch("https://api.github.com/users/arturobr123/repos");
      myRepos = await response.json();

      sessionStorage.setItem("repos", JSON.stringify(myRepos));

      setRepos(myRepos); //actualiza Repos con la varible myRepos
      setReposCount(myRepos.length);
    }

    FetchRepos();
  }, []);

  return(
    <div className="max-w-4xl mx-auto">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mis repositorios</h2>
        <p>Colaboración y contribución de código</p>
      </header>

      <ul className="repos-list">
        {
          Repos.map((repo) => {
            return(
              <Repository repo={repo} key={repo.id}/>
            );
          })
        }
      </ul>

      <div className="mt-8 text-center">
        <a href="https://github.com/arturobr123" className="btn" target="_blank" rel="noopener noreferrer">Ver mas en GitHub {ReposCount}</a>
      </div>

    </div>
  );
}

export default Repositories;
