import { useState } from "react";
import useGithubRepo from "../components/useGithubRepo";
import CollapsibleSection from "../components/CollapsibleSection";

export default function Projects() {

  const { repos, loading, error } = useGithubRepo("https://api.github.com/users/GiftMHB/repos");
  const [currentPage, setCurrentPage] = useState(1);
  const [isUniOpen, setIsUniOpen] = useState(true);
  const [isLiveProjects, setIsLiveProjects] = useState(false);
  const [inDevProjects, setInDevProjects] = useState(false);


  //shows loading when waiting 
  if (loading) return <div>Loading...</div>;

  //error for when fetch fails   
  if (error) return <div>Failed to load repositories.</div>;


  const itemsPerPage = 4;
  const totalPages = Math.ceil(repos.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentRepos = repos.slice(start, start + itemsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      {/* heading */}
      <div className=" text-black font-bold flex items-center justify-center mb-8">
        <h2 className="text-4xl font-bold text-white pr-8">Projects</h2>
      </div>

      <CollapsibleSection
        title="University Projects & Public on github"
        count={repos.length}
        isOpen={isUniOpen}
        onToggle={() => setIsUniOpen(prev => !prev)}
      >
        <div className="grid md:grid-cols lg:grid-cols-2 gap-8 mx-8">
          {currentRepos.map((repo, index) => (

            /* card */
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
        {/* last part that shows "page of ..." and the next and Previous button */}
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
      </CollapsibleSection>

      <CollapsibleSection
        title="Live Projects"
        count={0}
        isOpen={isLiveProjects}
        onToggle={() => setIsLiveProjects(prev => !prev)}
      >
        <div className="grid md:grid-cols lg:grid-cols-2 gap-8 mx-8">
          <p>Coming soon</p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="In development"
        count={0}
        isOpen={inDevProjects}
        onToggle={() => setInDevProjects(prev => !prev)}
      >
        <div className="grid md:grid-cols lg:grid-cols-2 gap-8 mx-8">
          <p>Coming soon</p>
        </div>
      </CollapsibleSection>

    </section>
  );
}
