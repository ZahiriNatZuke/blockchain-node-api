function routes(app, db, accounts, contract) {
    app.get('/contacts', async (request, response) => {
        let cache = [];
        const COUNTER = await contract.methods.get().call();

        for (let i = 1; i <= COUNTER; i++) {
            const contact = await contract.methods.contacts(i).call();
            cache = [...cache, contact];
        }

        response.json(cache);
    });
}

module.exports = routes
