// release.config.cjs
/** @type {import('semantic-release').GlobalConfig} */

export default {
    branches: [
        "main",
        { name: "development", prerelease: true },
        { name: "feature/semantic-release", prerelease: "test" },
    ],
    tagFormat: "${version}",
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits",
                parserOpts: {
                    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
                    headerPattern: "^(\\w*)(?:\\((.*)\\))?!?: (.*)$",
                    breakingHeaderPattern: "^(\\w*)(?:\\((.*)\\))?!: (.*)$",
                },
            },
        ],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/git",
            {
                assets: ["CHANGELOG.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]",
            },
        ],
    ],
};
