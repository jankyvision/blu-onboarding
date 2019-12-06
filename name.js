app.post('/sign_up', function(req, res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var company = req.body.company;
    var email = req.body.email;
    var address1 = req.body.address1;
    var address2 = req.body.address2;

    var zip = req.body.zip;
    var billingaddress1 = req.body.billingaddress1;
    var billingaddress2 = req.body.billingaddress2;
    var billingaddresscity = req.body.billingaddresscity;

    var billingaddresszip = req.body.billingaddresszip;
    var decisionmakerfirstname = req.body.decisionmakerfirstname;
    var decisionmakerlastname = req.body.decisionmakerlastname;
    var decisionmakerjobtitle = req.body.decisionmakerjobtitle;
    var decisionmakerworkphone = req.body.decisionmakerworkphone;
    var decisionmakermobilephone = req.body.decisionmakermobilephone;
    var decisionmakeremail = req.body.decisionmakeremail;
    var usacontactfirstname = req.body.usacontactfirstname;
    var usacontactlastname = req.body.usacontactlastname;
    var usacontactjobtitle = req.body.usacontactjobtitle;
    var usacontactworkphone = req.body.usacontactworkphone;
    var usacontactmobilephone = req.body.usacontactmobilephone;
    var usacontactemail = req.body.usacontactemail;
    var accountingcontactfirstname = req.body.accountingcontactfirstname;
    var accountingcontactlastname = req.body.accountingcontactlastname;
    var accountingcontactjobtitle = req.body.accountingcontactjobtitle;
    var accountingcontactworkphone = req.body.accountingcontactworkphone;
    var accountingcontactmobilephone = req.body.accountingcontactmobilephone;
    var accountingcontactemail = req.body.accountingcontactemail;
    var additionalcontactfirstname = req.body.additionalcontactfirstname;
    var additionalcontactlastname = req.body.additionalcontactlastname;
    var additionalcontactjobtitle = req.body.additionalcontactjobtitle;
    var additionalcontactworkphone = req.body.additionalcontactworkphone;
    var additionalcontactmobilephone = req.body.additionalcontactmobilephone;
    var additionalcontactemail = req.body.additionalcontactemail;


    var commodity = req.body.commodity;
    var forcastedmonthlyvolume = req.body.forcastedmonthlyvolume;
    var oceanimportoriginport = req.body.oceanimportoriginport;
    var oceanimportdestinationport = req.body.oceanimportdestinationport;
    var oceanimportmonthlyshipmentsess2 = req.body.oceanimportmonthlyshipmentsess2;
    var oceanimportforcastedvolume = req.body.oceanimportforcastedvolume;
    var oceanimporttransittimepreference = req.body.oceanimporttransittimepreference;
    var oceanimportspecialroutingrequirements = req.body.oceanimportspecialroutingrequirements;

    var oceanexportoriginport = req.body.oceanexportoriginport;
    var oceanexportdestinationport = req.body.oceanexportdestinationport;
    var oceanexportmonthlyshipments = req.body.oceanexportmonthlyshipments;
    var oceanexportforcastedvolume = req.body.oceanexportforcastedvolume;
    var oceanexportoriginport = req.body.oceanexportoriginport;
    var oceanexportdestinationport = req.body.oceanexportdestinationport;
    var oceanexportmonthlyshipments = req.body.oceanexportmonthlyshipments;
    var oceanexportforcastedvolume = req.body.oceanexportforcastedvolume;
    var oceanexportcarrierpreference = req.body.oceanexportcarrierpreference;
    var oceanexporttransittimepreference = req.body.oceanexporttransittimepreference;
    var oceanexportspecialroutingrequirements = req.body.oceanexportspecialroutingrequirements;

    var chbgovernmentagencies = req.body.chbgovernmentagencies;
    var chbforcastedmonthlyentries = req.body.chbforcastedmonthlyentries;
    var chbspecialrequirements = req.body.chbspecialrequirements;
    var airimportoriginport = req.body.airimportoriginport;
    var airimportdestinationport = req.body.airimportdestinationport;
    var airimportcarrierpreference = req.body.airimportcarrierpreference;

    var airimportforcastedshipments = req.body.airimportforcastedshipments;
    var airimportforcastedsvolume = req.body.airimportforcastedsvolume;
    var airimporttransittimepreference = req.body.airimporttransittimepreference;
    var airimportspecialrequirements = req.body.airimportspecialrequirements;
    var airexportoriginport = req.body.airexportoriginport;
    var airexportdestinationport = req.body.airexportdestinationport;
    var airexportcarrierpreference = req.body.airexportcarrierpreference;
    var airexportforcastedshipments = req.body.airexportforcastedshipments;
    var airexportforcastedsvolume = req.body.airexportforcastedsvolume;
    var airexporttransittimepreference = req.body.airexporttransittimepreference;
    var airexportspecialrequirements = req.body.airexportspecialrequirements;
    var warehouseaddress1 = req.body.warehouseaddress1;
    var warehouseaddress2 = req.body.warehouseaddress2;
    var warehousecity = req.body.warehousecity;

    var warehousezip = req.body.warehousezip;

    var warehouseworkinghours = req.body.warehouseworkinghours;
    var warehouseprefferedtrucker = req.body.warehouseprefferedtrucker;
    var warehousespecialrequirements = req.body.warehousespecialrequirements;
    var isfdocs = req.body.isfdocs;

    var isfnotifyname = req.body.isfnotifyname;
    var isfnotifyemail = req.body.isfnotifyemail;


    




})

var data = {
    "firstname": firstname,
    "lastname": lastname,
    "company": company,
    "email": email,
    "address1": address1,
    "address2": address2,
    // country drop down
    "zip": zip,
    "billingaddress1": billingaddress1,
    "billingaddress2": billingaddress2,
    "billingaddresscity": billingaddresscity,
    // country drop down
    "billingaddresszip": billingaddresszip,
    "decisionmakerfirstname": decisionmakerfirstname,
    "decisionmakerlastname": decisionmakerlastname,
    "decisionmakerjobtitle": decisionmakerjobtitle,
    "decisionmakerworkphone": decisionmakerworkphone,
    "decisionmakermobilephone": decisionmakermobilephone,
    "decisionmakeremail": decisionmakeremail,
    "usacontactfirstname": usacontactfirstname,
    "usacontactlastname": usacontactlastname,
    "usacontactjobtitle": usacontactjobtitle,
    "usacontactworkphone": usacontactworkphone,
    "usacontactmobilephone": usacontactmobilephone,
    "usacontactemail": usacontactemail,
    "accountingcontactfirstname": accountingcontactfirstname,
    "accountingcontactlastname": accountingcontactlastname,
    "accountingcontactjobtitle": accountingcontactjobtitle,
    "accountingcontactworkphone": accountingcontactworkphone,
    "accountingcontactmobilephone": accountingcontactmobilephone,
    "accountingcontactemail": accountingcontactemail,
    "additionalcontactfirstname": additionalcontactfirstname,
    "additionalcontactlastname": additionalcontactlastname,
    "additionalcontactjobtitle": additionalcontactjobtitle,
    "additionalcontactworkphone": additionalcontactworkphone,
    "additionalcontactmobilephone": additionalcontactmobilephone,
    "additionalcontactemail": additionalcontactemail,

    //Page 2: Service Requirements
    "commodity": commodity,
    //incoterms
    "forcastedmonthlyvolume": forcastedmonthlyvolume,
    "oceanimportoriginport": oceanimportoriginport,
    "oceanimportdestinationport": oceanimportdestinationport,
    //FCL or LCL
    "oceanimportmonthlyshipmentsess2": oceanimportmonthlyshipments,
    "oceanimportforcastedvolume": oceanimportforcastedvolume,
    "oceanimporttransittimepreference": oceanimporttransittimepreference,
    "oceanimportspecialroutingrequirements": oceanimportspecialroutingrequirements,
    //port 2,3,4...
    "oceanexportoriginport": oceanexportoriginport,
    "oceanexportdestinationport": oceanexportdestinationport,
    //FCL or LCL
    "oceanexportmonthlyshipments": oceanexportmonthlyshipments,
    "oceanexportforcastedvolume": oceanexportforcastedvolume,
    "oceanexportcarrierpreference": oceanexportcarrierpreference,
    "oceanexporttransittimepreference": oceanexporttransittimepreference,
    "oceanexportspecialroutingrequirements": oceanexportspecialroutingrequirements,
    //imported before
    //tariff database
    //bond type
    "chbgovernmentagencies": chbgovernmentagencies,
    "chbforcastedmonthlyentries": chbforcastedmonthlyentries,
    "chbspecialrequirements": chbspecialrequirements,
    "airimportoriginport": airimportoriginport,
    "airimportdestinationport": airimportdestinationport,
    "airimportcarrierpreference": airimportcarrierpreference,
    "airimportforcastedshipments": airimportforcastedshipments,
    "airimportforcastedsvolume": airimportforcastedsvolume,
    "airimporttransittimepreference": airimporttransittimepreference,
    "airimportspecialrequirements": airimportspecialrequirements,
    "airexportoriginport": airexportoriginport,
    "airexportdestinationport": airexportdestinationport,
    "airexportcarrierpreference": airexportcarrierpreference,
    "airexportforcastedshipments": airexportforcastedshipments,
    "airexportforcastedsvolume": airexportforcastedsvolume,
    "airexporttransittimepreference": airexporttransittimepreference,
    "airexportspecialrequirements": airexportspecialrequirements,
    "warehouseaddress1": warehouseaddress1,
    "warehouseaddress2": warehouseaddress2,
    "warehousecity": warehousecity,
    // warehouse state
    "warehousezip": warehousezip,
    // live unload
    "warehouseworkinghours": warehouseworkinghours,
    "warehouseprefferedtrucker": warehouseprefferedtrucker,
    "warehousespecialrequirements": warehousespecialrequirements,
    "isfdocs": isfdocs,
    // notify of isf filing
    "isfnotifyname": isfnotifyname,
    "isfnotifyemail": isfnotifyemail,
  

}