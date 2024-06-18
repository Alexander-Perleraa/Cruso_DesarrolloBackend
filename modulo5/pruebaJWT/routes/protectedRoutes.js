const express= require (`express`)
const authenticateJWT = require (`../middlewares/authenticateJWT`)
const router = express.Router();

router.get(`/protected`, authenticateJWT, (req, res) => {
    res.json({message: `esta es una ruta protegida`, user: req.user})
})

module.exports= router;