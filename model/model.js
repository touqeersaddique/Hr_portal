let mongoose=require('mongoose');



const organizationtype=new mongoose.Schema({
    organization_category : {
        type:String,
        enum:{ values:[ "Factory","School","Office"]
                
                
        },timestamp:true


    }
    
}) 

const organization= mongoose.model("Organization_type",organizationtype);
module.exports={organization}