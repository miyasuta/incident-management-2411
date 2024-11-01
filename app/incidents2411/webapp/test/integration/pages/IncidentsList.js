sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ns.incidents2411',
            componentId: 'IncidentsList',
            contextPath: '/Incidents'
        },
        CustomPageDefinitions
    );
});