import jwt from "jsonwebtoken"

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({
                success: false, message: "Not authorized login again"

            })
        } else {
            const dec_token = jwt.verify(token, process.env.JWT_SECRET)
            if (dec_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
                return res.json({
                    success: false, message: "Not authorized login again"
                })
            } else {
                next()
            }

        }
    } catch (error) {
        console.log(error);
        
        return res.json({
            success: false, message: error.message
        })

    }

}
export default adminAuth