const mongoose =require("mongoose")



const AnnouncementsSchema= new mongoose.Schema({
title:{
    type:String,
   
},
start:{
    type:Date,
    reaquired:true

},
end:{
    type:Date,
    reaquired:true
}
})



const Announcements= mongoose.model("Announcement",AnnouncementsSchema)

module.exports =Announcements