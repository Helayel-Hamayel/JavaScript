function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    
    return fetch(url)
        .then(response => {
            if (response.status === 403) {
                throw new Error("Rate limit reached. Try again later.");
            }
            if (response.status === 404) {
                throw new Error("User not found");
            }
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(userData => {
            console.log("--- Task 1: GitHub User JSON ---");
            console.log(userData);
            console.log("---------------------------------");
            
            return userData; 
        });
}

function fetchRepos(user) {
    const url = `https://api.github.com/users/${user.login}/repos`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch repos");
            }
            return response.json();
        });
}

function fetchRepoLanguages(repo) {
    const url = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`;
    
    return fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(err => {
            console.log(`Failed to fetch languages for ${repo.name}`);
            return {};
        });
}

function runGitHubExplorer(username) {
    fetchGitHubUser(username) 
        .then(user => {
            return fetchRepos(user); 
        })
        .then(repos => {
            const targetRepos = repos.slice(0, 5);
            const languagePromises = targetRepos.map(repo => {
                return fetchRepoLanguages(repo)
                    .then(languages => {
                        return {
                            name: repo.name,
                            languages: languages
                        };
                    });
            });
        
            return Promise.all(languagePromises);
        })
        .then(aggregatedData => {
            console.log("Task 4: Aggregated Results:", aggregatedData);
        })
        .catch(error => {
            if (error.message === "User not found") {
                console.log("User not found");
            } else if (error.message === "Failed to fetch repos") {
                console.log("Failed to fetch repos");
            } else if (error.message === "Rate limit reached. Try again later.") {
                console.log("Rate limit reached try again in 1 hour");
            } else {
                console.log("An unexpected error occurred:", error.message);
            }
        })
        .finally(() => {
            console.log("GitHub Explorer operation complete");
        });
}

runGitHubExplorer("octocat");