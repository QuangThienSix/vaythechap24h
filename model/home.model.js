const db = require('../utils/db');

const TBL_customer = 'customer';

module.exports = {
    loadCustomer: async function() {
        return db.load(`select * from ${TBL_customer}`);
    },
    addCustomer: async function(entity) {
        return db.add(TBL_customer, entity);
    }
}