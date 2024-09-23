import jwt from "jsonwebtoken";

export default {
    encode : async()=>{
        const token = jwt.sign({})
        return 'token';
    },
    decode : async(token)=>{
        return decode(token);
    }
}