// Controller for handling GET '/' route
exports.homepage = (req,res,next)=>{
    res.json({message:'homepage'})
}