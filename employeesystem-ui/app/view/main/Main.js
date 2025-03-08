Ext.define('EmployeeApp.view.Main', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    items: [
        {
            xtype: 'employeegrid'
        }
    ]
});
