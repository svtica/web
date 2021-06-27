(function() {

	/*
	var lang = document.documentElement.getAttribute('lang');
	 var url = (window.location !== window.parent.location) ? document.referrer : document.location.href;
	 var parameters = getParameters(url);
	var protocol = parameters.protocol;
	var reportUrl = parameters.reportUrl || 'http://137.175.254.160';
	var iframeProtocol = parameters.iframeProtocol || 'https://';
	*/

	function init() {
		attachToWindow(testCompleted);

		/*
		var urls = {
			fr: {
				all: iframeProtocol + 'videotron-fr.speedtestcustom.com',
				ipv6: iframeProtocol + 'videotron-fr.dualstack.speedtestcustom.com',
				ipv4: iframeProtocol + 'videotron-fr.ipv4-only.speedtestcustom.com'
			},
			en: {
				all: iframeProtocol + 'videotron.speedtestcustom.com',
				ipv6: iframeProtocol + 'videotron.dualstack.speedtestcustom.com',
				ipv4: iframeProtocol + 'videotron.ipv4-only.speedtestcustom.com'
			}
		}
		
		document.getElementById('speedtest').src = protocol ? urls[lang][protocol] : urls[lang].all;
		*/
	}

	function attachToWindow(listener) {
		if (window.addEventListener) {
			window.addEventListener('message', listener);
		} else if (window.attachEvent) {
			window.attachEvent('onmessage', listener);
		}
	}

	function testCompleted(event) {
		if (!(event.origin === 'https://videotron.ipv4-only.speedtestcustom.com'
			|| event.origin === 'https://videotron.dualstack.speedtestcustom.com'
			|| event.origin === 'https://videotron.speedtestcustom.com')) {
			return;
		}

		var xhr = new XMLHttpRequest();
		var data = event.data;
		var form = {
			download: data.download,
			upload: data.upload,
			latency: data.latency.minimum,
			jitter: data.latency.jitter,
			serverurl: data.config.host,
			serverport: data.config.port,
			serverid: data.config.serverId,
			hash: data.config.testId,
			testmethod: data.config.testMethod,
			customer: 'videotron'
		};

		xhr.open('POST', 'https://reportingipv4.testvitesse.videotron.ca', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(urlEncode(form));
	}

	function urlEncode(obj){
		var s = '';
		for(var k in obj){
			s += (s?'&':'') + encode(k)+'='+encode(obj[k]);
		}
		return s;
	}

	function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }

	// to be replaced by UrlSearchParams when IE11 support will be dropped.
	/*
	function getParameters(url) {
		var indexQs = url.indexOf('?');
		var indexHash = url.indexOf('#');
		var result = {};
			
		if (indexQs === -1 || indexHash !== -1 && indexQs < indexHash)  {
			return result;
		}
		
		var query = indexHash === -1 ? url.substring(indexQs + 1) : url.substring(indexQs + 1, indexHash);

		query.split("&").forEach(function(part) {
			var item = part.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});
		
		return result;
	}
	*/

	init();

})();
