type ResponseError = {
  status?: number,
  text?: string,
  details?: any[]
}

const responseError = (error : ResponseError) => {
  return {
    data: null,
    error: {
      status: error.status || 500, // HTTP status
      // name: "", // Strapi error name ('ApplicationError' or 'ValidationError')
      message: error.text || "Server Error", // A human reable error message
      details: error.details || []
    }
  }  
}

export {
  responseError
}