import mongoose from 'mongoose'

const{ ObjectId } = mongoose.Schema.Types

const CartSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    product: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: ObjectId,
                ref: 'Product'
            }
        }
    ]
})

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)