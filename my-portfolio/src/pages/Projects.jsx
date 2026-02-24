import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GiftMHB/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log("GitHub Repositories:", data);
        setRepos(data);
      });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

      <div className="grid md:grid-cols lg:grid-cols-2 gap-8 mx-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2"> {repo.name} </h3>

            {repo.language && (
              <span className="inline-block bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full mb-3">
                {repo.language}
              </span>
            )}

            <p className="text-gray-400 text-sm mb-4"> {repo.description} </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
