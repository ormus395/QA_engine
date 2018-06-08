module.exports = {
  get: (req, res) => {
    res.send("get comments");
  },
  post: (req, res) => {
    res.send("post a comment");
  },
  put: (req, res) => {
    res.send("Update a comment");
  },
  delete: (req, res) => {
    res.send("Delte a comment");
  }
};
