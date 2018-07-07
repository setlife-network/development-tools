const fs = require('fs-extra');
const ejs = require('ejs');
const _ = require('lodash');
const path = require('path');

const schema = require('../schema')

const mutations = schema._mutationType._fields
const queries = schema._queryType._fields

const mutationsToTest = require('./mutations')

_.reduce(mutationsToTest, (mutationChain, m, i) => {
    const runTest = (test, testNumber) => {
        return new Promise((resolve, reject) => {

            // The mutation's resolve function is tested by simulating the `root` and `args` objects passed to the function when called by GraphQL

            console.log('\n-----------------')
            console.log('Test Results for: ' + test.name + ' #' + testNumber)
            console.log('-----------------')
            console.log('Expected: ' + test.expectedResult)
            mutations[m.mutationName].resolve(
                // root
                {},
                // args
                test.arguments
            )
            .then(result => {
                console.log('Actual Result: ' + result)
                if (result == test.expectedResult) {
                    console.log('PASS')
                } else {
                    throw 'Unexpected Result'
                }
                resolve()
            })
            .catch(err => {
                console.log('FAIL: ' + err)
                resolve()
            })
        })
    }

    const prepareTests = (mutation) => {
        return new Promise((resolve, reject) => {
            mutation.tests.reduce((testChain, test, index) => {
                test.name = m.mutationName
                if (index == mutation.tests.length - 1) {
                    return testChain.then(() => runTest(test, index)).then(resolve)
                } else {
                    return testChain.then(() => runTest(test, index))
                }
            }, Promise.resolve())
        })
    }

    return mutationChain.then(() => prepareTests(m))
}, Promise.resolve())