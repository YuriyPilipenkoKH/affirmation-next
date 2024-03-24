import mongoose from 'mongoose';

const topikSchema = new mongoose.Schema({
   userId: {
        type: String,
        min: 0,

    },
    title: {
        type: String,
        minlength: 4,
        required: true
    },
    content: {
        type: String,
        minlength: 4,
        required: true
    },
    createdAt: {
        type: Date
    },

});

// Mongoose model for Task
const Topik = mongoose.models.topik || mongoose.model('topik', topikSchema);

export default Topik;

