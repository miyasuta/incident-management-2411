sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/incidents2411/test/integration/FirstJourney',
		'ns/incidents2411/test/integration/pages/IncidentsList',
		'ns/incidents2411/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/incidents2411') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);