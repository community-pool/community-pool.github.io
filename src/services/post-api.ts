const fetchPosts = () => {
  return fetch(`http://localhost:7890/api/v1/posts/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  }).then(res => res.json());
};

export { fetchPosts };
