// models/taskModel.js

import mongoose, { Schema } from "mongoose";

// // {
//     "_id": "6892142d3dd6ed076c12g5c5g",
//     "title": "new title",
//     "description": "updated",
//     "completed": true,
//     "__v": 0
//     }

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
        description: String,
        completed: {
            type: Boolean,
            default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

export { Task };
