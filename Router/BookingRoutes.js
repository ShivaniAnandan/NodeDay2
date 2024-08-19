import express from 'express';
import { bookingRoom,listCustomerBookings,listCustomerBookingDetails,getBookingDetails } from '../Controller/BookingController.js';

const router = express.Router();

router.post('/', bookingRoom);
router.get('/', getBookingDetails);
router.get('/customers', listCustomerBookings);
router.get('/customers/:customerName/bookings',listCustomerBookingDetails);




export default router;