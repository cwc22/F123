import express from "express"

const app = express()

app.get("/api/message", (_, res) => {
  return res.json({
    data: "Hello from the server!",
  })
})
app.listen(8080)
