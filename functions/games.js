const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async function(event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  });
  return client.query(
    q.Map(
      q.Paginate(
        q.Match(q.Index('games'))
      ),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )
    .then((response) => {
      const games = response.data.map(game => game.data).sort((a, b) => {
        return  ((a.displayFirst == b.displayFirst && b.displayFirst && a.releaseDate < b.releaseDate) ||
                (a.displayFirst == false && b.displayFirst == true)) ? 1 : -1
      });
      return {
        statusCode: 200,
        body: JSON.stringify(games)
      }
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
}