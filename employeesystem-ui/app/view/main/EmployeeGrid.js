Ext.define('EmployeeApp.view.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeegrid',
    
    title: 'Employee List',
    store: {
        type: 'employeestore'  // Using the store we defined earlier
    },
    
    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Email', dataIndex: 'email', flex: 2 },
        { text: 'Department', dataIndex: 'department', flex: 2 }
    ]
});
