import jwt from "jsonwebtoken";
import models from '../models/matricula/SocioComercialGral.js';

export default {
    encode : async(SOCIO_ID, SOCIO_ALUMNO,EMAIL)=>{
        const token = jwt.sign({
            SOCIO_ID:SOCIO_ID, 
            SOCIO_ALUMNO:SOCIO_ALUMNO,
            EMAIL:EMAIL},
            'LLAVESECRETA_TOKEN',{expiresIn:'1d'});
        return token;
    },

    decode : async(token)=>{
        try 
        {
            const {SOCIO_ID} = await jwt.verify(token,'LLAVESECRETA_TOKEN');
            const user = models.SocioComercialGral.findOne({SOCIO_ID: SOCIO_ID, FECHA_INACTIVACION: null});
            if(user)
            {
                return user;
            }
            return false;
                
        }
        catch(e)
        {
            console.log(e);
        }   
    }
}