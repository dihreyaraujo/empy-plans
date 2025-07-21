import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { planRoutes } from './routes/plan.routes'
import { purchaseRoutes } from './routes/purchase.routes'
import { userRoutes } from './routes/user.routes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/plans', planRoutes)
app.use('/purchase', purchaseRoutes)
app.use('/users', userRoutes)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`🔥 Server is running on port ${port}`))
