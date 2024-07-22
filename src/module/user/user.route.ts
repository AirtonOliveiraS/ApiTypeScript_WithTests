import express, { Request, Response } from "express";
import { getAll, save } from './user.model';

const router = express.Router();

router.get('/',async (_:Request,res:Response)=>{
    const data = await getAll();
    res.status(200).json({data});
})
;


router.post('/', async (req:Request, res:Response) => {
    try {
        const data = await save(req.body);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});




export default router;