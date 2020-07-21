import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import Cart from '../../models/Cart'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

connectDb()

export default async (req, res) => {
    const { name, email, password } = req.body
    try {

        if (!isLength(name, { min: 3, max: 20 })) {
            return res.status(422).send('Name Must Be 3-20 Characters')
        } else if (!isLength(password, { min:6 })) {
            return res.status(422).send('Password Must Be At Least 6 Characters')
        } else if (!isEmail(email)) {
            return res.status(422).send('Please Provide Valid Email')
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User Already Exists With Email ${email}`)
        }

        const hash = await bcrypt.hash(password, 10)

        const newUser = await new User({
            name,
            email,
            password: hash
        }).save()
        console.log({newUser})
        await new Cart({ user: newUser._id }).save()
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.status(201).json(token)
    } catch(error) {
        console.error(error)
        res.status(500).send('Error. Please Try Again Later')
    }
}