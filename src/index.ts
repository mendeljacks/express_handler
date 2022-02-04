import serializeError from './serializeError'

/* Turns promise functions into express middleware */
export const handler = promiseFn => {
    return async (req, res) => {
        try {
            const result = await promiseFn(req, res)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(serializeError(error))
        }
    }
}
