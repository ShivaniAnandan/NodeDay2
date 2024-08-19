import {rooms} from '../data.js';

//To Create Room
export const createRoom = (req, res) => {
    const { roomName, seatsAvailable, amenities, pricePerHour } = req.body;

    const newRoom ={
        id: rooms.length + 1,
        roomName,
        seatsAvailable,
        amenities,
        pricePerHour,
        bookings: [],
    };

    rooms.push(newRoom);
    res.status(201).json({ message: 'Room created successfully', room: newRoom });
};

//To get all room details 
export const getRoomDetails = (req,res) => {
    res.json(rooms);
}

// To list rooms with their booking data
export const listRoomsWithBookingData =  (req, res) => {
    const roomData = rooms.map(room => ({
        roomName: room.roomName,
        bookings: room.bookings.map(booking => ({
            bookedStatus: booking ? 'Booked' : 'Available',
            customerName: booking.customerName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
        })),
    }));
    res.json(roomData);
}


