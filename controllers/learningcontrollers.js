function first(req,res){
    res.json({
        status : "success api home page",
        message: "process executed successfully"
    })
};
function about(req,res){
    res.json({
        status : "success about page",
        message: "process executed successfully"
    })
};

module.exports = {first, about};