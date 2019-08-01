const jwt = require('jsonwebtoken');


//===============
//verificar token
//===============
let verificaToken = (req, res, next) => {
    let token = req.get('token');
    console.log(token);

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no valido'
                }
            })
        }
        req.usuario = decoded.usuario;
        next();


    });



};
//===============
//verificar si es ADMIN
//===============
let verificaADMIN = (req, res, next) => {

    let usuario = req.usuario;


    if (usuario.role === 'ADMIN_ROLE') {
        console.log("entrro");

        next();
    } else {
        res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })

    }



}

module.exports = {
    verificaToken,
    verificaADMIN
}