
import React from 'react'

function Github() {
    const [data, setData] = React.useState(null);
    const [repos, setRepos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const [userResponse, repoResponse] = await Promise.all([
                    fetch('https://api.github.com/users/Rahul881229'),
                    fetch('https://api.github.com/users/Rahul881229/repos?sort=updated&per_page=6')
                ]);

                if (!userResponse.ok || !repoResponse.ok) {
                    throw new Error('Failed to fetch GitHub data');
                }

                const userData = await userResponse.json();
                const repoData = await repoResponse.json();

                setData(userData);
                setRepos(repoData);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    if (loading) {
        return <h2 className="text-center mt-20 text-xl">Loading GitHub Profile...</h2>;
    }

    if (error) {
        return <h2 className="text-center mt-20 text-red-500">{error}</h2>;
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">

            <div className="max-w-5xl mx-auto">

                {/* Profile Section */}
                <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        <img
                            src={data.avatar_url}
                            alt="GitHub Avatar"
                            className="w-36 h-36 rounded-full border-4 border-gray-700"
                        />

                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold">
                                {data.name || data.login}
                            </h1>

                            <p className="text-gray-400 mt-1">
                                @{data.login}
                            </p>

                            <p className="mt-4 text-gray-300">
                                {data.bio || 'No bio available'}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 text-sm text-gray-400">

                                {data.location && (
                                    <span>📍 {data.location}</span>
                                )}

                                {data.company && (
                                    <span>🏢 {data.company}</span>
                                )}

                                <span>📅 Joined {new Date(data.created_at).toLocaleDateString()}</span>

                            </div>

                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300"
                            >
                                View GitHub Profile
                            </a>
                        </div>

                    </div>

                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                    {[
                        { title: 'Repositories', value: data.public_repos },
                        { title: 'Followers', value: data.followers },
                        { title: 'Following', value: data.following },
                        { title: 'Public Gists', value: data.public_gists }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-gray-900 rounded-xl p-6 text-center"
                        >
                            <h2 className="text-3xl font-bold text-blue-400">
                                {item.value}
                            </h2>
                            <p className="text-gray-400 mt-2">
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Repositories */}
                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-5">
                        Latest Repositories
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        {repos.map((repo) => (
                            <div
                                key={repo.id}
                                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
                            >
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xl font-semibold text-blue-400 hover:underline"
                                >
                                    {repo.name}
                                </a>

                                <p className="text-gray-400 mt-3 text-sm">
                                    {repo.description || 'No description available'}
                                </p>

                                <div className="flex gap-5 mt-5 text-sm text-gray-400">
                                    <span>⭐ {repo.stargazers_count}</span>
                                    <span>🍴 {repo.forks_count}</span>
                                    <span>💻 {repo.language || 'N/A'}</span>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Github
