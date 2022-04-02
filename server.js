const express = require('express')

const app = express();
app.use(express.json())

const auth = require('./routes/api/auth-api')
const freelancers = require('./routes/api/freelancers-api')
const entreprises = require('./routes/api/entreprises-api')
const offres = require('./routes/api/offres-api')
const postulats = require('./routes/api/postulats-api')

app.use('/api/auth',auth)
app.use('/api/freelancers',freelancers)
app.use('/api/entreprises',entreprises)
app.use('/api/offres',offres)
app.use('/api/postulats',postulats)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))