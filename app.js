var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jankyvision:goBlue5647!@cluster0-kkp26.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true });
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("Welcome to the MATRIX!"); 
}) 

var app=express() 
   
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
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
	
	var oceanimport = req.body.oceanimport;
	var airimport = req.body.airimport;
	var isffiling = req.body.isffiling;
	var trucking = req.body.trucking;
	var oceanexport = req.body.oceanexport;
	var airexport = req.body.airexport;
	var chb = req.body.chb;
	var cargoinsurance = req.body.cargoinsurance;
	var warehousing = req.body.warehousing;
	var drayage = req.body.drayage;
	var transload = req.body.transload;
	var pom = req.body.pom;
	var otherservice = req.body.otherservice;
	
    var oceanimportoriginport = req.body.oceanimportoriginport;
    var oceanimportdestinationport = req.body.oceanimportdestinationport;
    var oceanimportcontainersize = req.body.oceanimportcontainersize;
    var oceanimportincoterms = req.body.oceanimportincoterms;
    var oceanimportmonthlyshipments = req.body.oceanimportmonthlyshipments;
    var oceanimportforecastedvolume = req.body.oceanimportforecastedvolume;
    var oceanimportcarrierpreference = req.body.oceanimportcarrierpreference;
    var oceanimporttransittimepreference = req.body.oceanimporttransittimepreference;
    var oceanimportcommodity = req.body.oceanimportcommodity;
    var oceanimportspecialroutingrequirements = req.body.oceanimportspecialroutingrequirements;

    var oceanimportoriginport2 = req.body.oceanimportoriginport2;
    var oceanimportdestinationport2 = req.body.oceanimportdestinationport2;
    var oceanimportcontainersize2 = req.body.oceanimportcontainersize2;
    var oceanimportincoterms2 = req.body.oceanimportincoterms2;
    var oceanimportmonthlyshipments2 = req.body.oceanimportmonthlyshipments2;
    var oceanimportforecastedvolume2 = req.body.oceanimportforecastedvolume2;
    var oceanimportcarrierpreference2 = req.body.oceanimportcarrierpreference2;
    var oceanimporttransittimepreference2 = req.body.oceanimporttransittimepreference2;
    var oceanimportcommodity2 = req.body.oceanimportcommodity2;
    var oceanimportspecialroutingrequirements2 = req.body.oceanimportspecialroutingrequirements2;

    var oceanimportoriginport3 = req.body.oceanimportoriginport3;
    var oceanimportdestinationport3 = req.body.oceanimportdestinationport3;
    var oceanimportcontainersize3 = req.body.oceanimportcontainersize3;
    var oceanimportincoterms3 = req.body.oceanimportincoterms3;
    var oceanimportmonthlyshipments3 = req.body.oceanimportmonthlyshipments3;
    var oceanimportforecastedvolume3 = req.body.oceanimportforecastedvolume3;
    var oceanimportcarrierpreference3 = req.body.oceanimportcarrierpreference3;
    var oceanimporttransittimepreference3 = req.body.oceanimporttransittimepreference3;
    var oceanimportcommodity3 = req.body.oceanimportcommodity3;
    var oceanimportspecialroutingrequirements3 = req.body.oceanimportspecialroutingrequirements3;

    var oceanimportoriginport4 = req.body.oceanimportoriginport4;
    var oceanimportdestinationport4 = req.body.oceanimportdestinationport4;
    var oceanimportcontainersize4 = req.body.oceanimportcontainersize4;
    var oceanimportincoterms4 = req.body.oceanimportincoterms4;
    var oceanimportmonthlyshipments4 = req.body.oceanimportmonthlyshipments4;
    var oceanimportforecastedvolume4 = req.body.oceanimportforecastedvolume4;
    var oceanimportcarrierpreference4 = req.body.oceanimportcarrierpreference4;
    var oceanimporttransittimepreference4 = req.body.oceanimporttransittimepreference4;
    var oceanimportcommodity4 = req.body.oceanimportcommodity4;
    var oceanimportspecialroutingrequirements4 = req.body.oceanimportspecialroutingrequirements4;

    var oceanimportoriginport5 = req.body.oceanimportoriginport5;
    var oceanimportdestinationport5 = req.body.oceanimportdestinationport5;
    var oceanimportcontainersize5 = req.body.oceanimportcontainersize5;
    var oceanimportincoterms5 = req.body.oceanimportincoterms5;
    var oceanimportmonthlyshipments5 = req.body.oceanimportmonthlyshipments5;
    var oceanimportforecastedvolume5 = req.body.oceanimportforecastedvolume5;
    var oceanimportcarrierpreference5 = req.body.oceanimportcarrierpreference5;
    var oceanimporttransittimepreference5 = req.body.oceanimporttransittimepreference5;
    var oceanimportcommodity5 = req.body.oceanimportcommodity5;
    var oceanimportspecialroutingrequirements5 = req.body.oceanimportspecialroutingrequirements5;

    var oceanimportoriginport6 = req.body.oceanimportoriginport6;
    var oceanimportdestinationport6 = req.body.oceanimportdestinationport6;
    var oceanimportcontainersize6 = req.body.oceanimportcontainersize6;
    var oceanimportincoterms6 = req.body.oceanimportincoterms6;
    var oceanimportmonthlyshipments6 = req.body.oceanimportmonthlyshipments6;
    var oceanimportforecastedvolume6 = req.body.oceanimportforecastedvolume6;
    var oceanimportcarrierpreference6 = req.body.oceanimportcarrierpreference6;
    var oceanimporttransittimepreference6 = req.body.oceanimporttransittimepreference6;
    var oceanimportcommodity6 = req.body.oceanimportcommodity6;
    var oceanimportspecialroutingrequirements6 = req.body.oceanimportspecialroutingrequirements6;

    var oceanimportoriginport7 = req.body.oceanimportoriginport7;
    var oceanimportdestinationport7 = req.body.oceanimportdestinationport7;
    var oceanimportcontainersize7 = req.body.oceanimportcontainersize7;
    var oceanimportincoterms7 = req.body.oceanimportincoterms7;
    var oceanimportmonthlyshipments7 = req.body.oceanimportmonthlyshipments7;
    var oceanimportforecastedvolume7 = req.body.oceanimportforecastedvolume7;
    var oceanimportcarrierpreference7 = req.body.oceanimportcarrierpreference7;
    var oceanimporttransittimepreference7 = req.body.oceanimporttransittimepreference7;
    var oceanimportcommodity7 = req.body.oceanimportcommodity7;
    var oceanimportspecialroutingrequirements7 = req.body.oceanimportspecialroutingrequirements7;

    var oceanimportoriginport8 = req.body.oceanimportoriginport8;
    var oceanimportdestinationport8 = req.body.oceanimportdestinationport8;
    var oceanimportcontainersize8 = req.body.oceanimportcontainersize8;
    var oceanimportincoterms8 = req.body.oceanimportincoterms8;
    var oceanimportmonthlyshipments8 = req.body.oceanimportmonthlyshipments8;
    var oceanimportforecastedvolume8 = req.body.oceanimportforecastedvolume8;
    var oceanimportcarrierpreference8 = req.body.oceanimportcarrierpreference8;
    var oceanimporttransittimepreference8 = req.body.oceanimporttransittimepreference8;
    var oceanimportcommodity8 = req.body.oceanimportcommodity8;
    var oceanimportspecialroutingrequirements8 = req.body.oceanimportspecialroutingrequirements8;

    var oceanimportoriginport9 = req.body.oceanimportoriginport9;
    var oceanimportdestinationport9 = req.body.oceanimportdestinationport9;
    var oceanimportcontainersize9 = req.body.oceanimportcontainersize9;
    var oceanimportincoterms9 = req.body.oceanimportincoterms9;
    var oceanimportmonthlyshipments9 = req.body.oceanimportmonthlyshipments9;
    var oceanimportforecastedvolume9 = req.body.oceanimportforecastedvolume9;
    var oceanimportcarrierpreference9 = req.body.oceanimportcarrierpreference9;
    var oceanimporttransittimepreference9 = req.body.oceanimporttransittimepreference9;
    var oceanimportcommodity9 = req.body.oceanimportcommodity9;
    var oceanimportspecialroutingrequirements9 = req.body.oceanimportspecialroutingrequirements9;

    var oceanimportoriginport10 = req.body.oceanimportoriginport10;
    var oceanimportdestinationport10 = req.body.oceanimportdestinationport10;
    var oceanimportcontainersize10 = req.body.oceanimportcontainersize10;
    var oceanimportincoterms10 = req.body.oceanimportincoterms10;
    var oceanimportmonthlyshipments10 = req.body.oceanimportmonthlyshipments10;
    var oceanimportforecastedvolume10 = req.body.oceanimportforecastedvolume10;
    var oceanimportcarrierpreference10 = req.body.oceanimportcarrierpreference10;
    var oceanimporttransittimepreference10 = req.body.oceanimporttransittimepreference10;
    var oceanimportcommodity10 = req.body.oceanimportcommodity10;
    var oceanimportspecialroutingrequirements10 = req.body.oceanimportspecialroutingrequirements10;

    var oceanexportoriginport = req.body.oceanexportoriginport;
    var oceanexportdestinationport = req.body.oceanexportdestinationport;
    var oceanexportcontainersize = req.body.oceanexportcontainersize;
    var oceanexportincoterms = req.body.oceanexportincoterms;
    var oceanexportmonthlyshipments = req.body.oceanexportmonthlyshipments;
    var oceanexportforecastedvolume = req.body.oceanexportforecastedvolume;
    var oceanexportcarrierpreference = req.body.oceanexportcarrierpreference;
    var oceanexporttransittimepreference = req.body.oceanexporttransittimepreference;
    var oceanexportcommodity = req.body.oceanexportcommodity;
    var oceanexportspecialroutingrequirements = req.body.oceanexportspecialroutingrequirements;

    var oceanexportoriginport2 = req.body.oceanexportoriginport2;
    var oceanexportdestinationport2 = req.body.oceanexportdestinationport2;
    var oceanexportcontainersize2 = req.body.oceanexportcontainersize2;
    var oceanexportincoterms2 = req.body.oceanexportincoterms2;
    var oceanexportmonthlyshipments2 = req.body.oceanexportmonthlyshipments2;
    var oceanexportforecastedvolume2 = req.body.oceanexportforecastedvolume2;
    var oceanexportcarrierpreference2 = req.body.oceanexportcarrierpreference2;
    var oceanexporttransittimepreference2 = req.body.oceanexporttransittimepreference2;
    var oceanexportcommodity2 = req.body.oceanexportcommodity2;
    var oceanexportspecialroutingrequirements2 = req.body.oceanexportspecialroutingrequirements2;

    var oceanexportoriginport3 = req.body.oceanexportoriginport3;
    var oceanexportdestinationport3 = req.body.oceanexportdestinationport3;
    var oceanexportcontainersize3 = req.body.oceanexportcontainersize3;
    var oceanexportincoterms3 = req.body.oceanexportincoterms3;
    var oceanexportmonthlyshipments3 = req.body.oceanexportmonthlyshipments3;
    var oceanexportforecastedvolume3 = req.body.oceanexportforecastedvolume3;
    var oceanexportcarrierpreference3 = req.body.oceanexportcarrierpreference3;
    var oceanexporttransittimepreference3 = req.body.oceanexporttransittimepreference3;
    var oceanexportcommodity3 = req.body.oceanexportcommodity3;
    var oceanexportspecialroutingrequirements3 = req.body.oceanexportspecialroutingrequirements3;

    var oceanexportoriginport4 = req.body.oceanexportoriginport4;
    var oceanexportdestinationport4 = req.body.oceanexportdestinationport4;
    var oceanexportcontainersize4 = req.body.oceanexportcontainersize4;
    var oceanexportincoterms4 = req.body.oceanexportincoterms4;
    var oceanexportmonthlyshipments4 = req.body.oceanexportmonthlyshipments4;
    var oceanexportforecastedvolume4 = req.body.oceanexportforecastedvolume4;
    var oceanexportcarrierpreference4 = req.body.oceanexportcarrierpreference4;
    var oceanexporttransittimepreference4 = req.body.oceanexporttransittimepreference4;
    var oceanexportcommodity4 = req.body.oceanexportcommodity4;
    var oceanexportspecialroutingrequirements4 = req.body.oceanexportspecialroutingrequirements4;

    var oceanexportoriginport5 = req.body.oceanexportoriginport5;
    var oceanexportdestinationport5 = req.body.oceanexportdestinationport5;
    var oceanexportcontainersize5 = req.body.oceanexportcontainersize5;
    var oceanexportincoterms5 = req.body.oceanexportincoterms5;
    var oceanexportmonthlyshipments5 = req.body.oceanexportmonthlyshipments5;
    var oceanexportforecastedvolume5 = req.body.oceanexportforecastedvolume5;
    var oceanexportcarrierpreference5 = req.body.oceanexportcarrierpreference5;
    var oceanexporttransittimepreference5 = req.body.oceanexporttransittimepreference5;
    var oceanexportcommodity5 = req.body.oceanexportcommodity5;
    var oceanexportspecialroutingrequirements5 = req.body.oceanexportspecialroutingrequirements5;

    var oceanexportoriginport6 = req.body.oceanexportoriginport6;
    var oceanexportdestinationport6 = req.body.oceanexportdestinationport6;
    var oceanexportcontainersize6 = req.body.oceanexportcontainersize6;
    var oceanexportincoterms6 = req.body.oceanexportincoterms6;
    var oceanexportmonthlyshipments6 = req.body.oceanexportmonthlyshipments6;
    var oceanexportforecastedvolume6 = req.body.oceanexportforecastedvolume6;
    var oceanexportcarrierpreference6 = req.body.oceanexportcarrierpreference6;
    var oceanexporttransittimepreference6 = req.body.oceanexporttransittimepreference6;
    var oceanexportcommodity6 = req.body.oceanexportcommodity6;
    var oceanexportspecialroutingrequirements6 = req.body.oceanexportspecialroutingrequirements6;

    var oceanexportoriginport7 = req.body.oceanexportoriginport7;
    var oceanexportdestinationport7 = req.body.oceanexportdestinationport7;
    var oceanexportcontainersize7 = req.body.oceanexportcontainersize7;
    var oceanexportincoterms7 = req.body.oceanexportincoterms7;
    var oceanexportmonthlyshipments7 = req.body.oceanexportmonthlyshipments7;
    var oceanexportforecastedvolume7 = req.body.oceanexportforecastedvolume7;
    var oceanexportcarrierpreference7 = req.body.oceanexportcarrierpreference7;
    var oceanexporttransittimepreference7 = req.body.oceanexporttransittimepreference7;
    var oceanexportcommodity7 = req.body.oceanexportcommodity7;
    var oceanexportspecialroutingrequirements7 = req.body.oceanexportspecialroutingrequirements7;

    var oceanexportoriginport8 = req.body.oceanexportoriginport8;
    var oceanexportdestinationport8 = req.body.oceanexportdestinationport8;
    var oceanexportcontainersize8 = req.body.oceanexportcontainersize8;
    var oceanexportincoterms8 = req.body.oceanexportincoterms8;
    var oceanexportmonthlyshipments8 = req.body.oceanexportmonthlyshipments8;
    var oceanexportforecastedvolume8 = req.body.oceanexportforecastedvolume8;
    var oceanexportcarrierpreference8 = req.body.oceanexportcarrierpreference8;
    var oceanexporttransittimepreference8 = req.body.oceanexporttransittimepreference8;
    var oceanexportcommodity8 = req.body.oceanexportcommodity8;
    var oceanexportspecialroutingrequirements8 = req.body.oceanexportspecialroutingrequirements8;

    var oceanexportoriginport9 = req.body.oceanexportoriginport9;
    var oceanexportdestinationport9 = req.body.oceanexportdestinationport9;
    var oceanexportcontainersize9 = req.body.oceanexportcontainersize9;
    var oceanexportincoterms9 = req.body.oceanexportincoterms9;
    var oceanexportmonthlyshipments9 = req.body.oceanexportmonthlyshipments9;
    var oceanexportforecastedvolume9 = req.body.oceanexportforecastedvolume9;
    var oceanexportcarrierpreference9 = req.body.oceanexportcarrierpreference9;
    var oceanexporttransittimepreference9 = req.body.oceanexporttransittimepreference9;
    var oceanexportcommodity9 = req.body.oceanexportcommodity9;
    var oceanexportspecialroutingrequirements9 = req.body.oceanexportspecialroutingrequirements9;

    var oceanexportoriginport10 = req.body.oceanexportoriginport10;
    var oceanexportdestinationport10 = req.body.oceanexportdestinationport10;
    var oceanexportcontainersize10 = req.body.oceanexportcontainersize10;
    var oceanexportincoterms10 = req.body.oceanexportincoterms10;
    var oceanexportmonthlyshipments10 = req.body.oceanexportmonthlyshipments10;
    var oceanexportforecastedvolume10 = req.body.oceanexportforecastedvolume10;
    var oceanexportcarrierpreference10 = req.body.oceanexportcarrierpreference10;
    var oceanexporttransittimepreference10 = req.body.oceanexporttransittimepreference10;
    var oceanexportcommodity10 = req.body.oceanexportcommodity10;
    var oceanexportspecialroutingrequirements10 = req.body.oceanexportspecialroutingrequirements10;

    var chbimportedbefore = req.body.chbimportedbefore;
    var chbtariffdatabase = req.body.chbtariffdatabase;
    var chbbondtype = req.body.chbbondtype;
    var chbgovernmentagencies = req.body.chbgovernmentagencies;
    var chbforecastedmonthlyentries = req.body.chbforecastedmonthlyentries;
    var chbspecialrequirements = req.body.chbspecialrequirements;
   
    var airimportoriginport = req.body.airimportoriginport;
    var airimportdestinationport = req.body.airimportdestinationport;
    var airimportincoterms = req.body.airimportincoterms;
    var airimportforecastedshipments = req.body.airimportforecastedshipments;
    var airimportforecastedsvolume = req.body.airimportforecastedsvolume;
    var airimporttransittimepreference = req.body.airimporttransittimepreference;
    var airimportcommodity = req.body.airimportcommodity;
    var airimportspecialrequirements = req.body.airimportspecialrequirements;

    var airimportoriginport2 = req.body.airimportoriginport2;
    var airimportdestinationport2 = req.body.airimportdestinationport2;
    var airimportincoterms2 = req.body.airimportincoterms2;
    var airimportforecastedshipments2 = req.body.airimportforecastedshipments2;
    var airimportforecastedsvolume2 = req.body.airimportforecastedsvolume2;
    var airimporttransittimepreference2 = req.body.airimporttransittimepreference2;
    var airimportcommodity2 = req.body.airimportcommodity2;
    var airimportspecialrequirements2 = req.body.airimportspecialrequirements2;

    var airimportoriginport3 = req.body.airimportoriginport3;
    var airimportdestinationport3 = req.body.airimportdestinationport3;
    var airimportincoterms3 = req.body.airimportincoterms3;
    var airimportforecastedshipments3 = req.body.airimportforecastedshipments3;
    var airimportforecastedsvolume3 = req.body.airimportforecastedsvolume3;
    var airimporttransittimepreference3 = req.body.airimporttransittimepreference3;
    var airimportcommodity3 = req.body.airimportcommodity3;
    var airimportspecialrequirements3 = req.body.airimportspecialrequirements3;

    var airimportoriginport4 = req.body.airimportoriginport4;
    var airimportdestinationport4 = req.body.airimportdestinationport4;
    var airimportincoterms4 = req.body.airimportincoterms4;
    var airimportforecastedshipments4 = req.body.airimportforecastedshipments4;
    var airimportforecastedsvolume4 = req.body.airimportforecastedsvolume4;
    var airimporttransittimepreference4 = req.body.airimporttransittimepreference4;
    var airimportcommodity4 = req.body.airimportcommodity4;
    var airimportspecialrequirements4 = req.body.airimportspecialrequirements4;

    var airimportoriginport5 = req.body.airimportoriginport5;
    var airimportdestinationport5 = req.body.airimportdestinationport5;
    var airimportincoterms5 = req.body.airimportincoterms5;
    var airimportforecastedshipments5 = req.body.airimportforecastedshipments5;
    var airimportforecastedsvolume5 = req.body.airimportforecastedsvolume5;
    var airimporttransittimepreference5 = req.body.airimporttransittimepreference5;
    var airimportcommodity5 = req.body.airimportcommodity5;
    var airimportspecialrequirements5 = req.body.airimportspecialrequirements5;

    var airimportoriginport6 = req.body.airimportoriginport7;
    var airimportdestinationport6 = req.body.airimportdestinationport7;
    var airimportincoterms6 = req.body.airimportincoterms7;
    var airimportforecastedshipments6 = req.body.airimportforecastedshipments7;
    var airimportforecastedsvolume6 = req.body.airimportforecastedsvolume7;
    var airimporttransittimepreference6 = req.body.airimporttransittimepreference7;
    var airimportcommodity6 = req.body.airimportcommodity7;
    var airimportspecialrequirements6 = req.body.airimportspecialrequirements7;

    var airimportoriginport8 = req.body.airimportoriginport8;
    var airimportdestinationport8 = req.body.airimportdestinationport8;
    var airimportincoterms8 = req.body.airimportincoterms8;
    var airimportforecastedshipments8 = req.body.airimportforecastedshipments8;
    var airimportforecastedsvolume8 = req.body.airimportforecastedsvolume8;
    var airimporttransittimepreference8 = req.body.airimporttransittimepreference8;
    var airimportcommodity8 = req.body.airimportcommodity8;
    var airimportspecialrequirements8 = req.body.airimportspecialrequirements8;

    var airimportoriginport9 = req.body.airimportoriginport9;
    var airimportdestinationport9 = req.body.airimportdestinationport9;
    var airimportincoterms9 = req.body.airimportincoterms9;
    var airimportforecastedshipments9 = req.body.airimportforecastedshipments9;
    var airimportforecastedsvolume9 = req.body.airimportforecastedsvolume9;
    var airimporttransittimepreference9 = req.body.airimporttransittimepreference9;
    var airimportcommodity9 = req.body.airimportcommodity9;
    var airimportspecialrequirements9 = req.body.airimportspecialrequirements9;

    var airimportoriginport10 = req.body.airimportoriginport10;
    var airimportdestinationport10 = req.body.airimportdestinationport10;
    var airimportincoterms10 = req.body.airimportincoterms10;
    var airimportforecastedshipments10 = req.body.airimportforecastedshipments10;
    var airimportforecastedsvolume10 = req.body.airimportforecastedsvolume10;
    var airimporttransittimepreference10 = req.body.airimporttransittimepreference10;
    var airimportcommodity10 = req.body.airimportcommodity10;
    var airimportspecialrequirements10 = req.body.airimportspecialrequirements10;
   
    var airexportoriginport = req.body.airexportoriginport;
    var airexportdestinationport = req.body.airexportdestinationport;
    var airexportincoterms = req.body.airexportincoterms;
    var airexportforecastedshipments = req.body.airexportforecastedshipments;
    var airexportforecastedsvolume = req.body.airexportforecastedsvolume;
    var airexporttransittimepreference = req.body.airexporttransittimepreference;
    var airexportcommodity = req.body.airexportcommodity;
    var airexportspecialrequirements = req.body.airexportspecialrequirements;

    var airexportoriginport2 = req.body.airexportoriginport2;
    var airexportdestinationport2 = req.body.airexportdestinationport2;
    var airexportincoterms2 = req.body.airexportincoterms2;
    var airexportforecastedshipments2 = req.body.airexportforecastedshipments2;
    var airexportforecastedsvolume2 = req.body.airexportforecastedsvolume2;
    var airexporttransittimepreference2 = req.body.airexporttransittimepreference2;
    var airexportcommodity2 = req.body.airexportcommodity2;
    var airexportspecialrequirements2 = req.body.airexportspecialrequirements2;

    var airexportoriginport3 = req.body.airexportoriginport3;
    var airexportdestinationport3 = req.body.airexportdestinationport3;
    var airexportincoterms3 = req.body.airexportincoterms3;
    var airexportforecastedshipments3 = req.body.airexportforecastedshipments3;
    var airexportforecastedsvolume3 = req.body.airexportforecastedsvolume3;
    var airexporttransittimepreference3 = req.body.airexporttransittimepreference3;
    var airexportcommodity3 = req.body.airexportcommodity3;
    var airexportspecialrequirements3 = req.body.airexportspecialrequirements3;

    var airexportoriginport4 = req.body.airexportoriginport4;
    var airexportdestinationport4 = req.body.airexportdestinationport4;
    var airexportincoterms4 = req.body.airexportincoterms4;
    var airexportforecastedshipments4 = req.body.airexportforecastedshipments4;
    var airexportforecastedsvolume4 = req.body.airexportforecastedsvolume4;
    var airexporttransittimepreference4 = req.body.airexporttransittimepreference4;
    var airexportcommodity4 = req.body.airexportcommodity4;
    var airexportspecialrequirements4 = req.body.airexportspecialrequirements4;

    var airexportoriginport5 = req.body.airexportoriginport5;
    var airexportdestinationport5 = req.body.airexportdestinationport5;
    var airexportincoterms5 = req.body.airexportincoterms5;
    var airexportforecastedshipments5 = req.body.airexportforecastedshipments5;
    var airexportforecastedsvolume5 = req.body.airexportforecastedsvolume5;
    var airexporttransittimepreference5 = req.body.airexporttransittimepreference5;
    var airexportcommodity5 = req.body.airexportcommodity5;
    var airexportspecialrequirements5 = req.body.airexportspecialrequirements5;

    var airexportoriginport6 = req.body.airexportoriginport6;
    var airexportdestinationport6 = req.body.airexportdestinationport6;
    var airexportincoterms6 = req.body.airexportincoterms6;
    var airexportforecastedshipments6 = req.body.airexportforecastedshipments6;
    var airexportforecastedsvolume6 = req.body.airexportforecastedsvolume6;
    var airexporttransittimepreference6 = req.body.airexporttransittimepreference6;
    var airexportcommodity6 = req.body.airexportcommodity6;
    var airexportspecialrequirements6 = req.body.airexportspecialrequirements6;

    var airexportoriginport7 = req.body.airexportoriginport7;
    var airexportdestinationport7 = req.body.airexportdestinationport7;
    var airexportincoterms7 = req.body.airexportincoterms7;
    var airexportforecastedshipments7 = req.body.airexportforecastedshipments7;
    var airexportforecastedsvolume7 = req.body.airexportforecastedsvolume7;
    var airexporttransittimepreference7 = req.body.airexporttransittimepreference7;
    var airexportcommodity7 = req.body.airexportcommodity7;
    var airexportspecialrequirements7 = req.body.airexportspecialrequirements7;

    var airexportoriginport8 = req.body.airexportoriginport8;
    var airexportdestinationport8 = req.body.airexportdestinationport8;
    var airexportincoterms8 = req.body.airexportincoterms8;
    var airexportforecastedshipments8 = req.body.airexportforecastedshipments8;
    var airexportforecastedsvolume8 = req.body.airexportforecastedsvolume8;
    var airexporttransittimepreference8 = req.body.airexporttransittimepreference8;
    var airexportcommodity8 = req.body.airexportcommodity8;
    var airexportspecialrequirements8 = req.body.airexportspecialrequirements8;

    var airexportoriginport9 = req.body.airexportoriginport9;
    var airexportdestinationport9 = req.body.airexportdestinationport9;
    var airexportincoterms9 = req.body.airexportincoterms9;
    var airexportforecastedshipments9 = req.body.airexportforecastedshipments9;
    var airexportforecastedsvolume9 = req.body.airexportforecastedsvolume9;
    var airexporttransittimepreference9 = req.body.airexporttransittimepreference9;
    var airexportcommodity9 = req.body.airexportcommodity9;
    var airexportspecialrequirements9 = req.body.airexportspecialrequirements9;

    var airexportoriginport10 = req.body.airexportoriginport10;
    var airexportdestinationport10 = req.body.airexportdestinationport10;
    var airexportincoterms10 = req.body.airexportincoterms10;
    var airexportforecastedshipments10 = req.body.airexportforecastedshipments10;
    var airexportforecastedsvolume10 = req.body.airexportforecastedsvolume10;
    var airexporttransittimepreference10 = req.body.airexporttransittimepreference10;
    var airexportcommodity10 = req.body.airexportcommodity10;
    var airexportspecialrequirements10 = req.body.airexportspecialrequirements10;
    
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

    var truckingpickuplocation = req.body.truckingpickuplocation;
    var truckingdestination = req.body.truckingdestination;
    var truckingftlorltl = req.body.truckingftlorltl;
    var truckingforecastedmonthlydeliveries = req.body.truckingforecastedmonthlydeliveries
    var truckingworkinghours = req.body.truckingworkinghours;
    var truckingprefferedtrucker = req.body.truckingprefferedtrucker;
    var truckingcommodity = req.body.truckingcommodity;
    var truckingspecialrequirements = req.body.truckingspecialrequirements;
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
	
	// Check Boxes
	"oceanimport": oceanimport,
	"airimport": airimport,
	"isffiling": isffiling,
	"trucking": trucking,
	"oceanexport": oceanexport,
	"airexport": airexport,
	"chb": chb,
	"cargoinsurance": cargoinsurance,
	"warehousing": warehousing,
	"drayage": drayage,
	"transload": transload,
	"pom": pom,
	"otherservice": otherservice,
    
    "oceanimportoriginport": oceanimportoriginport,
    "oceanimportdestinationport": oceanimportdestinationport,
    "oceanimportcontainersize": oceanimportcontainersize,
    "oceanimportincoterms": oceanimportincoterms,
    "oceanimportmonthlyshipments": oceanimportmonthlyshipments,
    "oceanimportforecastedvolume": oceanimportforecastedvolume,
    "oceanimportcarrierpreference":oceanimportcarrierpreference,
    "oceanimporttransittimepreference": oceanimporttransittimepreference,
    "oceanimportcommodity": oceanimportcommodity,
    "oceanimportspecialroutingrequirements": oceanimportspecialroutingrequirements,

    "oceanimportoriginport2": oceanimportoriginport2,
    "oceanimportdestinationport2": oceanimportdestinationport2,
    "oceanimportcontainersize2": oceanimportcontainersize2,
    "oceanimportincoterms2": oceanimportincoterms2,
    "oceanimportmonthlyshipments2": oceanimportmonthlyshipments2,
    "oceanimportforecastedvolume2": oceanimportforecastedvolume2,
    "oceanimportcarrierpreference2": oceanimportcarrierpreference2,
    "oceanimporttransittimepreference2": oceanimporttransittimepreference2,
    "oceanimportcommodity2": oceanimportcommodity2,
    "oceanimportspecialroutingrequirements2": oceanimportspecialroutingrequirements2,

    "oceanimportoriginport3": oceanimportoriginport3,
    "oceanimportdestinationport3": oceanimportdestinationport3,
    "oceanimportcontainersize3": oceanimportcontainersize3,
    "oceanimportincoterms3": oceanimportincoterms3,
    "oceanimportmonthlyshipments3": oceanimportmonthlyshipments3,
    "oceanimportforecastedvolume3": oceanimportforecastedvolume3,
    "oceanimportcarrierpreference3": oceanimportcarrierpreference3,
    "oceanimporttransittimepreference3": oceanimporttransittimepreference3,
    "oceanimportcommodity3": oceanimportcommodity3,
    "oceanimportspecialroutingrequirements3": oceanimportspecialroutingrequirements3,

    "oceanimportoriginport4": oceanimportoriginport4,
    "oceanimportdestinationport4": oceanimportdestinationport4,
    "oceanimportcontainersize4": oceanimportcontainersize4,
    "oceanimportincoterms4": oceanimportincoterms4,
    "oceanimportmonthlyshipments4": oceanimportmonthlyshipments4,
    "oceanimportforecastedvolume4": oceanimportforecastedvolume4,
    "oceanimportcarrierpreference4": oceanimportcarrierpreference4,
    "oceanimporttransittimepreference4": oceanimporttransittimepreference4,
    "oceanimportcommodity4": oceanimportcommodity4,
    "oceanimportspecialroutingrequirements4": oceanimportspecialroutingrequirements4,

    "oceanimportoriginport5": oceanimportoriginport5,
    "oceanimportdestinationport5": oceanimportdestinationport5,
    "oceanimportcontainersize5": oceanimportcontainersize5,
    "oceanimportincoterms5": oceanimportincoterms5,
    "oceanimportmonthlyshipments5": oceanimportmonthlyshipments5,
    "oceanimportforecastedvolume5": oceanimportforecastedvolume5,
    "oceanimportcarrierpreference5": oceanimportcarrierpreference5,
    "oceanimporttransittimepreference5": oceanimporttransittimepreference5,
    "oceanimportcommodity5": oceanimportcommodity5,
    "oceanimportspecialroutingrequirements5": oceanimportspecialroutingrequirements5,

    "oceanimportoriginport6": oceanimportoriginport6,
    "oceanimportdestinationport6": oceanimportdestinationport6,
    "oceanimportcontainersize6": oceanimportcontainersize6,
    "oceanimportincoterms6": oceanimportincoterms6,
    "oceanimportmonthlyshipments6": oceanimportmonthlyshipments6,
    "oceanimportforecastedvolume6": oceanimportforecastedvolume6,
    "oceanimportcarrierpreference6": oceanimportcarrierpreference6,
    "oceanimporttransittimepreference6": oceanimporttransittimepreference6,
    "oceanimportcommodity6": oceanimportcommodity6,
    "oceanimportspecialroutingrequirements6": oceanimportspecialroutingrequirements6,

    "oceanimportoriginport7": oceanimportoriginport7,
    "oceanimportdestinationport7": oceanimportdestinationport7,
    "oceanimportcontainersize7": oceanimportcontainersize7,
    "oceanimportincoterms7": oceanimportincoterms7,
    "oceanimportmonthlyshipments7": oceanimportmonthlyshipments7,
    "oceanimportforecastedvolume7": oceanimportforecastedvolume7,
    "oceanimportcarrierpreference7": oceanimportcarrierpreference7,
    "oceanimporttransittimepreference7": oceanimporttransittimepreference7,
    "oceanimportcommodity7": oceanimportcommodity7,
    "oceanimportspecialroutingrequirements7": oceanimportspecialroutingrequirements7,

    "oceanimportoriginport8": oceanimportoriginport8,
    "oceanimportdestinationport8": oceanimportdestinationport8,
    "oceanimportcontainersize8": oceanimportcontainersize8,
    "oceanimportincoterms8": oceanimportincoterms8,
    "oceanimportmonthlyshipments8": oceanimportmonthlyshipments8,
    "oceanimportforecastedvolume8": oceanimportforecastedvolume8,
    "oceanimportcarrierpreference8": oceanimportcarrierpreference8,
    "oceanimporttransittimepreference8": oceanimporttransittimepreference8,
    "oceanimportcommodity8": oceanimportcommodity8,
    "oceanimportspecialroutingrequirements8": oceanimportspecialroutingrequirements8,

    "oceanimportoriginport9": oceanimportoriginport9,
    "oceanimportdestinationport9": oceanimportdestinationport9,
    "oceanimportcontainersize9": oceanimportcontainersize9,
    "oceanimportincoterms9": oceanimportincoterms9,
    "oceanimportmonthlyshipments9": oceanimportmonthlyshipments9,
    "oceanimportforecastedvolume9": oceanimportforecastedvolume9,
    "oceanimportcarrierpreference9": oceanimportcarrierpreference9,
    "oceanimporttransittimepreference9": oceanimporttransittimepreference9,
    "oceanimportcommodity9": oceanimportcommodity9,
    "oceanimportspecialroutingrequirements9": oceanimportspecialroutingrequirements9,

    "oceanimportoriginport10": oceanimportoriginport10,
    "oceanimportdestinationport10": oceanimportdestinationport10,
    "oceanimportcontainersize10": oceanimportcontainersize10,
    "oceanimportincoterms10": oceanimportincoterms10,
    "oceanimportmonthlyshipments10": oceanimportmonthlyshipments10,
    "oceanimportforecastedvolume10": oceanimportforecastedvolume7,
    "oceanimportcarrierpreference10": oceanimportcarrierpreference10,
    "oceanimporttransittimepreference10": oceanimporttransittimepreference10,
    "oceanimportcommodity10": oceanimportcommodity10,
    "oceanimportspecialroutingrequirements10": oceanimportspecialroutingrequirements10,

    "oceanexportoriginport": oceanexportoriginport,
    "oceanexportdestinationport": oceanexportdestinationport,
    "oceanexportcontainersize": oceanexportcontainersize,
    "oceanexportincoterms": oceanexportincoterms,
    "oceanexportmonthlyshipments": oceanexportmonthlyshipments,
    "oceanexportforecastedvolume": oceanexportforecastedvolume,
    "oceanexportcarrierpreference": oceanexportcarrierpreference,
    "oceanexporttransittimepreference": oceanexporttransittimepreference,
    "oceanexportcommodity": oceanexportcommodity,
    "oceanexportspecialroutingrequirements": oceanexportspecialroutingrequirements,

    "oceanexportoriginport2": oceanexportoriginport2,
    "oceanexportdestinationport2": oceanexportdestinationport2,
    "oceanexportcontainersize2": oceanexportcontainersize2,
    "oceanexportincoterms2": oceanexportincoterms2,
    "oceanexportmonthlyshipments2": oceanexportmonthlyshipments2,
    "oceanexportforecastedvolume2": oceanexportforecastedvolume2,
    "oceanexportcarrierpreference2": oceanexportcarrierpreference2,
    "oceanexporttransittimepreference2": oceanexporttransittimepreference2,
    "oceanexportcommodity2": oceanexportcommodity2,
    "oceanexportspecialroutingrequirements2": oceanexportspecialroutingrequirements2,

    "oceanexportoriginport3": oceanexportoriginport3,
    "oceanexportdestinationport3": oceanexportdestinationport3,
    "oceanexportcontainersize3": oceanexportcontainersize3,
    "oceanexportincoterms3": oceanexportincoterms3,
    "oceanexportmonthlyshipments3": oceanexportmonthlyshipments3,
    "oceanexportforecastedvolume3": oceanexportforecastedvolume3,
    "oceanexportcarrierpreference3": oceanexportcarrierpreference3,
    "oceanexporttransittimepreference3": oceanexporttransittimepreference3,
    "oceanexportcommodity3": oceanexportcommodity3,
    "oceanexportspecialroutingrequirements3": oceanexportspecialroutingrequirements3,

    "oceanexportoriginport4": oceanexportoriginport4,
    "oceanexportdestinationport4": oceanexportdestinationport4,
    "oceanexportcontainersize4": oceanexportcontainersize4,
    "oceanexportincoterms4": oceanexportincoterms4,
    "oceanexportmonthlyshipments4": oceanexportmonthlyshipments4,
    "oceanexportforecastedvolume4": oceanexportforecastedvolume4,
    "oceanexportcarrierpreference4": oceanexportcarrierpreference4,
    "oceanexporttransittimepreference4": oceanexporttransittimepreference4,
    "oceanexportcommodity4": oceanexportcommodity4,
    "oceanexportspecialroutingrequirements4": oceanexportspecialroutingrequirements4,

    "oceanexportoriginport5": oceanexportoriginport5,
    "oceanexportdestinationport5": oceanexportdestinationport5,
    "oceanexportcontainersize5": oceanexportcontainersize5,
    "oceanexportincoterms5": oceanexportincoterms5,
    "oceanexportmonthlyshipments5": oceanexportmonthlyshipments5,
    "oceanexportforecastedvolume5": oceanexportforecastedvolume5,
    "oceanexportcarrierpreference5": oceanexportcarrierpreference5,
    "oceanexporttransittimepreference5": oceanexporttransittimepreference5,
    "oceanexportcommodity5": oceanexportcommodity5,
    "oceanexportspecialroutingrequirements5": oceanexportspecialroutingrequirements5,

    "oceanexportoriginport6": oceanexportoriginport6,
    "oceanexportdestinationport6": oceanexportdestinationport6,
    "oceanexportcontainersize6": oceanexportcontainersize6,
    "oceanexportincoterms6": oceanexportincoterms6,
    "oceanexportmonthlyshipments6": oceanexportmonthlyshipments6,
    "oceanexportforecastedvolume6": oceanexportforecastedvolume6,
    "oceanexportcarrierpreference6": oceanexportcarrierpreference6,
    "oceanexporttransittimepreference6": oceanexporttransittimepreference6,
    "oceanexportcommodity6": oceanexportcommodity6,
    "oceanexportspecialroutingrequirements6": oceanexportspecialroutingrequirements6,

    "oceanexportoriginport7": oceanexportoriginport7,
    "oceanexportdestinationport7": oceanexportdestinationport7,
    "oceanexportcontainersize7": oceanexportcontainersize7,
    "oceanexportincoterms7": oceanexportincoterms7,
    "oceanexportmonthlyshipments7": oceanexportmonthlyshipments7,
    "oceanexportforecastedvolume7": oceanexportforecastedvolume7,
    "oceanexportcarrierpreference7": oceanexportcarrierpreference7,
    "oceanexporttransittimepreference7": oceanexporttransittimepreference7,
    "oceanexportcommodity7": oceanexportcommodity7,
    "oceanexportspecialroutingrequirements7": oceanexportspecialroutingrequirements7,

    "oceanexportoriginport8": oceanexportoriginport8,
    "oceanexportdestinationport8": oceanexportdestinationport8,
    "oceanexportcontainersize8": oceanexportcontainersize8,
    "oceanexportincoterms8": oceanexportincoterms8,
    "oceanexportmonthlyshipments8": oceanexportmonthlyshipments8,
    "oceanexportforecastedvolume8": oceanexportforecastedvolume8,
    "oceanexportcarrierpreference8": oceanexportcarrierpreference8,
    "oceanexporttransittimepreference8": oceanexporttransittimepreference8,
    "oceanexportcommodity8": oceanexportcommodity8,
    "oceanexportspecialroutingrequirements8": oceanexportspecialroutingrequirements8,

    "oceanexportoriginport9": oceanexportoriginport9,
    "oceanexportdestinationport9": oceanexportdestinationport9,
    "oceanexportcontainersize9": oceanexportcontainersize9,
    "oceanexportincoterms9": oceanexportincoterms9,
    "oceanexportmonthlyshipments9": oceanexportmonthlyshipments9,
    "oceanexportforecastedvolume9": oceanexportforecastedvolume9,
    "oceanexportcarrierpreference9": oceanexportcarrierpreference9,
    "oceanexporttransittimepreference9": oceanexporttransittimepreference9,
    "oceanexportcommodity9": oceanexportcommodity9,
    "oceanexportspecialroutingrequirements9": oceanexportspecialroutingrequirements9,

    "oceanexportoriginport10": oceanexportoriginport10,
    "oceanexportdestinationport10": oceanexportdestinationport10,
    "oceanexportcontainersize10": oceanexportcontainersize10,
    "oceanexportincoterms10": oceanexportincoterms10,
    "oceanexportmonthlyshipments10": oceanexportmonthlyshipments10,
    "oceanexportforecastedvolume10": oceanexportforecastedvolume10,
    "oceanexportcarrierpreference10": oceanexportcarrierpreference10,
    "oceanexporttransittimepreference10": oceanexporttransittimepreference10,
    "oceanexportcommodity10": oceanexportcommodity10,
    "oceanexportspecialroutingrequirements10": oceanexportspecialroutingrequirements10,
    
    "chbimportedbefore": chbimportedbefore,
    "chbtariffdatabase": chbtariffdatabase,
    "chbbondtype": chbbondtype,
    "chbgovernmentagencies": chbgovernmentagencies,
    "chbforecastedmonthlyentries": chbforecastedmonthlyentries,
    "chbspecialrequirements": chbspecialrequirements,

    "airimportoriginport": airimportoriginport,
    "airimportdestinationport": airimportdestinationport,
    "airimportincoterms": airimportincoterms,
    "airimportforecastedshipments": airimportforecastedshipments,
    "airimportforecastedsvolume": airimportforecastedsvolume,
    "airimporttransittimepreference": airimporttransittimepreference,
    "airimportcommodity": airimportcommodity,
    "airimportspecialrequirements": airimportspecialrequirements,

    "airimportoriginport2": airimportoriginport2,
    "airimportdestinationport2": airimportdestinationport2,
    "airimportincoterms2": airimportincoterms2,
    "airimportforecastedshipments2": airimportforecastedshipments2,
    "airimportforecastedsvolume2": airimportforecastedsvolume2,
    "airimporttransittimepreference2": airimporttransittimepreference2,
    "airimportcommodity2": airimportcommodity2,
    "airimportspecialrequirements2": airimportspecialrequirements2,

    "airimportoriginport3": airimportoriginport3,
    "airimportdestinationport3": airimportdestinationport3,
    "airimportincoterms3": airimportincoterms3,
    "airimportforecastedshipments3": airimportforecastedshipments3,
    "airimportforecastedsvolume3": airimportforecastedsvolume3,
    "airimporttransittimepreference3": airimporttransittimepreference3,
    "airimportcommodity3": airimportcommodity3,
    "airimportspecialrequirements3": airimportspecialrequirements3,

    "airimportoriginport4": airimportoriginport4,
    "airimportdestinationport4": airimportdestinationport4,
    "airimportincoterms4": airimportincoterms4,
    "airimportforecastedshipments4": airimportforecastedshipments4,
    "airimportforecastedsvolume4": airimportforecastedsvolume4,
    "airimporttransittimepreference4": airimporttransittimepreference4,
    "airimportcommodity4": airimportcommodity4,
    "airimportspecialrequirements4": airimportspecialrequirements4,

    "airimportoriginport5": airimportoriginport5,
    "airimportdestinationport5": airimportdestinationport5,
    "airimportincoterms5": airimportincoterms5,
    "airimportforecastedshipments5": airimportforecastedshipments5,
    "airimportforecastedsvolume5": airimportforecastedsvolume5,
    "airimporttransittimepreference5": airimporttransittimepreference5,
    "airimportcommodity5": airimportcommodity5,
    "airimportspecialrequirements5": airimportspecialrequirements5,

    "airimportoriginport6": airimportoriginport6,
    "airimportdestinationport6": airimportdestinationport6,
    "airimportincoterms6": airimportincoterms6,
    "airimportforecastedshipments6": airimportforecastedshipments6,
    "airimportforecastedsvolume6": airimportforecastedsvolume6,
    "airimporttransittimepreference6": airimporttransittimepreference6,
    "airimportcommodity6": airimportcommodity6,
    "airimportspecialrequirements6": airimportspecialrequirements6,

    "airimportoriginport7": airimportoriginport7,
    "airimportdestinationport7": airimportdestinationport7,
    "airimportincoterms7": airimportincoterms7,
    "airimportforecastedshipments7": airimportforecastedshipments7,
    "airimportforecastedsvolume7": airimportforecastedsvolume7,
    "airimporttransittimepreference7": airimporttransittimepreference7,
    "airimportcommodity7": airimportcommodity7,
    "airimportspecialrequirements7": airimportspecialrequirements7,

    "airimportoriginport8": airimportoriginport8,
    "airimportdestinationport8": airimportdestinationport8,
    "airimportincoterms8": airimportincoterms8,
    "airimportforecastedshipments8": airimportforecastedshipments8,
    "airimportforecastedsvolume8": airimportforecastedsvolume8,
    "airimporttransittimepreference8": airimporttransittimepreference8,
    "airimportcommodity8": airimportcommodity8,
    "airimportspecialrequirements8": airimportspecialrequirements8,

    "airimportoriginport9": airimportoriginport9,
    "airimportdestinationport9": airimportdestinationport9,
    "airimportincoterms9": airimportincoterms9,
    "airimportforecastedshipments9": airimportforecastedshipments9,
    "airimportforecastedsvolume9": airimportforecastedsvolume9,
    "airimporttransittimepreference9": airimporttransittimepreference9,
    "airimportcommodity9": airimportcommodity9,
    "airimportspecialrequirements9": airimportspecialrequirements9,

    "airimportoriginport10": airimportoriginport10,
    "airimportdestinationport10": airimportdestinationport10,
    "airimportincoterms10": airimportincoterms10,
    "airimportforecastedshipments10": airimportforecastedshipments10,
    "airimportforecastedsvolume10": airimportforecastedsvolume10,
    "airimporttransittimepreference10": airimporttransittimepreference10,
    "airimportcommodity10": airimportcommodity10,
    "airimportspecialrequirements10": airimportspecialrequirements10,
    
    "airexportoriginport": airexportoriginport,
    "airexportdestinationport": airexportdestinationport,
    "airexportincoterms": airexportincoterms,
    "airexportforecastedshipments": airexportforecastedshipments,
    "airexportforecastedsvolume": airexportforecastedsvolume,
    "airexporttransittimepreference": airexporttransittimepreference,
    "airexportcommodity": airexportcommodity,
    "airexportspecialrequirements": airexportspecialrequirements,

    "airexportoriginport2": airexportoriginport2,
    "airexportdestinationport2": airexportdestinationport2,
    "airexportincoterms2": airexportincoterms2,
    "airexportforecastedshipments2": airexportforecastedshipments2,
    "airexportforecastedsvolume2": airexportforecastedsvolume2,
    "airexporttransittimepreference2": airexporttransittimepreference2,
    "airexportcommodity2": airexportcommodity2,
    "airexportspecialrequirements2": airexportspecialrequirements2,

    "airexportoriginport3": airexportoriginport3,
    "airexportdestinationport3": airexportdestinationport3,
    "airexportincoterms3": airexportincoterms3,
    "airexportforecastedshipments3": airexportforecastedshipments3,
    "airexportforecastedsvolume3": airexportforecastedsvolume3,
    "airexporttransittimepreference3": airexporttransittimepreference3,
    "airexportcommodity3": airexportcommodity3,
    "airexportspecialrequirements3": airexportspecialrequirements3,

    "airexportoriginport4": airexportoriginport4,
    "airexportdestinationport4": airexportdestinationport4,
    "airexportincoterms4": airexportincoterms4,
    "airexportforecastedshipments4": airexportforecastedshipments4,
    "airexportforecastedsvolume4": airexportforecastedsvolume4,
    "airexporttransittimepreference4": airexporttransittimepreference4,
    "airexportcommodity4": airexportcommodity4,
    "airexportspecialrequirements4": airexportspecialrequirements4,

    "airexportoriginport5": airexportoriginport5,
    "airexportdestinationport5": airexportdestinationport5,
    "airexportincoterms5": airexportincoterms5,
    "airexportforecastedshipments5": airexportforecastedshipments5,
    "airexportforecastedsvolume5": airexportforecastedsvolume5,
    "airexporttransittimepreference5": airexporttransittimepreference5,
    "airexportcommodity5": airexportcommodity5,
    "airexportspecialrequirements5": airexportspecialrequirements5,

    "airexportoriginport6": airexportoriginport6,
    "airexportdestinationport6": airexportdestinationport6,
    "airexportincoterms6": airexportincoterms6,
    "airexportforecastedshipments6": airexportforecastedshipments6,
    "airexportforecastedsvolume6": airexportforecastedsvolume6,
    "airexporttransittimepreference6": airexporttransittimepreference6,
    "airexportcommodity6": airexportcommodity6,
    "airexportspecialrequirements6": airexportspecialrequirements6,

    "airexportoriginport7": airexportoriginport7,
    "airexportdestinationport7": airexportdestinationport7,
    "airexportincoterms7": airexportincoterms7,
    "airexportforecastedshipments7": airexportforecastedshipments7,
    "airexportforecastedsvolume7": airexportforecastedsvolume7,
    "airexporttransittimepreference7": airexporttransittimepreference7,
    "airexportcommodity7": airexportcommodity7,
    "airexportspecialrequirements7": airexportspecialrequirements7,

    "airexportoriginport8": airexportoriginport8,
    "airexportdestinationport8": airexportdestinationport8,
    "airexportincoterms8": airexportincoterms8,
    "airexportforecastedshipments8": airexportforecastedshipments8,
    "airexportforecastedsvolume8": airexportforecastedsvolume8,
    "airexporttransittimepreference8": airexporttransittimepreference8,
    "airexportcommodity8": airexportcommodity8,
    "airexportspecialrequirements8": airexportspecialrequirements8,

    "airexportoriginport9": airexportoriginport9,
    "airexportdestinationport9": airexportdestinationport9,
    "airexportincoterms9": airexportincoterms9,
    "airexportforecastedshipments9": airexportforecastedshipments9,
    "airexportforecastedsvolume9": airexportforecastedsvolume9,
    "airexporttransittimepreference9": airexporttransittimepreference9,
    "airexportcommodity9": airexportcommodity9,
    "airexportspecialrequirements9": airexportspecialrequirements9,

    "airexportoriginport10": airexportoriginport10,
    "airexportdestinationport10": airexportdestinationport10,
    "airexportincoterms10": airexportincoterms10,
    "airexportforecastedshipments10": airexportforecastedshipments10,
    "airexportforecastedsvolume10": airexportforecastedsvolume10,
    "airexporttransittimepreference10": airexporttransittimepreference10,
    "airexportcommodity10": airexportcommodity10,
    "airexportspecialrequirements10": airexportspecialrequirements10,
    
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

    "truckingpickuplocation": truckingpickuplocation,
    "truckingdestination": truckingdestination,
    "truckingftlorltl": truckingftlorltl,
    "truckingforecastedmonthlydeliveries":truckingforecastedmonthlydeliveries,
    "truckingworkinghours": truckingworkinghours,
    "truckingprefferedtrucker": truckingprefferedtrucker,
    "truckingcommodity": truckingcommodity,
    "truckingspecialrequirements": truckingspecialrequirements,
  
}
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Successfull Form Entry!!!"); 
              
    }); 
          
    return res.redirect('signup_success.html'); 
}) 
  
  
app.get('/',function(req,res){ 
res.set({ 
    'Access-control-Allow-Origin': '*'
    }); 
return res.redirect('index.html'); 
}).listen(3000) 
  
  
app.listen(process.env.PORT, process.env.IP);