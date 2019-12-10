app.post('/sign_up', function(req,res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var company = req.body.company;
    var email = req.body.email;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    
    var billingaddress1 = req.body.billingaddress1;
    var billingaddress2 = req.body.billingaddress2;
    var billingaddresscity = req.body.billingaddresscity;
    var billingaddressstate = req.body.billingaddressstate
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
    var incoterms = req.body.incoterms;
    var forcastedmonthlyvolume = req.body.forcastedmonthlyvolume;

    var oceanimportoriginport = req.body.oceanimportoriginport;
    var oceanimportdestinationport = req.body.oceanimportdestinationport;
    var oceanimportcontainersize = req.body.oceanimportcontainersize;
    var oceanimportmonthlyshipments = req.body.oceanimportmonthlyshipments;
    var oceanimportforcastedvolume = req.body.oceanimportforcastedvolume;
    var oceanimportcarrierpreference = req.body.oceanimportcarrierpreference;
    var oceanimporttransittimepreference = req.body.oceanimporttransittimepreference;
    var oceanimportspecialroutingrequirements = req.body.oceanimportspecialroutingrequirements;

    var oceanexportoriginport = req.body.oceanexportoriginport;
    var oceanexportdestinationport = req.body.oceanexportdestinationport;
    var oceanexportcontainersize = req.body.oceanexportcontainersize;
    var oceanexportmonthlyshipments = req.body.oceanexportmonthlyshipments;
    var oceanexportforcastedvolume = req.body.oceanexportforcastedvolume;
    var oceanexportcarrierpreference = req.body.oceanexportcarrierpreference;
    var oceanexporttransittimepreference = req.body.oceanexporttransittimepreference;
    var oceanexportspecialroutingrequirements = req.body.oceanexportspecialroutingrequirements;

    var chbimportedbefore = req.body.chbimportedbefore;
    var chbtariffdatabase = req.body.chbtariffdatabase;
    var chbbondtype = req.body.chbbondtype;
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
    var warehousestate = req.body.warehousestate
    var warehousezip = req.body.warehousezip;
    var warehouseunloaddrop = req.body.warehouseunloaddrop;
    var warehouseworkinghours = req.body.warehouseworkinghours;
    var warehouseprefferedtrucker = req.body.warehouseprefferedtrucker;
    var warehousespecialrequirements = req.body.warehousespecialrequirements;
    
    var isfdocs = req.body.isfdocs;
    var isfnotify = req.body.isfnotify;
    var isfnotifyname = req.body.isfnotifyname;
    var isfnotifyemail = req.body.isfnotifyemail;

    var drayageaddress1 = req.body.drayageaddress1;
    var drayageaddress2 = req.body.drayageaddress2;
    var drayagecity = req.body.drayagecity;
    var drayagestate = req.body.drayagestate
    var drayagezip = req.body.drayagezip;
    var drayageunloaddrop = req.body.drayageunloaddrop;
    var drayageworkinghours = req.body.drayageworkinghours;
    var drayageprefferedtrucker = req.body.drayageprefferedtrucker;
    var drayagespecialrequirements = req.body.drayagespecialrequirements;


var data = {
    "firstname": firstname,
    "lastname": lastname,
    "company": company,
    "email": email,
    "address1": address1,
    "address2": address2,
    "city": city,
    "state": state,
    "zip": zip,
    "billingaddress1": billingaddress1,
    "billingaddress2": billingaddress2,
    "billingaddresscity": billingaddresscity,
    "billingaddressstate": billingaddressstate,
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
    "incoterms": incoterms,
    "forcastedmonthlyvolume": forcastedmonthlyvolume,
    
    "oceanimportoriginport": oceanimportoriginport,
    "oceanimportdestinationport": oceanimportdestinationport,
    "oceanimportcontainersize": oceanimportcontainersize,
    "oceanimportmonthlyshipments": oceanimportmonthlyshipments,
    "oceanimportforcastedvolume": oceanimportforcastedvolume,
    "oceanimportcarrierpreference":oceanimportcarrierpreference,
    "oceanimporttransittimepreference": oceanimporttransittimepreference,
    "oceanimportspecialroutingrequirements": oceanimportspecialroutingrequirements,
    //port 2,3,4...
    "oceanexportoriginport": oceanexportoriginport,
    "oceanexportdestinationport": oceanexportdestinationport,
    "oceanexportcontainersize": oceanexportcontainersize,
    "oceanexportmonthlyshipments": oceanexportmonthlyshipments,
    "oceanexportforcastedvolume": oceanexportforcastedvolume,
    "oceanexportcarrierpreference": oceanexportcarrierpreference,
    "oceanexporttransittimepreference": oceanexporttransittimepreference,
    "oceanexportspecialroutingrequirements": oceanexportspecialroutingrequirements,
    
    "chbimportedbefore": chbimportedbefore,
    "chbtariffdatabase": chbtariffdatabase,
    "chbbondtype": chbbondtype,
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
    "warehousestate":warehousestate,
    "warehousezip": warehousezip,
    "warehouseunloaddrop": warehouseunloaddrop,
    "warehouseworkinghours": warehouseworkinghours,
    "warehouseprefferedtrucker": warehouseprefferedtrucker,
    "warehousespecialrequirements": warehousespecialrequirements,
    
    "isfdocs": isfdocs,
    "isfnotify": isfnotify,
    "isfnotifyname": isfnotifyname,
    "isfnotifyemail": isfnotifyemail,

    "drayageaddress1": drayageaddress1,
    "drayageaddress2": drayageaddress2,
    "drayagecity": drayagecity,
    "drayagestate":drayagestate,
    "drayagezip": drayagezip,
    "drayageunloaddrop": drayageunloaddrop,
    "drayageworkinghours": drayageworkinghours,
    "drayageprefferedtrucker": drayageprefferedtrucker,
    "drayagespecialrequirements": drayagespecialrequirements,
  

}