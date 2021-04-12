import { BadRequest } from '../util/errors';


export const validate = async (scheme, payload) => {
    try {
        return await scheme.validate(payload);
    }
    catch (err) {
        throw new BadRequest(err)
    }
}