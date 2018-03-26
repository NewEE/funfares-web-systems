var RegionObj= new Array("EAR","SEA","AMR");
var CityObj ={"EAR":["Osaka","Seoul"],"SEA":["Cebu","Singapore"], "AMR":["Los Angeles","Boston"]};



// varify the region and city
function onchangeRegion(){
	$("#Region").change(function(){
		var reg=$("#Region").val(); //
		var SFlag = true; // string flag
		if(! typeof reg =="string") RFlag =false;
		var OFlag =false; // object flag

		if(SFlag){
			var j=RegionObj.length;
			for (var i=0;i<j;i++){
				if (RegionObj[i] == reg) OFlag= true;
			}
		}
		//console.log("reg:"+reg+" sflag:"+SFlag+" OFlag:"+OFlag);


		var city = document.getElementById("City");
			city.options.length=0;
		if (SFlag && OFlag) {
			//var city= $("#City"); //not work by this way
				var Obj= CityObj[reg];
				var j= Obj.length;
					for (var i=0;i<j;i++){
						var option = document.createElement("option");
						option.text = Obj[i];
						option.value = Obj[i];
						city.add(option);
				}
				city.disabled = false; // active the select
				$("#R_tips").hide();
		} else {
			$("#R_tips").show();
			city.disabled = true;
		}

			//console.log("Region:"+reg.val());
	});
};// end of onchangeRegion

		// intial the RangeSlider
		function CallIon() {

			 $("#range").ionRangeSlider({
					 hide_min_max: true,
					 keyboard: true,
					 min: 0,
					 max: 100000,
					 from: 10,
					 to: 100000,
					 type: 'double',
					 step: 10,
					 prefix: "$",
					 grid: true
			 });

		};

		//CallIon();

		// not perfect.
		function hideClass(){
		 $('.BERange').hide();
		 $('.hideClass').hide();
	 };

		// Search: double check the format in Search function
		function BeforeSubmit(){
			 substrRange();
		 return false;
	 };

		// substring the range of price
		function substrRange(){
		 var index = 0;
		 var sflag ="\;";
		 var Rstring = $('#range').val();
		 index = Rstring.indexOf(sflag);
		 console.log("index: "+ index);
		 var BPRange= Rstring.substring(0,index);
		 var EPRange=Rstring.substring(index+1);
		 $('#BPRange').val(BPRange);
		 $('#EPRange').val(EPRange);
		 console.log("BRange: "+BPRange  +" /ERange: "+EPRange);
	 };

		$(document).ready(function(){
				hideClass();
				CallIon();
				onchangeRegion();
			});

			function showButton(){
				//var name = $('#UserName').val();
				var name = $('input[name="Order[UserName]"]').val();
				var Quota = $('input[name="Quota"]').val();
				if(typeof name =='undefined'|| name =='guess'||Quota<1){
					return false;
				}else{
						return true;
				}
			}

    function initialData(){
      var iData= Fdata;
      console.log("typeof iData: "+iData+" typeof Fdata:"+ Fdata);
      if(iData!=null){
        $("#Region").val()= iData.Region;
        $("#City").val()= iData.City;
        $("#Class").val()= iData.Class;
        $("#Price").val()= iData.Price;
        $("#Image").val()= iData.Image;
        $("#ValidDate").val()= iData.ValidDate;
        $("#Quota").val()= iData.Quota;
        $("#B_Dates").val()= iData.B_Dates;
        $("#E_Dates").val()= iData.E_Dates;
      }
    };


		function onClickE3( page){
			console.log("p: "+page);
			var url = $('.page-link').attr('href');
			console.log("url B: "+ url);
			var obj = $('#ConditionsObj').val();

			var Region = obj.Region||'';
			var BPRange = obj.BPRange ||'';
			var EPRange = obj.EPRange||'';
			var B_Dates = obj.B_Dates||'';
			var E_Dates = obj.E_Dates||'' ;

			url ="/Fanfares/search/?page="+page;

			url = url+ "&Region="+Region +"&BPRange="+BPRange+"&EPRange="+EPRange+"&B_Dates="+B_Dates+"&E_Dates="+E_Dates;

			console.log("reg: "+ Region);
			$('.page-link').attr('href', url);
			console.log("url A: "+ $('.page-link').attr('href'));
			//return false;
		};
