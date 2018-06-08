// M:1 Users
// 1:M answers
// Can have many tags
// one module
// one lesson
// Question = {title, body, comments, tags, module,lesson, userId, answerId}
module.exports = {
  get:(req,res) => {
    res.send('get questions')
  },
  post:(req,res) => {
    res.send('post a question')
  },
  put:(req,res) => {
    res.send('Update a question')
  },
  delete: (req,res) => {
    res.send('Delte a question')
  }
}