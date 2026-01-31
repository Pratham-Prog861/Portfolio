"use client";

import React, { useState, useEffect } from "react";
import { IconStar, IconGitFork, IconEye, IconBook } from "@tabler/icons-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface GitHubUser {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Repository {
  name: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  size: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

interface LanguageStats {
  [key: string]: number;
}

interface ContributionDay {
  date: string;
  count: number;
  day: string;
}

export default function GitHubStats() {
  const username = "Pratham-Prog861";
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<LanguageStats>({});
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const generateContributionData = (
    reposData: Repository[],
  ): ContributionDay[] => {
    const contributionsMap: { [key: string]: number } = {};
    const today = new Date();

    // Initialize last 30 days with 0 contributions
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      contributionsMap[dateStr] = 0;
    }

    // Count activities based on push dates
    reposData.forEach((repo) => {
      if (repo.pushed_at) {
        const pushDate = new Date(repo.pushed_at).toISOString().split("T")[0];
        if (contributionsMap.hasOwnProperty(pushDate)) {
          contributionsMap[pushDate]++;
        }
      }
    });

    // Convert to array format for Recharts
    return Object.entries(contributionsMap).map(([date, count]) => {
      const d = new Date(date);
      return {
        date,
        count,
        day: d.getDate().toString(),
      };
    });
  };

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch user data
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`,
      );
      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const user = await userResponse.json();
      setUserData(user);

      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      );
      if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
      const reposData = await reposResponse.json();
      setRepos(reposData);

      // Calculate language statistics
      const langStats: LanguageStats = {};
      reposData.forEach((repo: Repository) => {
        if (repo.language) {
          langStats[repo.language] = (langStats[repo.language] || 0) + 1;
        }
      });
      setLanguages(langStats);

      // Generate contribution data from last 30 days based on push activity
      const contributionData = generateContributionData(reposData);
      setContributions(contributionData);

      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load GitHub data",
      );
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          GitHub Statistics
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          GitHub Statistics
        </h2>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchGitHubData}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        GitHub Statistics
      </h2>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconBook className="w-8 h-8 mx-auto mb-2 text-blue-400" />
          <div className="text-3xl font-bold text-blue-400">
            {userData?.public_repos || 0}
          </div>
          <p className="text-gray-400 text-sm mt-1">Repositories</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconStar className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-3xl font-bold text-yellow-400">{totalStars}</div>
          <p className="text-gray-400 text-sm mt-1">Total Stars</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconGitFork className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <div className="text-3xl font-bold text-purple-400">{totalForks}</div>
          <p className="text-gray-400 text-sm mt-1">Total Forks</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconEye className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <div className="text-3xl font-bold text-green-400">
            {userData?.followers || 0}
          </div>
          <p className="text-gray-400 text-sm mt-1">Followers</p>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📊</span> Contribution Activity (Last 30
          Days)
        </h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={contributions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="day"
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                label={{
                  value: "Days",
                  position: "insideBottom",
                  offset: -5,
                  fill: "#9CA3AF",
                }}
              />
              <YAxis
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                label={{
                  value: "Contributions",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9CA3AF",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#9CA3AF" }}
                itemStyle={{ color: "#60A5FA" }}
                formatter={(value?: number) =>
                  value == null ? ["", ""] : [`${value} contributions`, ""]
                }
                labelFormatter={(label) => `Day ${label}`}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", r: 4 }}
                activeDot={{ r: 6, fill: "#A78BFA" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Languages */}
      <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💻</span> Most Used Languages
        </h3>
        <div className="space-y-3">
          {topLanguages.map(([language, count]) => {
            const percentage = ((count / repos.length) * 100).toFixed(1);
            const colors: { [key: string]: string } = {
              JavaScript: "from-yellow-400 to-yellow-600",
              TypeScript: "from-blue-400 to-blue-600",
              Python: "from-green-400 to-green-600",
              HTML: "from-orange-400 to-orange-600",
              CSS: "from-pink-400 to-pink-600",
              Java: "from-red-400 to-red-600",
              "C++": "from-indigo-400 to-indigo-600",
              C: "from-gray-400 to-gray-600",
            };
            const colorClass = colors[language] || "from-gray-400 to-gray-600";

            return (
              <div key={language}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">{language}</span>
                  <span className="text-gray-400">
                    {percentage}% ({count} repos)
                  </span>
                </div>
                <div className="h-2.5 bg-gray-700/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Repositories */}
      <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🏆</span> Top Repositories
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 hover:border-blue-500/50 hover:bg-gray-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors truncate flex-1">
                  {repo.name}
                </h4>
                {repo.language && (
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 ml-2 whitespace-nowrap">
                    {repo.language}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <IconStar className="w-4 h-4 text-yellow-400" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <IconGitFork className="w-4 h-4 text-purple-400" />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Visit Profile CTA */}
      <div className="text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>View Full GitHub Profile</span>
        </a>
      </div>
    </div>
  );
}
