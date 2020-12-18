const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async function(event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  });
  return client.query(
    q.Map(
      q.Paginate(
        q.Match(q.Index('shows'))
      ),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )
    .then((response) => {
      const shows = response.data.map(show => show.data).sort((a, b) => b.date > a.date ? 1 : -1);
      return {
        statusCode: 200,
        body: JSON.stringify(shows)
      }
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
}