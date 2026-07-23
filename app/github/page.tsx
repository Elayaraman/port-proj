import Image from "next/image";

// Define TypeScript interfaces for GitHub API responses
interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const USERNAME = "Elayaraman";

async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
      cache: "no-store", // Ensure SSR
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

async function getLatestRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`,
      { cache: "no-store" } // Ensure SSR
    );
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function GitHubPage() {
  const [user, repos] = await Promise.all([getGitHubUser(), getLatestRepos()]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#070f1a]">
        <p className="font-mono text-[#32FFCE]">Error: Failed to connect to developer node.</p>
      </div>
    );
  }

  // Format numbers (e.g., 1200 -> 1.2k)
  const formatNumber = (num: number) => {
    return Intl.NumberFormat('en-US', {
      notation: "compact",
      maximumFractionDigits: 1
    }).format(num);
  };

  // Calculate days ago
  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays}D AGO`;
  };

  return (
    <div className="min-h-screen w-full bg-[#050b14] text-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-[#112240] rounded overflow-hidden p-1 relative z-10 bg-[#0a192f]">
              <Image 
                src={user.avatar_url} 
                alt={user.login} 
                width={160} 
                height={160} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Cyberpunk accent corner */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#32FFCE] z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#32FFCE] flex items-center justify-center z-20">
              <svg className="w-4 h-4 text-[#070f1a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
              [ {user.name || user.login} ]
            </h1>
            <p className="text-[#8892b0] max-w-2xl text-sm md:text-base leading-relaxed">
              {user.bio || "Architecting distributed systems and low-latency neural interfaces. Focused on building the next generation of decentralized operating systems."}
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-[#32FFCE] font-mono font-bold text-lg">{formatNumber(user.followers)}</span>
                <span className="text-[#8892b0] text-[10px] font-mono tracking-widest uppercase">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#32FFCE] font-mono font-bold text-lg">{formatNumber(user.following)}</span>
                <span className="text-[#8892b0] text-[10px] font-mono tracking-widest uppercase">Following</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#32FFCE] font-mono font-bold text-lg">{formatNumber(user.public_repos)}</span>
                <span className="text-[#8892b0] text-[10px] font-mono tracking-widest uppercase">Repositories</span>
              </div>
            </div>
          </div>
        </div>

        {/* 01_ ACHIEVEMENTS (MOCK DATA) */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-[#112240] pb-2">
            <span className="text-[#32FFCE] font-mono text-xs tracking-widest">01_</span>
            <h2 className="text-2xl font-bold tracking-tight uppercase">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a192f]/50 border border-[#112240] p-6 flex gap-4 hover:border-[#32FFCE]/50 transition-colors">
              <div className="w-12 h-12 bg-[#112240] rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#32FFCE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#32FFCE] font-bold text-xs uppercase tracking-widest">Pull Shark</h3>
                <p className="text-[#8892b0] text-xs leading-relaxed">Merged 50+ high-impact pull requests into core system kernels this quarter.</p>
              </div>
            </div>
            <div className="bg-[#0a192f]/50 border border-[#112240] p-6 flex gap-4 hover:border-[#32FFCE]/50 transition-colors">
              <div className="w-12 h-12 bg-[#112240] rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#32FFCE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#32FFCE] font-bold text-xs uppercase tracking-widest">Quickdraw</h3>
                <p className="text-[#8892b0] text-xs leading-relaxed">Resolved critical production vulnerabilities within 30 minutes of deployment.</p>
              </div>
            </div>
            <div className="bg-[#0a192f]/50 border border-[#112240] p-6 flex gap-4 hover:border-[#32FFCE]/50 transition-colors">
              <div className="w-12 h-12 bg-[#112240] rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#32FFCE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#32FFCE] font-bold text-xs uppercase tracking-widest">Yolo</h3>
                <p className="text-[#8892b0] text-xs leading-relaxed">Directly pushed experimental features to main branch with 100% test coverage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 02_ COMMIT ACTIVITY (MOCK DATA) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#112240] pb-2">
            <div className="flex items-center gap-4">
              <span className="text-[#32FFCE] font-mono text-xs tracking-widest">02_</span>
              <h2 className="text-2xl font-bold tracking-tight uppercase">Commit_Activity</h2>
            </div>
            <span className="text-[#8892b0] font-mono text-[10px] tracking-widest uppercase">Current_Year</span>
          </div>
          <div className="bg-[#0a192f]/30 border border-[#112240] p-6 overflow-x-auto">
            <div className="min-w-[750px]">
              <div className="flex gap-2 mb-2 text-[#8892b0] font-mono text-[10px] pl-8">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                  <div key={m} className="flex-1">{m}</div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col justify-between text-[#8892b0] font-mono text-[9px] py-[2px] pr-2 h-[100px]">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                <div className="flex gap-[3px] flex-1">
                  {[...Array(52)].map((_, colIndex) => {
                    // Calculate current week to only show activity for past/current weeks in the year
                    const now = new Date();
                    const startOfYear = new Date(now.getFullYear(), 0, 1);
                    const daysPassed = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
                    const currentWeek = Math.floor(daysPassed / 7);
                    
                    return (
                      <div key={colIndex} className="flex flex-col gap-[3px]">
                        {[...Array(7)].map((_, rowIndex) => {
                          // Zero activity for future weeks or days
                          const isFuture = colIndex > currentWeek || (colIndex === currentWeek && rowIndex > now.getDay());
                          const intensity = isFuture ? 0 : (Math.random() > 0.75 ? Math.floor(Math.random() * 4) + 1 : 0);
                          
                          let colorClass = "bg-[#112240]";
                          if (intensity === 1) colorClass = "bg-[#32FFCE]/20";
                          if (intensity === 2) colorClass = "bg-[#32FFCE]/40";
                          if (intensity === 3) colorClass = "bg-[#32FFCE]/70";
                          if (intensity === 4) colorClass = "bg-[#32FFCE] shadow-[0_0_5px_rgba(50,255,206,0.3)]";
                          
                          return (
                            <div 
                              key={rowIndex} 
                              className={`w-[11px] h-[11px] rounded-[2px] ${colorClass} transition-colors hover:border hover:border-white cursor-pointer`}
                              title={isFuture ? "0 contributions" : `${intensity} contributions`}
                            ></div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-end items-center gap-2 mt-4 text-[#8892b0] font-mono text-[10px]">
                <span>Less</span>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#112240]"></div>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#32FFCE]/20"></div>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#32FFCE]/40"></div>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#32FFCE]/70"></div>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#32FFCE]"></div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* 03_ LATEST REPOSITORIES (API DATA) */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-[#112240] pb-2">
            <span className="text-[#32FFCE] font-mono text-xs tracking-widest">03_</span>
            <h2 className="text-2xl font-bold tracking-tight uppercase">Latest_Repositories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map(repo => (
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noreferrer" 
                key={repo.id}
                className="bg-[#0a192f]/50 border border-[#112240] p-6 flex flex-col justify-between hover:border-[#32FFCE] transition-all group min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <svg className="w-5 h-5 text-[#32FFCE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    <div className="flex items-center gap-3 text-[#8892b0] font-mono text-[10px]">
                      <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>{formatNumber(repo.stargazers_count)}</span>
                      <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>{formatNumber(repo.forks_count)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#32FFCE] transition-colors line-clamp-1">{repo.name}</h3>
                    <p className="text-[#8892b0] text-xs mt-2 line-clamp-3 leading-relaxed">
                      {repo.description || "No description provided for this repository."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#112240]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#32FFCE]"></span>
                    <span className="text-[#8892b0] text-[10px] font-bold tracking-wider uppercase">{repo.language || "Unknown"}</span>
                  </div>
                  <span className="text-[#8892b0] font-mono text-[9px] tracking-widest uppercase">
                    UPDATED {getDaysAgo(repo.updated_at)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
