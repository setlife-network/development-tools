export default {
    hello: () => 'Hello world',
    price: async (_, args, { dataSources }) => {
        return dataSources.coinbase.getPrice(args.currency)
    }
}