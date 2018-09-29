export default {
    hello: () => 'Hello world',
    price: async (_, args, { dataSources }) => {
        console.log(args)
        return dataSources.coinbase.getPrice(args.currency)
    }
}