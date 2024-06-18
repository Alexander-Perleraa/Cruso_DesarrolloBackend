const jwt = require (`jsonwebtoken`);
const {secretKey} = require (`../config`);

const login = (req, res) => 
{
    const { username, password } = req.body;


    if(username === `admin` && password ===`admin123`)
        {
            const payload =
            {
                username,
                role: `Administrador`,
            }

            const token = jwt.sign(payload, secretKey,{ expiresIn: `1h`})
            res.json({token})
        }else
        {
            res.status(401).json({message: `Credenciales invalidas`})
        }
}

module.exports={login}