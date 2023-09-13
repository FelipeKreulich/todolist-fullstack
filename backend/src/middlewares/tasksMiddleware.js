const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'The field "title" is required.' });
    }

    if (body.title === '') {
        return response.status(400).json({ message: 'The title cannot be empyt.' });
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined) {
        return response.status(400).json({ message: 'The fild "status" is required' });
    }

    if (body.status === '') {
        return response.status(400).json({ message: 'Status cannot be empyt.' });
    }

    next();
};

const validateIdDelete = (request, response, next) => {
    const { id } = request.params;

    if (id !== Number) {
        return response.status(400).json({message: 'You need a valid "ID".'  });
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
    validateIdDelete,
};