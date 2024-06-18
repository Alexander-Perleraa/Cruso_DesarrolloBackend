const jwt = require (`jsonwebtoken`);
const { secretKey } = require(`../config`);

const authenticateJWT = (req, es, next) => 
    {
        const authHeader = req.headers.authorizacion;

        if(authHeader) 
            {
                const token = authHeader.split(``)[1];

                jwt.verify(token, secretKey, (err, user) => {
                    if(err){
                        return res.sendStatus(403)
                    }
                    req.user = user;
                    next()
                })

            }else
            {
                res.sendStatus(401)
            }
    }

    module.exports= authenticateJWT