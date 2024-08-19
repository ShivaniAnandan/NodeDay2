import express from 'express';
import cors from 'cors';
import roomRoutes from './Router/RoomRoutes.js';
import bookingRoutes from './Router/BookingRoutes.js';

const app = express();

const PORT = 4000;

app.use(cors());

app.use(express.json());

// app.get('/', (req,res)=>{
//     res.status(200).send("working");
// })

app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})