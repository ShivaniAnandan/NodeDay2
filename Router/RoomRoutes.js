import express from 'express';
import { createRoom,getRoomDetails,listRoomsWithBookingData} from '../Controller/RoomController.js';

const router = express.Router();

router.post('/', createRoom);
router.get('/', getRoomDetails);
router.get('/list', listRoomsWithBookingData);



export default router;