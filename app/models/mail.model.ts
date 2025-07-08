import {Schema, model, models} from 'mongoose'

const mailSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, {timestamps: true})

const MailModel = models.Mail || model('Mail', mailSchema)
export default MailModel
