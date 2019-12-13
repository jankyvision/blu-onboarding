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
   
    var airexportoriginport = req.body.airexportoriginport;
    var airexportdestinationport = req.body.airexportdestinationport;
    var airexportincoterms = req.body.airexportincoterms;
    var airexportforecastedshipments = req.body.airexportforecastedshipments;
    var airexportforecastedsvolume = req.body.airexportforecastedsvolume;
    var airexporttransittimepreference = req.body.airexporttransittimepreference;
    var airexportcommodity = req.body.airexportcommodity;
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
    //port 2,3,4...
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
    
    "airexportoriginport": airexportoriginport,
    "airexportdestinationport": airexportdestinationport,
    "airexportincoterms": airexportincoterms,
    "airexportforecastedshipments": airexportforecastedshipments,
    "airexportforecastedsvolume": airexportforecastedsvolume,
    "airexporttransittimepreference": airexporttransittimepreference,
    "airexportcommodity": airexportcommodity,
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