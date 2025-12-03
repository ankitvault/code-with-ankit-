// a way we are creating that each error should send these errors status error stack and all this things 
class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors =[],
        statck =""
    ){ 
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(statck){
            this.statck = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}