// Many answers to one question
// Answer = {body, userId}
module.exports = {
  get: (req, res) => {
    res.send("get answers");
  },
  post: (req, res) => {
    res.send("post an answer");
  },
  put: (req, res) => {
    res.send("Update an answer");
  },
  delete: (req, res) => {
    res.send("Delte an answer");
  }
};
