import express from 'express';
const router = express.Router();

router.get('/getAll', (req, res) => {
    res.json({status: "array"})
})

export default router;