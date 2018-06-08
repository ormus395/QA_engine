// Users can log in, ask questions
// User 1:M Questions
// User 1:M Answers
// User = {name, username, track, email, avatar}


module.exports = {
  get: (req,res) => {
    res.send('get users')
  }
}