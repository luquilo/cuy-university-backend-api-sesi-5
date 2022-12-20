const response = (statusCode,data,message,res) => {
    res.json(statusCode, [
        {
            data,
            message,
            metadata: {
                prev: '',
                next: '',
                current: ''
            }
        }
    ])
}

export default response