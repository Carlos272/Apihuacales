
// set up a mongoose model and pass it using module.exports
 ForkliftSchema = ({
    UBWTag: {
        type: String,
        required: true
       
    },
    InsDateTime: {
        type: Date, 
        default: Date.now()
    },
    Description: {
        type: String,
        required: true
       
    },
    Position_X: {
        type: Number,
        required: true
       
    },
    Position_Y: {
        type: Number,
        required: true
       
    },
    Position_Z: {
        type: Number,
        required: true
       
    },
    Ip: {
        type: Number,
        required: true
       
    }
    

});


module.exports = ForkliftSchema;