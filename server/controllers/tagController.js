module.exports = {
  get:(req,res) => {

  },
  post:(req,res) => {
    res.send('post a tag')
  },
  put:(req,res) => {
    res.send('Update a tag')
  },
  delete: (req,res) => {
    res.send('Delte a tag')
  }
}