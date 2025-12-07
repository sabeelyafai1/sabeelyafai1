import './GitHubStats.css';

function GitHubStats() {
  const username = 'sabeelyafai1';

  return (
    <section id="github-stats" className="github-stats">
      <div className="container">
        <h2 className="section-title">GitHub Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </div>
          <div className="stat-card">
            <img
              src={`https://nirzak-streak-stats.vercel.app/?user=${username}&theme=dark&hide_border=false`}
              alt="GitHub Streak"
              loading="lazy"
            />
          </div>
          <div className="stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact`}
              alt="Top Languages"
              loading="lazy"
            />
          </div>
        </div>
        <div className="visitor-badge">
          <img
            src={`https://visitcount.itsvg.in/api?id=${username}&icon=0&color=0`}
            alt="Visitor Count"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
