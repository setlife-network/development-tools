module.exports = [

    {
        mutationName: 'executeRoute',
        tests: [
            {
                arguments: {
                    requiredArgument: 'Enter a string to test',
                },
                expectedResult: 'test'
            }
        ]
    },

    {
        mutationName: 'submitContactForm',
        tests: [
            {
                arguments: {
                    name: 'Enter a string to test',
                    email: 'Enter a string to test',
                    message: 'Enter a string to test',
                },
                expectedResult: 'success'
            },
            {
                arguments: {
                    name: '',
                    email: 'Enter a string to test',
                    message: 'Enter a string to test',
                },
                expectedResult: 'no name'
            },
            {
                arguments: {
                    name: '',
                    email: '',
                    message: 'Enter a string to test',
                },
                expectedResult: 'no name or email'
            }
        ]
    },

]