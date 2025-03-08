Ext.define('EmployeeApp.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    fields: ['id', 'name', 'email', 'department'],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/api/employees',
        reader: {
            type: 'json'
        }
    }
});
