Ext.define('EmployeeApp.view.main.EmployeeForm', {
    extend: 'Ext.window.Window',
    xtype: 'employee-form',

    title: 'Add Employee',
    modal: true,
    width: 400,

    items: [{
        xtype: 'form',
        bodyPadding: 10,
        items: [
            { xtype: 'textfield', name: 'name', fieldLabel: 'Name' },
            { xtype: 'textfield', name: 'email', fieldLabel: 'Email' },
            { xtype: 'textfield', name: 'department', fieldLabel: 'Department' }
        ],
        buttons: [{
            text: 'Save',
            handler: function(btn) {
                var form = btn.up('form').getForm();
                var values = form.getValues();
                Ext.getStore('employees').add(values);
                btn.up('window').close();
            }
        }]
    }]
});
