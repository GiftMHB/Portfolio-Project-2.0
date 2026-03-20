import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GiftMHB/repos")
      .then((response) => response.json())
      .then((data) => {
        // console.log("GitHub Repositories:", data);
        setRepos(data);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(repos.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentRepos = repos.slice(start, start + itemsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className=" text-black font-bold flex items-center justify-center mb-8">
        <h2 className="text-4xl font-bold text-white pr-8">Projects</h2>
      </div>

      <div className="grid md:grid-cols lg:grid-cols-2 gap-8 mx-8">
        {currentRepos.map((repo, index) => (
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
      <div className="flex  mt-8 mx-8 justify-between items-center">
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <div>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-orange-300 rounded-md mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-orange-300 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
