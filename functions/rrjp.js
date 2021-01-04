const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async function(event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  });
  return client.query(
    q.Map(
      q.Paginate(
        q.Match(q.Index('rrjp_by_name'), event.queryStringParameters.name)
      ),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )
    .then((response) => {
      const album = response.data.map(album => album.data)[0];
      return {
        statusCode: 200,
        body: JSON.stringify(album)
      }
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
}