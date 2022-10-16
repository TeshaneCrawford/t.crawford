export default async function fetcher(url) {
    return fetch(url).then((res) => res.json());
}