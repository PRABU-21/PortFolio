import { useEffect, useState } from 'react';
import ScrollFloat from './ScrollFloat';

const USERNAME = "PRABU-21";

const Stats = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // 1️⃣ Profile
        const profileRes = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        // 2️⃣ Repositories
        const repoRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`
        );
        const repoData = await repoRes.json();
        setRepos(repoData);

        // 3️⃣ Total Stars
        const totalStars = repoData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        setStars(totalStars);

        // 4️⃣ Languages Used (Aggregated)
        const langCount = {};
        repoData.forEach(repo => {
          if (repo.language) {
            langCount[repo.language] =
              (langCount[repo.language] || 0) + 1;
          }
        });
        setLanguages(langCount);

        setLoading(false);
      } catch (err) {
        console.error("GitHub API error:", err);
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section id="stats" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-yellow-100"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Stats
        </ScrollFloat>
        
        <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          {/* LeetCode Stats */}
          <div className="bg-[#000000] border border-neutral-800 rounded-2xl p-6 max-w-lg mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <span className="text-amber-500 text-lg font-mono">{'</>'}</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-100">LeetCode</h3>
            </div>
            
            <div className="flex items-center justify-center p-2 bg-neutral-800/30 rounded-lg mb-4">
              <img 
                src="https://leetcard.jacoblin.cool/PRABAKARAN_S_B_?theme=dark&border=0&font=Roboto&ext=heatmap"
                alt="LeetCode Stats"
                className="w-full h-full object-contain rounded-md"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJSb2JvdG8iIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxldENvZGUgU3RhdHMgTG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
            
            <div className="text-center">
              <a 
                href="https://leetcode.com/u/PRABAKARAN_S_B_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                View Full Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* GitHub Stats */}
          <div className="bg-[#000000] border border-neutral-800 rounded-2xl p-6 max-w-lg mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-100">GitHub Statistics</h3>
            </div>
            
            {loading ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-yellow-100">Loading GitHub stats...</p>
              </div>
            ) : profile ? (
              <div className="flex-grow flex flex-col p-2">
                {/* GitHub Chart */}
                <div className="w-full flex justify-center mb-4">
                  <img 
                    src="https://ghchart.rshah.org/PRABU-21" 
                    alt="GitHub Contribution Chart"
                    className="w-full max-w-xs h-auto"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJSb2JvdG8iIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdpdEh1YiBDaGFydCBMb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-neutral-900/50 rounded-lg p-3 text-center border border-neutral-800">
                    <p className="text-amber-400 font-bold text-lg">{profile.public_repos || 0}</p>
                    <p className="text-yellow-100/80 text-xs mt-1">Repositories</p>
                  </div>
                  <div className="bg-neutral-900/50 rounded-lg p-3 text-center border border-neutral-800">
                    <p className="text-amber-400 font-bold text-lg">{stars || 0}</p>
                    <p className="text-yellow-100/80 text-xs mt-1">Stars</p>
                  </div>
                  <div className="bg-neutral-900/50 rounded-lg p-3 text-center border border-neutral-800">
                    <p className="text-amber-400 font-bold text-lg">{profile.followers || 0}</p>
                    <p className="text-yellow-100/80 text-xs mt-1">Followers</p>
                  </div>
                </div>
                
                {/* Top Languages */}
                <div className="mb-4">
                  <h4 className="text-yellow-100 font-medium mb-2 text-sm">Top Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(languages)
                      .sort(([,a], [,b]) => b - a)
                      .slice(0, 5)
                      .map(([lang, count]) => (
                        <span 
                          key={lang}
                          className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs border border-amber-500/30"
                        >
                          {lang}
                        </span>
                      ))
                    }
                  </div>
                </div>
                
                <a 
                  href="https://github.com/PRABU-21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm justify-center mt-2"
                >
                  View GitHub Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                <div className="text-2xl mb-3">⚠️</div>
                <p className="text-yellow-100 mb-2">Failed to load GitHub data</p>
                <p className="text-yellow-100/80 text-sm">Please try again later</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;