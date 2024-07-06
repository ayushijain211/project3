var http=require('http')
http.createServer(
    function(req,res){
            res.write("Ayushi")
           res.end()
        }
    ).listen(8085)