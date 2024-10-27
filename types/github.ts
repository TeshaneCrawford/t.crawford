export interface User {
  name: string;
  username: string;
  avatar: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
}

// export interface Repository {
//   name: string;
//   full_name: string;
//   description: string | null;
//   html_url: string;
//   stargazers_count: number;
//   forks_count: number;
//   language: string | null;
//   updated_at: string | null;
//   private: boolean;
//   archived: boolean;
//   fork: boolean;
// }

export interface GitHubData {
  user: User;
  // repos: Repository[];
}

// export interface RepoGroup {
//   [key: string]: Repository[];
// }