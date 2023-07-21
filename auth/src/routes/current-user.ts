import express from "express";
import { currentUser } from '@enterprisesoftware/common'

const router = express.Router();
try{
     console.log('hereeererererererere');
router.get("/api/users/currentuser", currentUser,(req, res) => {
     res.send({currentUser: req.currentUser || null}); 
});
}

catch(err){
    console.log('here**************************');
}
export { router as currentUserRouter };
