import express from 'express';
import { connect } from './utils/connectDb.js';
import { postModel } from './models/post.js';

const app = express();

// JSON parser
app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const data = await postModel.find()
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

app.get('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await postModel.findById(id)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

app.post('/api/posts', async (req, res) => {
    try {
        const data = await postModel.create(req.body)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

app.put('/api/posts', async (req, res) => {
    try {
        const { id } = req.body
        const data = await postModel.findByIdAndUpdate(id, req.body)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

app.delete('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await postModel.findByIdAndDelete(id)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})


// Mongoose Connect
connect()

// Server
app.listen(6020, () => {
    console.log('Server is up..')
})