// a way we are creating that each error should send these errors status error stack and all this things 
class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors =[],
        stack =""
    ){ 
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}