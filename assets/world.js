var World = {
	countries: {},
	Country: function(name, shape)
	{
		this.name = name;
		this.bbox = this.ComputeBBox(shape);

		this.capital = {
			x: this.bbox.x + this.bbox.width / 2,
			y: this.bbox.y + this.bbox.height / 2,
		};

		this.cities = [];
	},

	City: function(x, y)
	{
		this.x = x;
		this.y = y;
	},

	tmp:{
		cities:{
	"US":[{"x":273,"y":109},{"x":271,"y":112},{"x":260,"y":119},{"x":255,"y":128},{"x":242,"y":139},{"x":244,"y":149},{"x":231,"y":141},{"x":218,"y":139},{"x":226,"y":125},{"x":234,"y":127},{"x":235,"y":108},{"x":246,"y":121},{"x":250,"y":134},{"x":258,"y":129},{"x":264,"y":118},{"x":265,"y":112},{"x":251,"y":124},{"x":245,"y":123},{"x":137,"y":98},{"x":135,"y":101},{"x":134,"y":107},{"x":138,"y":117},{"x":133,"y":120},{"x":148,"y":134},{"x":199,"y":140},{"x":198,"y":148},{"x":206,"y":146},{"x":194,"y":99},{"x":198,"y":109},{"x":200,"y":116},{"x":200,"y":127},{"x":187,"y":117},{"x":186,"y":123},{"x":170,"y":119},{"x":162,"y":111},{"x":34,"y":75},{"x":28,"y":63},{"x":42,"y":36},{"x":70,"y":39}],
	"VE":[{"x":299,"y":203},{"x":277,"y":197}],
	"SR":[{"x":316,"y":212}],
	"GF":[{"x":323,"y":215}],
	"BR":[{"x":337,"y":266}],
	"UY":[{"x":317,"y":318},{"x":309,"y":316}],
	"PY":[{"x":311,"y":295}],
	"CL":[{"x":274,"y":319}],
	"BO":[{"x":281,"y":271}],
	"PE":[{"x":258,"y":257}],
	"EC":[{"x":251,"y":229}],
	"CO":[{"x":264,"y":213}],
	"CA":[{"x":213,"y":71},{"x":314,"y":85},{"x":287,"y":95},{"x":301,"y":102},{"x":270,"y":102},{"x":261,"y":103},{"x":252,"y":106},{"x":246,"y":106},{"x":217,"y":94},{"x":187,"y":90},{"x":155,"y":89},{"x":122,"y":87},{"x":126,"y":76},{"x":156,"y":83},{"x":118,"y":60},{"x":102,"y":51},{"x":153,"y":62},{"x":88,"y":46},{"x":89,"y":57},{"x":231,"y":18},{"x":241,"y":5},{"x":246,"y":6},{"x":277,"y":6},{"x":271,"y":8}],
	"GL":[{"x":292,"y":18},{"x":300,"y":19},{"x":322,"y":44},{"x":324,"y":48},{"x":326,"y":51},{"x":334,"y":60},{"x":337,"y":60},{"x":408,"y":17},{"x":386,"y":18}],

	"MR":[{"x":424,"y":176}],"SN":[{"x":422,"y":186}],"ML":[{"x":447,"y":191}],"GW":[{"x":423,"y":194}],"GN":[{"x":428,"y":198}],"SL":[{"x":432,"y":205}],"LR":[{"x":438,"y":209}],"CI":[{"x":452,"y":208}],"GH":[{"x":464,"y":210}],"TG":[{"x":468,"y":208}],"NG":[{"x":485,"y":202}],"BJ":[{"x":471,"y":208}],"NE":[{"x":472,"y":188}],"BF":[{"x":460,"y":192}],"MA":[{"x":443,"y":140}],"DZ":[{"x":474,"y":130}],"LY":[{"x":503,"y":141}],"TN":[{"x":491,"y":129}],"EG":[{"x":550,"y":148}],"SD":[{"x":548,"y":191}],"TD":[{"x":507,"y":195}],"CM":[{"x":498,"y":212}],"CF":[{"x":513,"y":212}],"CG":[{"x":508,"y":238}],"CD":[{"x":506,"y":234}],"AO":[{"x":502,"y":251}],"NA":[{"x":512,"y":286}],"BW":[{"x":533,"y":291}],"ZA":[{"x":541,"y":298}],"SZ":[{"x":550,"y":298}],"MZ":[{"x":553,"y":292}],"LS":[{"x":540,"y":306}],"MG":[{"x":593,"y":280}],"ZW":[{"x":547,"y":276}],"ZM":[{"x":540,"y":268}],"TZ":[{"x":570,"y":246}],"KE":[{"x":567,"y":230}],"SO":[{"x":585,"y":220}],"BI":[{"x":545,"y":236}],"RW":[{"x":546,"y":233}],"UG":[{"x":551,"y":224}],"ET":[{"x":572,"y":205}],"ER":[{"x":570,"y":184}],"YE":[{"x":588,"y":185}],"SA":[{"x":589,"y":162}],"OM":[{"x":622,"y":164}],"AE":[{"x":612,"y":162}],"IR":[{"x":611,"y":132}],"IQ":[{"x":583,"y":137}],"JO":[{"x":563,"y":142}],"SY":[{"x":564,"y":135}],"UA":[{"x":550,"y":92}],"RU":[{"x":572,"y":70},{"x":571,"y":84},{"x":550,"y":69},{"x":608,"y":82},{"x":585,"y":95},{"x":583,"y":52},{"x":558,"y":43},{"x":592,"y":76},{"x":675,"y":48},{"x":691,"y":74},{"x":626,"y":62},{"x":663,"y":76},{"x":872,"y":64}],"BY":[{"x":541,"y":81}],"LT":[{"x":532,"y":78}],"LV":[{"x":534,"y":72}],"FI":[{"x":534,"y":62}],"SE":[{"x":510,"y":66}],"MN":[{"x":747,"y":100}],"KZ":[{"x":673,"y":106},{"x":660,"y":92}],"KG":[{"x":665,"y":114}],"UZ":[{"x":644,"y":116}],"TM":[{"x":624,"y":124}],"AF":[{"x":648,"y":136}],"PK":[{"x":660,"y":138}],"IN":[{"x":673,"y":154},{"x":674,"y":186}],"LK":[{"x":682,"y":206}],"BD":[{"x":708,"y":162}],"NP":[{"x":692,"y":151}],"BT":[{"x":708,"y":152}],"MM":[{"x":726,"y":180}],"CN":[{"x":772,"y":120},{"x":712,"y":122},{"x":766,"y":160},{"x":801,"y":103}],"TH":[{"x":736,"y":188}],"LA":[{"x":742,"y":175}],"VN":[{"x":748,"y":168}],"KH":[{"x":747,"y":191}],"MY":[{"x":740,"y":217},{"x":774,"y":216}],"ID":[{"x":755,"y":244}],"PH":[{"x":790,"y":185}],"JP":[{"x":842,"y":128},{"x":848,"y":109}],"AU":[{"x":831,"y":294}],"NO":[{"x":492,"y":64}],"PL":[{"x":521,"y":86}],"CZ":[{"x":504,"y":91}],"SK":[{"x":515,"y":95}],"HU":[{"x":515,"y":99}],"RO":[{"x":533,"y":106}],"MD":[{"x":543,"y":100}],"BG":[{"x":528,"y":112}],"IT":[{"x":498,"y":112}],"CH":[{"x":487,"y":100}],"FR":[{"x":472,"y":99}],"BE":[{"x":479,"y":90}],"DE":[{"x":498,"y":86}],"GB":[{"x":462,"y":85}],"ES":[{"x":454,"y":117}],"PT":[{"x":441,"y":121}],
	"TR":[{"x":549,"y":120},{"x":574,"y":122}],"MX":[{"x":196,"y":173},{"x":174,"y":153}],"NL":[{"x":479,"y":85}],"IE":[{"x":442,"y":81}],
	

}
	}
};

World.Country.prototype.ComputeBBox = function(shape)
{
	return Raphael.pathBBox(shape);
}

World.Country.prototype.ParseShape = function(shape)
{
	return Raphael.pathToRelative(shape);
}

World.Country.prototype.Damage = function(died)
{
	this.pop -= died;
	this.pop = Math.max(this.pop, 0)
	this.UpdateFill('#440000')
}

World.Country.prototype.HealPercent = function(healedPercent)
{
	this.pop += this.popInitial * healedPercent;
	this.pop = Math.min(this.pop, this.popInitial)
	this.UpdateFill('#f90');
	var self = this;
	setTimeout(function(){self.UpdateFill('#400');}, 500);
	return Math.ceil(this.popInitial * healedPercent);
}

World.Country.prototype.DamagePercent = function(diedPercent)
{
	this.pop -= this.popInitial * diedPercent;
	this.pop = Math.max(this.pop, 0)
	this.UpdateFill('#440000')
	return Math.ceil(this.popInitial * diedPercent)
}

World.Country.prototype.UpdateFill = function(color)
{
	var p1 = Math.floor(this.pop / this.popInitial * 100);
	var p2 = 100 - p1;
	var angle = 90;
	var c1 = color;
	var c2 = '#000';
	if(p2 > p1)
	{
		angle = 270;
		var t = p1;
		p1 = p2;
		p2 = p1;

		t = c1;
		c1 = c2;
		c2 = t;
	}
	var str = angle + '-'+c1+':' + p1 + '-'+c2+':' + p2;
//	var str = '90-#900:60-#000:40';
	this.shape.attr({
		fill: str
	});
}