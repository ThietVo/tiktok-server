const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;

server.use(middlewares)
// server.use((req, res, next) => {
//  if (isAuthorized(req)) { // add your authorization logic here
//    next() // continue to JSON Server router
//  } else {
//    res.sendStatus(401)
//  }
// })
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})