var http=require('https');
var parseString = require('xml2js').parseString;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var crypto = require('crypto');

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/Atom', function(req, resp) {

	resp.write('<a href="https://www.atomtech.in/" style= "display: none;"  ></a>');
    var data = req.body;
    var cc = req.body.clientcode;
    var final=(new Buffer(cc).toString('base64'));
    var url = data.ru=="" ? null : data.ru;
    var udf1 = data.udf1=="" ? null : data.udf1;
    var udf2 = data.udf2=="" ? null : data.udf2;
    var udf3 = data.udf3=="" ? null : data.udf3;
    var udf4 = data.udf4=="" ? null : data.udf4;
	var key='KEY123657234';
	var sign = data.login + data.pass + data.ttype + data.prodid + data.transid + data.amt + data.txncur;

	function sig(sign, key) {
	  return crypto.createHmac('sha512', key)
		.update(new Buffer(sign, 'utf-8'))
		.digest('hex');
	}
	var signature=sig(sign,key)

    var options = {
        host: 'https://paynetzuat.atomtech.in',
		//port: '443',
        path: '/paynetz/epi/fts?login='+data.login+'&pass='+data.pass+'&ttype='+data.ttype+'&prodid='+data.prodid+'&amt='+data.amt+'&txncurr='+data.txncur+'&txnscamt='+data.txnamt+'&clientcode='+encodeURIComponent(final)+'&txnid='+data.transid+'&date='+data.datepick+'&custacc='+data.custacc+'&udf1='+udf1+'&udf2='+udf2+'&udf3='+udf3+'&udf4='+udf4+'&ru='+url+'&signature='+signature+'',
        method: 'POST'
    };
    url=options['host']+options["path"];
	console.log(url);
	resp.redirect(url);
	
});

app.post('/Response', function(req, resp) {
		
	
	
    var data = req.body;
	
	var str= data.mmp_txn + data.mer_txn + data.f_code + data.prod + data.discriminator + data.amt + data.bank_txn ;
	var key='KEYRESP123657234';
	function sig(str, key) {
	  return crypto.createHmac('sha512', key)
		.update(new Buffer(str, 'utf-8'))
		.digest('hex');
	}
	var sign=sig(str,key)
	if ( data.signature != sign){
		
		console.log("signature not mactching")
		
	}
	var url = 'https://response url';
		resp.redirect(url);
		return false;
		
});



app.listen(1337);