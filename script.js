// variables
const userId = document.querySelector("[data-inputId]");
const searchBtn = document.querySelector(".btn");
const invalidText = document.querySelector("[data-invalidText]");
const profileIcon = document.querySelector("[data-profileIcon]");
const userName = document.querySelector("[data-userName]");
const dateOfJoining = document.querySelector("[data-dateOfJoining]");
const githubUrl = document.querySelector("[data-githubUrl]");
const userDesc = document.querySelector("[data-desc]");
const repos = document.querySelector("[data-repos]");
const follower = document.querySelector("[data-follower]");
const following = document.querySelector("[data-following]");
const locations = document.querySelector("[data-location]");
const website = document.querySelector("[data-website]");
const twitter = document.querySelector("[data-twitter]");
const company = document.querySelector("[data-company]");

let lightMode = false;


// default values
searchGithubAccount("krishnagupta97");

// functions
async function searchGithubAccount(userId) {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);

        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        const data = await response.json();
        invalidText.style.display = "none";
        renderDetails(data);
    } catch (error) {
        invalidText.style.display = "flex";
    }
};

function renderDetails(data) {
    profileIcon.src = data?.avatar_url || "";
    userName.innerText = data?.name || data?.login;
    dateOfJoining.innerText = "Joined: " + data?.created_at.slice(0, 10);
    githubUrl.innerText = `@${data?.login}`;
    githubUrl.href = data?.html_url || "Not Available";
    userDesc.innerText = data?.bio || "This profile has no bio";
    repos.innerText = data?.public_repos || "Not Available";
    follower.innerText = data?.followers || "Not Available";
    following.innerText = data?.following || "Not Available";
    locations.innerText = data?.location || "Not Available";
    website.innerText = "Website";
    website.href = data?.blog || "Not Available";
    twitter.innerText = data?.twitter_username || "Not Available";
    twitter.href = `https://twitter.com/${data?.twitter_username || "Not Available"}`;
    company.innerText = data?.company || "Not Available";
};

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    searchGithubAccount(userId.value);
});

const mode = document.querySelector(".user-mode");

function switchMode() {
    const wrapper = document.querySelector(".wrapper");
    const form = document.querySelector("form");
    const output = document.querySelector(".output");
    const h1 = document.querySelector("h1");
    const userMode = document.querySelector(".user-mode");
    const userName = document.querySelector("[data-userName]");
    const dateOfJoining = document.querySelector("[data-dateOfJoining]");
    const desc = document.querySelector("[data-desc]");
    const card = document.querySelector(".card");
    const repo = document.querySelector(".repo");
    const repos = document.querySelector("[data-repos]");
    const follower = document.querySelector(".follower");
    const followers = document.querySelector("[data-follower]");
    const following = document.querySelector(".following");
    const followings = document.querySelector("[data-following]");
    const location = document.querySelector("[data-location]");
    const websiteLink = document.querySelector("[data-website]");
    const twitterLink = document.querySelector("[data-twitter]");
    const company = document.querySelector("[data-company]");
    const inputElement = document.querySelector("[data-inputId]");
    const modeText = document.querySelector("[data-userModeText]");
    const modeIcon = document.querySelector("[data-userModeIcon]");

    if (lightMode) {
        wrapper.style.backgroundColor = "var(--lm-bg-light)";
        form.style.backgroundColor = "var(--lm-bg-content-light)";
        output.style.backgroundColor = "var(--lm-bg-content-light)";
        h1.style.color = "var(--lm-text)";
        userMode.style.color = "var(--lm-text)";
        userName.style.color = "var(--lm-text-alt)";
        dateOfJoining.style.color = "var(--lm-text)";
        desc.style.color = "var(--lm-text)";
        card.style.backgroundColor = "var(--lm-bg-light)";
        repo.style.color = "var(--lm-text)";
        repos.style.color = "var(--lm-text-alt)";
        follower.style.color = "var(--lm-text)";
        followers.style.color = "var(--lm-text-alt)";
        following.style.color = "var(--lm-text)";
        followings.style.color = "var(--lm-text-alt)";
        location.style.color = "var(--lm-text)";
        websiteLink.style.color = "var(--lm-text)";
        twitterLink.style.color = "var(--lm-text)";
        company.style.color = "var(--lm-text)";
        inputElement.style.color = "black";
        modeText.innerText = "Dark";
        modeIcon.src= `assets/moon-icon.svg`;
    } else {
        wrapper.style.backgroundColor = "var(--lm-bg-dark)";
        form.style.backgroundColor = "var(--lm-bg-content-dark)";
        output.style.backgroundColor = "var(--lm-bg-content-dark)";
        h1.style.color = "white";
        userMode.style.color = "white";
        userName.style.color = "white";
        dateOfJoining.style.color = "white";
        desc.style.color = "white";
        card.style.backgroundColor = "var(--lm-bg-dark)";
        repo.style.color = "white";
        repos.style.color = "white";
        follower.style.color = "white";
        followers.style.color = "white";
        following.style.color = "white";
        followings.style.color = "white";
        location.style.color = "white";
        websiteLink.style.color = "white";
        twitterLink.style.color = "white";
        company.style.color = "white";
        inputElement.style.color = "white";
        modeText.innerText = "Light";
        modeIcon.src= `assets/sun-icon.svg`;
    }
}

mode.addEventListener("click", () => {
    lightMode = !lightMode;
    switchMode();
});
