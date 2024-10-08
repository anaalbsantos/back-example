const productResponse = {
    create: {
        201: {
            description: 'Product created',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/product',
                    },
                },
            },
        }
    },
    get: {
        200: {
            description: 'Product information',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/product',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Product not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    update: {
        200: {
            description: 'Product updated',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/product',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Product not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    delete: {
        200: {
            description: 'Product deleted',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/product',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Product not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
};
export default productResponse;
