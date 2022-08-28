 
//create express error handler

const errorHandler = ( error , req , res , next ) => {


    const errorStatus = error.status || 5050;
    const errorMessage = error.status || 'Unknown errors';

    return res.status(errorStatus).json({

       message : errorMessage,
       status  : errorStatus,
       stack   : error.stack
    } );

}

export default errorHandler;