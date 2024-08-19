export const rooms = 
[ 
    {
        id: 1,
        roomName: "Meeting Room 1",
        seatsAvailable: 10,
        amenities: ["AC", "Projector", "WiFi"],
        pricePerHour: 30,
        bookings: []
    },
    {
        id: 2,
        roomName: "Training Room",
        seatsAvailable: 25,
        amenities: ["Whiteboard", "AC", "WiFi"],
        pricePerHour: 70,
        bookings: []
    },
    {
        id: 3,
        roomName: "Conference Hall",
        seatsAvailable: 50,
        amenities: ["Projector", "Sound System", "WiFi", "AC"],
        pricePerHour: 100,
        bookings: []
    },
    {
        id: 4,
        roomName: "Executive Meeting Room",
        seatsAvailable: 15,
        amenities: ["Projector", "Video Conferencing", "AC", "WiFi"],
        pricePerHour: 80,
        bookings: []
    },
    {
        id: 5,
        roomName: "Small Conference Room",
        seatsAvailable: 8,
        amenities: ["Whiteboard", "WiFi", "AC"],
        pricePerHour: 40,
        bookings: []
    }
];
export const bookings = 
[
        {
            id: 1,
            customerName: "John Doe",
            date: "2024-08-20",
            startTime: "10:00",
            endTime: "12:00",
            roomId: 1,
            bookingDate: "2024-08-19T08:10:02.663Z",
            status: "Booked"
        },
        {
            id: 2,
            customerName: "Jane Smith",
            date: "2024-08-21",
            startTime: "14:00",
            endTime: "16:00",
            roomId: 2,
            bookingDate: "2024-08-19T08:11:52.627Z",
            status: "Booked"
        },
        {
            id: 3,
            customerName: "Michael Johnson",
            date: "2024-08-22",
            startTime: "09:00",
            endTime: "11:00",
            roomId: 3,
            bookingDate: "2024-08-19T08:12:24.727Z",
            status: "Booked"
        },
        {
            id: 4,
            customerName: "Emily Davis",
            date: "2024-08-23",
            startTime: "11:00",
            endTime: "13:00",
            roomId: 4,
            bookingDate: "2024-08-19T08:13:03.591Z",
            status: "Booked"
        },
        {
            id: 5,
            customerName: "William Brown",
            date: "2024-08-24",
            startTime: "13:00",
            endTime: "15:00",
            roomId: 5,
            bookingDate: "2024-08-19T08:13:34.943Z",
            status: "Booked"
        }
];

//To add bookings details in rooms array
// Function to merge bookings into the rooms array
export const mergeBookingsIntoRooms = () => {
    rooms.forEach(room => {
        // Filter and attach bookings that match the room's ID
        room.bookings = bookings.filter(booking => booking.roomId === room.id);
    });
};

// Call the function to merge bookings
mergeBookingsIntoRooms();



    