const express = require("express")
const next = require('next')
const {createProxyMiddleware} = require("http-proxy-middleware")

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app =  next({ dev, hostname, port })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()
        if(dev){
            server.use(
                "/",
                createProxyMiddleware({
                    target: "https://api.thenazrana.in",
                    changeOrigin: true
                })
            )
        }

    server.all("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if(err) throw err
        console.log(">Ready on https://api.thenazrana.in")
    })
}).catch(err => {
    console.log("Error", err)
})
