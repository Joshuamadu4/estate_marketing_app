import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    avatar:{
        type: String, 
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fvssmn.org%2Fwp-content%2Fuploads%2F2018%2F12%2F146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png%3Ffit%3D860%252C681%26ssl%3D1&f=1&nofb=1&ipt=79f2bfc98d16685d6c45d25d367f8886dccf327a028f139e8b044046bc30adbd&ipo=images"
        
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;


