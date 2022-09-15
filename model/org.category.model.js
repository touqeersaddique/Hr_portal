let mongoose=require('mongoose');



const organizationType=new mongoose.Schema({
    organization_category : {
        type:String,
        enum:{ values:[ "Accomodation",
            "Accounting"
            ,"Agriculture",
            "Construction"
            ,"Consulting",
            "Design"
            ,"Digital Marketing"
            ,"E-Commerce"
            ,"Education"
            ,"Entertainment" 
            ,"HealthCare",
            "Office"
            ]
                
                
        },timestamp:true


    },
    organization_id:{
        type:String,
        default:null,
    }
    
}) 

const organization= mongoose.model("Organization_type",organizationType);
module.exports={organization}