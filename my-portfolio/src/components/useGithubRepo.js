import { useState, useEffect } from "react";

function useGithubRepo(url) {

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    setLoading(true);

    fetch(url)
      .then(response => response.json())
      .then((data) => { 
        setRepos(data);
      })
      .catch(error =>{
        setError(error);
      })
      .finally(() => 
        setLoading(false)
    )
  }, [url])

  return { repos, loading, error }
}