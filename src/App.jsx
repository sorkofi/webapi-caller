import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFetch } from './hooks/useFetch';

import reactLogo from './assets/react.svg';
import './App.css';

export function App() {
  const { data: repo } = useFetch("https://api.github.com/users/mongark/repos");

  return (
    <>
      <ul>
        {repo?.map((repository, index) => (
          <div className="teste">
          <li key={index}>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
            <p>{repository.language} Project</p>

            <a href={repository.svn_url}>{repository.svn_url}</a>
            {console.log(repository)}
          </li>
          </div>
        ))}
      </ul>
    </>
  )
}