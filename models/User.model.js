const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        required:[true, 'O nome é obrigatório'],
        unique: true,
        trim:true
    },
    books:{
        type: [Schema.Types.ObjectId],
        ref: 'Book'
    }
}, {timestamps:true});

module.exports = model('User', userSchema);