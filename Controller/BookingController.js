import {rooms} from '../data.js';
import {bookings} from '../data.js';

// To book a room
export const bookingRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    
    // console.log("Received roomId:", roomId); // Debugging

    const room = rooms.find(r => r.id === parseInt(roomId));
    if (!room) {
        // console.log("Rooms available:", rooms); // Debugging
        return res.status(404).json({ message: 'Room not found' });
    }

    const newBooking = {
        id: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId: parseInt(roomId),
        bookingDate: new Date(),
        status: 'Booked',
    };

    room.bookings.push(newBooking);
    bookings.push(newBooking);
    res.status(201).json({ message: 'Room booked successfully', booking: newBooking });
};

//To get all booking details
export const getBookingDetails = (req,res) => {
    res.json(bookings);
}


// To list all customer bookings with room details
export const listCustomerBookings =  (req, res) => {
    const customerData = bookings.map(booking => {
        const room = rooms.find(room => room.id === booking.roomId);
        return {
            customerName: booking.customerName,
            roomName: room.roomName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
        };
    });
    res.json(customerData);
}

// To get booking details for a specific customer
export const listCustomerBookingDetails = (req, res) => {
    const { customerName } = req.params;

    const customerBookings = bookings.filter(booking => booking.customerName === customerName);
    const bookingData = customerBookings.map(booking => {
        const room = rooms.find(room => room.id === booking.roomId);
        return {
            customerName: booking.customerName,
            roomName: room.roomName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking.id,
            bookingDate: booking.bookingDate,
            status: booking.status,
        };
    });

    res.json(bookingData);
}
