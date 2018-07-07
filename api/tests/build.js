const fs = require('fs-extra');
const ejs = require('ejs');
const _ = require('lodash');
const path = require('path');

const schema = require('../schema')

const mutations = schema._mutationType._fields
const queries = schema._queryType._fields

// console.log(Object.keys(schema));
// console.log(Object.keys(schema._mutationType));
// console.log(Object.keys(schema._mutationType._fields));
// console.log(Object.keys(schema._mutationType._fields.submitContactForm));

// console.log(mutations)


const testMutations = _.map(mutations, m => {
    console.log('Building tests for ' + m.name)
    console.log('-----------------')
    console.log('Preparing ' + Object.keys(m.args).length + ' arguments')
    console.log('-----------------')

    const mutationArgs = []
    _.map(m.args, (a, i) => {
        console.log(a);
        let testValue = {}
        if (a.type.ofType) {
            console.log(
                'Preparing test for required argument: "' + a.name +
                '" of type ' + a.type.ofType.name
            )
            switch (a.type.ofType.name) {
            case 'String':
                testValue = 'Enter a string to test'; break
            case 'Long':
                testValue = 0; break
            }

            mutationArgs.push({
                name: a.name,
                type: a.type.ofType.name,
                testValue
            })
        } else {
            console.log(
                'No test for optional argument: "' + a.name +
                '" of type ' + a.type.name
            )
        }
    })

    return {
        name: m.name,
        args: mutationArgs
    }
})

console.log(testMutations)
console.log(testMutations[1].args)
var testingTemplate = path.join(process.cwd(), 'api/templates', 'test.ejs');
var testingDestination = path.join(process.cwd(), 'api/tests', 'mutations.js');

fs.readFile(testingTemplate, 'utf8', function(err, data) {
    var test = ejs.render(data, {
        mutations: testMutations
    });

    fs.writeFile(testingDestination, test);
    console.log('Created mutation testing framework');
});