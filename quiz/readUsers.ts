import express, { Response } from 'express';
import { UserRequest } from './types';
const router = express.Router();


router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map(function(user) {
        return {id: user.id, username: user.username, email: user.email};
    });
    res.send(usernames);
  });
  
router.get('/usernames/:name', (req: UserRequest, res: Response) => {
    const name = req.params.name;
    let usernames = req.users?.filter(user => user.username == name).map((user) => {
        return { id: user.id, username: user.username, email:user.email };
    });

    if (usernames?.length === 0) {
        res.send({
            error: { message: 'user not found', status: 404 }
        });
    }else{
        res.send(usernames);
    }
});

export default router;