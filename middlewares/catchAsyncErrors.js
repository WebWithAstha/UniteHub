exports.catchAsyncErrors = (fucn)=>(req,res,next)=>{
    Promise.resolve(fucn(req,res,next)).catch(next);
};