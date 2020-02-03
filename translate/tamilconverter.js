var eelam;   
function bamini2unicode(ip) 
{   
	eelam = ip;
	eelam = eelam.replace(/sp/g, "ளி");
	eelam = eelam.replace(/hp/g, "ரி");
	eelam = eelam.replace(/hP/g, "ரீ");
	eelam = eelam.replace(/uP/g, "ரீ");
	eelam = eelam.replace(/u;/g, "ர்");
	eelam = eelam.replace(/h;/g, "ர்");
	eelam = eelam.replace(/H/g, "ர்");
	eelam = eelam.replace(/\+/g, "10");


	eelam = eelam.replace(/nfs/g, "கௌ");
	eelam = eelam.replace(/Nfh/g, "கோ");
	eelam = eelam.replace(/nfh/g, "கொ");
	eelam = eelam.replace(/fh/g, "கா");
	eelam = eelam.replace(/fp/g, "கி");
	eelam = eelam.replace(/fP/g, "கீ");
	eelam = eelam.replace(/F/g, "கு");
	eelam = eelam.replace(/\$/g, "கூ");
	eelam = eelam.replace(/nf/g, "கெ");
	eelam = eelam.replace(/Nf/g, "கே");
	eelam = eelam.replace(/if/g, "கை");
	eelam = eelam.replace(/f;/g, "க்");
	eelam = eelam.replace(/f/g, "க");

	eelam = eelam.replace(/nqs/g, "ஙௌ");
	eelam = eelam.replace(/Nqh/g, "ஙோ");
	eelam = eelam.replace(/nqh/g, "ஙொ");
	eelam = eelam.replace(/qh/g, "ஙா");
	eelam = eelam.replace(/qp/g, "ஙி");
	eelam = eelam.replace(/qP/g, "ஙீ");
	eelam = eelam.replace(/nq/g, "ஙெ");
	eelam = eelam.replace(/Nq/g, "ஙே");
	eelam = eelam.replace(/iq/g, "ஙை");
	eelam = eelam.replace(/q;/g, "ங்");
	eelam = eelam.replace(/q/g, "ங");///

	eelam = eelam.replace(/nrs/g, "சௌ");
	eelam = eelam.replace(/Nrh/g, "சோ");
	eelam = eelam.replace(/nrh/g, "சொ");
	eelam = eelam.replace(/rh/g, "சா");
	eelam = eelam.replace(/rp/g, "சி");
	eelam = eelam.replace(/rP/g, "சீ");
	eelam = eelam.replace(/R/g, "சு");
	eelam = eelam.replace(/#/g, "சூ");
	eelam = eelam.replace(/nr/g, "செ");
	eelam = eelam.replace(/Nr/g, "சே");
	eelam = eelam.replace(/ir/g, "சை");
	eelam = eelam.replace(/r;/g, "ச்");
	eelam = eelam.replace(/r/g, "ச");//



	eelam = eelam.replace(/n\[s/g, "ஜௌ");
	eelam = eelam.replace(/N\[h/g, "ஜோ");
	eelam = eelam.replace(/n\[h/g, "ஜொ");
	eelam = eelam.replace(/\[h/g, "ஜா");
	eelam = eelam.replace(/\[p/g, "ஜி");
	eelam = eelam.replace(/\[P/g, "ஜீ");
	eelam = eelam.replace(/\[{/g, "ஜு");
	eelam = eelam.replace(/\[_/g, "ஜூ");//

	eelam = eelam.replace(/n\[/g, "ஜெ");
	eelam = eelam.replace(/N\[/g, "ஜே");
	eelam = eelam.replace(/i\[/g, "ஜை");
	eelam = eelam.replace(/\[;/g, "ஜ்");
	eelam = eelam.replace(/\[/g, "ஜ");//

	eelam = eelam.replace(/ஜ\{/g, "ஜு");
	eelam = eelam.replace(/ஜ_/g, "ஜூ");


	eelam = eelam.replace(/nQs/g, "ஞௌ");
	eelam = eelam.replace(/NQh/g, "ஞோ");
	eelam = eelam.replace(/nQh/g, "ஞொ");
	eelam = eelam.replace(/Qh/g, "ஞா");
	eelam = eelam.replace(/Qp/g, "ஞி");
	eelam = eelam.replace(/QP/g, "ஞீ");
	eelam = eelam.replace(/nQ/g, "ஞெ");
	eelam = eelam.replace(/NQ/g, "ஞே");
	eelam = eelam.replace(/iQ/g, "ஞை");
	eelam = eelam.replace(/Q;/g, "ஞ்");
	eelam = eelam.replace(/Q/g, "ஞ");///

	eelam = eelam.replace(/nls/g, "டௌ");
	eelam = eelam.replace(/Nlh/g, "டோ");
	eelam = eelam.replace(/nlh/g, "டொ");
	eelam = eelam.replace(/lp/g, "டி");
	eelam = eelam.replace(/lP/g, "டீ");
	eelam = eelam.replace(/lh/g, "டா");
	eelam = eelam.replace(/b/g, "டி");
	eelam = eelam.replace(/B/g, "டீ");
	eelam = eelam.replace(/L/g, "டு");
	eelam = eelam.replace(/\^/g, "டூ");
	eelam = eelam.replace(/nl/g, "டெ");
	eelam = eelam.replace(/Nl/g, "டே");
	eelam = eelam.replace(/il/g, "டை");
	eelam = eelam.replace(/l;/g, "ட்");
	eelam = eelam.replace(/l/g, "ட");////

	eelam = eelam.replace(/nzs/g, "ணௌ");
	eelam = eelam.replace(/Nzh/g, "ணோ");
	eelam = eelam.replace(/nzh/g, "ணொ");
	eelam = eelam.replace(/zh/g, "ணா");
	eelam = eelam.replace(/zp/g, "ணி");
	eelam = eelam.replace(/zP/g, "ணீ");


	eelam = eelam.replace(/Zh/g, "ணூ");
	eelam = eelam.replace(/Z}/g, "ணூ");

	eelam = eelam.replace(/nz/g, "ணெ");
	eelam = eelam.replace(/Nz/g, "ணே");
	eelam = eelam.replace(/iz/g, "ணை");


	eelam = eelam.replace(/z;/g, "ண்");
	eelam = eelam.replace(/Z/g, "ணு");
	eelam = eelam.replace(/z/g, "ண");////



	eelam = eelam.replace(/njs/g, "தௌ");
	eelam = eelam.replace(/Njh/g, "தோ");
	eelam = eelam.replace(/njh/g, "தொ");
	eelam = eelam.replace(/jh/g, "தா");
	eelam = eelam.replace(/jp/g, "தி");
	eelam = eelam.replace(/jP/g, "தீ");
	eelam = eelam.replace(/Jh/g, "தூ");
	eelam = eelam.replace(/Jh/g, "தூ");
	eelam = eelam.replace(/J}/g, "தூ");
	eelam = eelam.replace(/J/g, "து");
	eelam = eelam.replace(/nj/g, "தெ");
	eelam = eelam.replace(/Nj/g, "தே");
	eelam = eelam.replace(/ij/g, "தை");
	eelam = eelam.replace(/j;/g, "த்");
	eelam = eelam.replace(/j/g, "த");//

	eelam = eelam.replace(/nes/g, "நௌ");
	eelam = eelam.replace(/Neh/g, "நோ");
	eelam = eelam.replace(/neh/g, "நொ");
	eelam = eelam.replace(/eh/g, "நா");
	eelam = eelam.replace(/ep/g, "நி");
	eelam = eelam.replace(/eP/g, "நீ");
	eelam = eelam.replace(/E}/g, "நூ");
	eelam = eelam.replace(/Eh/g, "நூ");
	eelam = eelam.replace(/E/g, "நு");
	eelam = eelam.replace(/ne/g, "நெ");
	eelam = eelam.replace(/Ne/g, "நே");
	eelam = eelam.replace(/ie/g, "நை");
	eelam = eelam.replace(/e;/g, "ந்");
	eelam = eelam.replace(/e/g, "ந");//


	eelam = eelam.replace(/nds/g, "னௌ");
	eelam = eelam.replace(/Ndh/g, "னோ");
	eelam = eelam.replace(/ndh/g, "னொ");
	eelam = eelam.replace(/dh/g, "னா");
	eelam = eelam.replace(/dp/g, "னி");
	eelam = eelam.replace(/dP/g, "னீ");
	eelam = eelam.replace(/D}/g, "னூ");

	eelam = eelam.replace(/Dh/g, "னூ");
	eelam = eelam.replace(/D/g, "னு");
	eelam = eelam.replace(/nd/g, "னெ");
	eelam = eelam.replace(/Nd/g, "னே");
	eelam = eelam.replace(/id/g, "னை");
	eelam = eelam.replace(/d;/g, "ன்");
	eelam = eelam.replace(/d/g, "ன");//

	eelam = eelam.replace(/ngs/g, "பௌ");
	eelam = eelam.replace(/Ngh/g, "போ");
	eelam = eelam.replace(/ngh/g, "பொ");
	eelam = eelam.replace(/gh/g, "பா");
	eelam = eelam.replace(/gp/g, "பி");
	eelam = eelam.replace(/gP/g, "பீ");


	eelam = eelam.replace(/G/g, "பு");
	eelam = eelam.replace(/ng/g, "பெ");
	eelam = eelam.replace(/Ng/g, "பே");
	eelam = eelam.replace(/ig/g, "பை");
	eelam = eelam.replace(/g;/g, "ப்");
	eelam = eelam.replace(/g/g, "ப");//

	eelam = eelam.replace(/nks/g, "மௌ");
	eelam = eelam.replace(/Nkh/g, "மோ");
	eelam = eelam.replace(/nkh/g, "மொ");
	eelam = eelam.replace(/kh/g, "மா");
	eelam = eelam.replace(/kp/g, "மி");
	eelam = eelam.replace(/kP/g, "மீ");
	eelam = eelam.replace(/K/g, "மு");
	eelam = eelam.replace(/%/g, "மூ");
	eelam = eelam.replace(/nk/g, "மெ");
	eelam = eelam.replace(/Nk/g, "மே");
	eelam = eelam.replace(/ik/g, "மை");
	eelam = eelam.replace(/k;/g, "ம்");
	eelam = eelam.replace(/k/g, "ம");//


	eelam = eelam.replace(/nas/g, "யௌ");
	eelam = eelam.replace(/Nah/g, "யோ");
	eelam = eelam.replace(/nah/g, "யொ");
	eelam = eelam.replace(/ah/g, "யா");
	eelam = eelam.replace(/ap/g, "யி");
	eelam = eelam.replace(/aP/g, "யீ");
	eelam = eelam.replace(/A/g, "யு");
	eelam = eelam.replace(/A+/g, "யூ");
	eelam = eelam.replace(/na/g, "யெ");
	eelam = eelam.replace(/Na/g, "யே");
	eelam = eelam.replace(/ia/g, "யை");
	eelam = eelam.replace(/a;/g, "ய்");
	eelam = eelam.replace(/a/g, "ய");//

	eelam = eelam.replace(/nus/g, "ரௌ");
	eelam = eelam.replace(/Nuh/g, "ரோ");
	eelam = eelam.replace(/nuh/g, "ரொ");
	eelam = eelam.replace(/uh/g, "ரா");
	eelam = eelam.replace(/up/g, "ரி");


	eelam = eelam.replace(/U/g, "ரு");
	eelam = eelam.replace(/&/g, "ரூ");
	eelam = eelam.replace(/nu/g, "ரெ");
	eelam = eelam.replace(/Nu/g, "ரே");
	eelam = eelam.replace(/iu/g, "ரை");

	eelam = eelam.replace(/u/g, "ர");//

	eelam = eelam.replace(/nys/g, "லௌ");
	eelam = eelam.replace(/Nyh/g, "லோ");
	eelam = eelam.replace(/nyh/g, "லொ");
	eelam = eelam.replace(/yh/g, "லா");
	eelam = eelam.replace(/yp/g, "லி");
	eelam = eelam.replace(/yP/g, "லீ");
	eelam = eelam.replace(/Yh/g, "லூ");
	eelam = eelam.replace(/Y}/g, "லூ");
	eelam = eelam.replace(/Y/g, "லு");
	eelam = eelam.replace(/ny/g, "லெ");
	eelam = eelam.replace(/Ny/g, "லே");
	eelam = eelam.replace(/iy/g, "லை");
	eelam = eelam.replace(/y;/g, "ல்");
	eelam = eelam.replace(/y/g, "ல");//

	eelam = eelam.replace(/nss/g, "ளௌ");
	eelam = eelam.replace(/Nsh/g, "ளோ");
	eelam = eelam.replace(/nsh/g, "ளொ");
	eelam = eelam.replace(/sh/g, "ளா");

	eelam = eelam.replace(/sP/g, "ளீ");
	eelam = eelam.replace(/Sh/g, "ளூ");
	eelam = eelam.replace(/S/g, "ளு");
	eelam = eelam.replace(/ns/g, "ளெ");
	eelam = eelam.replace(/Ns/g, "ளே");
	eelam = eelam.replace(/is/g, "ளை");
	eelam = eelam.replace(/s;/g, "ள்");
	eelam = eelam.replace(/s/g, "ள");//


	eelam = eelam.replace(/ntt/g, "வௌ");
	eelam = eelam.replace(/Nth/g, "வோ");
	eelam = eelam.replace(/nth/g, "வொ");
	eelam = eelam.replace(/th/g, "வா");
	eelam = eelam.replace(/tp/g, "வி");
	eelam = eelam.replace(/tP/g, "வீ");




	eelam = eelam.replace(/nt/g, "வெ");
	eelam = eelam.replace(/Nt/g, "வே");
	eelam = eelam.replace(/it/g, "வை");

	eelam = eelam.replace(/t;/g, "வ்");
	eelam = eelam.replace(/t/g, "வ");//


	eelam = eelam.replace(/noo/g, "ழௌ");
	eelam = eelam.replace(/Noh/g, "ழோ");
	eelam = eelam.replace(/noh/g, "ழொ");
	eelam = eelam.replace(/oh/g, "ழா");
	eelam = eelam.replace(/op/g, "ழி");
	eelam = eelam.replace(/oP/g, "ழீ");
	eelam = eelam.replace(/\*/g, "ழூ");
	eelam = eelam.replace(/O/g, "ழு");
	eelam = eelam.replace(/no/g, "ழெ");
	eelam = eelam.replace(/No/g, "ழே");
	eelam = eelam.replace(/io/g, "ழை");
	eelam = eelam.replace(/o;/g, "ழ்");
	eelam = eelam.replace(/o/g, "ழ");//

	eelam = eelam.replace(/nws/g, "றௌ");
	eelam = eelam.replace(/Nwh/g, "றோ");
	eelam = eelam.replace(/nwh/g, "றொ");
	eelam = eelam.replace(/wh/g, "றா");
	eelam = eelam.replace(/wp/g, "றி");
	eelam = eelam.replace(/wP/g, "றீ");
	eelam = eelam.replace(/Wh/g, "றூ");
	eelam = eelam.replace(/W}/g, "றூ");

	eelam = eelam.replace(/W/g, "று");
	eelam = eelam.replace(/nw/g, "றெ");
	eelam = eelam.replace(/Nw/g, "றே");
	eelam = eelam.replace(/iw/g, "றை");
	eelam = eelam.replace(/w;/g, "ற்");
	eelam = eelam.replace(/w/g, "ற");//

	eelam = eelam.replace(/n``/g, "ஹௌ");
	eelam = eelam.replace(/N`h/g, "ஹோ");
	eelam = eelam.replace(/n`h/g, "ஹொ");
	eelam = eelam.replace(/`h/g, "ஹா");
	eelam = eelam.replace(/`p/g, "ஹி");
	eelam = eelam.replace(/`P/g, "ஹீ");

	eelam = eelam.replace(/n`/g, "ஹெ");
	eelam = eelam.replace(/N`/g, "ஹே");
	eelam = eelam.replace(/i`/g, "ஹை");
	eelam = eelam.replace(/`;/g, "ஹ்");
	eelam = eelam.replace(/`/g, "ஹ");//

	eelam = eelam.replace(/ஹ\{/g, "ஹு");
	eelam = eelam.replace(/ஹ_/g, "ஹூ");

	eelam = eelam.replace(/n\\s/g, "ஷௌ");
	eelam = eelam.replace(/N\\h/g, "ஷோ");
	eelam = eelam.replace(/n\\h/g, "ஷொ");
	eelam = eelam.replace(/\\h/g, "ஷா");
	eelam = eelam.replace(/\\p/g, "ஷி");
	eelam = eelam.replace(/\\P/g, "ஷீ");

	eelam = eelam.replace(/n\\/g, "ஷெ");
	eelam = eelam.replace(/N\\/g, "ஷே");
	eelam = eelam.replace(/i\\/g, "ஷை");
	eelam = eelam.replace(/\\;/g, "ஷ்");
	eelam = eelam.replace(/\\/g, "ஷ");//

	eelam = eelam.replace(/ஷ\{/g, "ஷு");
	eelam = eelam.replace(/ஷ_/g, "ஷூ");
	eelam = eelam.replace(/~/g, "ஷ");
	eelam = eelam.replace(/~/g, "ஷ");



	eelam = eelam.replace(/n]s/g, "ஸௌ");
	eelam = eelam.replace(/N]h/g, "ஸோ");
	eelam = eelam.replace(/n]h/g, "ஸொ");
	eelam = eelam.replace(/]h/g, "ஸா");
	eelam = eelam.replace(/]p/g, "ஸி");
	eelam = eelam.replace(/]P/g, "ஸீ");

	eelam = eelam.replace(/n]/g, "ஸெ");
	eelam = eelam.replace(/N]/g, "ஸே");
	eelam = eelam.replace(/i]/g, "ஸை");
	eelam = eelam.replace(/];/g, "ஸ்");
	eelam = eelam.replace(/]/g, "ஸ");//

	eelam = eelam.replace(/ஸ\{/g, "ஸு");
	eelam = eelam.replace(/ஸ_/g, "ஸூ");


	eelam = eelam.replace(/>/g, "ää");
	eelam = eelam.replace(/m/g, "அ");
	eelam = eelam.replace(/M/g, "ஆ");
	eelam = eelam.replace(/</g, "ஈ");
	eelam = eelam.replace(/c/g, "உ");
	eelam = eelam.replace(/C/g, "ஊ");
	eelam = eelam.replace(/v/g, "எ");
	eelam = eelam.replace(/V/g, "ஏ");
	eelam = eelam.replace(/I/g, "ஐ");
	eelam = eelam.replace(/x/g, "ஒ")
	eelam = eelam.replace(/X/g, "ஓ");
	eelam = eelam.replace(/xs/g, "ஔ");



	eelam = eelam.replace(/\//g, "ஃ");

	eelam = eelam.replace(/@/g, "ளூ");

	eelam = eelam.replace(/,/g, "இ");

	eelam = eelam.replace(/=/g, "ஸ்ரீ");

	eelam = eelam.replace(/>/g, ",");

	eelam = eelam.replace(/T/g, "வு");

	eelam = eelam.replace(/சு10/g, "சூ");
	eelam = eelam.replace(/வு10/g, "வூ");
	eelam = eelam.replace(/வ10/g, "வூ");
	eelam = eelam.replace(/G\+/g, "பூ");
	eelam = eelam.replace(/ப10/g, "பூ");
	eelam = eelam.replace(/பு10/g, "பூ");
	eelam = eelam.replace(/A\+/g, "யூ");
	eelam = eelam.replace(/யு10/g, "யூ");
	eelam = eelam.replace(/ய10/g, "யூ");
	eelam = eelam.replace(/ää/g, ",");
	eelam = eelam.replace(/\"/g, "'");
	eelam = eelam.replace(/\‘/g, "'");
	eelam = eelam.replace(/\’/g, "'");
	eelam = eelam.replace(/\“/g, "'");
	eelam = eelam.replace(/\”/g, "'");
	eelam = eelam.replace(/…/g, "...");
   
	return eelam;   
}  

function kavi2unicode(ip) 
{   
	eelam = ip;
	eelam = eelam.replace(/b/g, "க்ஷ");
	eelam = eelam.replace(/ùக்ஷ\[/g, "க்ஷௌ");
	eelam = eelam.replace(/bô/g, "க்ஷா");
	eelam = eelam.replace(/·/g, "க்ஷி");
	eelam = eelam.replace(/Î/g, "க்ஷீ");
	eelam = eelam.replace(/bý/g, "க்ஷு");
	eelam = eelam.replace(/bþ/g, "க்ஷூ");
	eelam = eelam.replace(/ùb/g, "க்ஷெ");
	eelam = eelam.replace(/úb/g, "க்ஷே");
	eelam = eelam.replace(/ùbô/g, "க்ஷொ");
	eelam = eelam.replace(/úbô/g, "க்ஷோ");
	eelam = eelam.replace(/ûb/g, "க்ஷை");
	eelam = eelam.replace(/z/g, "க்ஷ்");

	eelam = eelam.replace(/_/g, "ஜ");
	eelam = eelam.replace(/ùஜ/g, "ஜெ");
	eelam = eelam.replace(/ùஜ\[/g, "ஜௌ");
	eelam = eelam.replace(/úஜô/g, "ஜோ");
	eelam = eelam.replace(/ùஜô/g, "ஜொ");
	eelam = eelam.replace(/ஜô/g, "ஜா");
	eelam = eelam.replace(/´/g, "ஜி");
	eelam = eelam.replace(/Ë/g, "ஜீ");
	eelam = eelam.replace(/ஜý/g, "ஜு");
	eelam = eelam.replace(/ஜþ/g, "ஜூ");
	eelam = eelam.replace(/úஜ/g, "ஜே");
	eelam = eelam.replace(/ûஜ/g, "ஜை");
	eelam = eelam.replace(/w/g, "ஜ்");////////4

	eelam = eelam.replace(/ùL\[/g, "கௌ");
	eelam = eelam.replace(/úLô/g, "கோ");
	eelam = eelam.replace(/ùLô/g, "கொ");
	eelam = eelam.replace(/Lô/g, "கா");
	eelam = eelam.replace(/¡/g, "கி");
	eelam = eelam.replace(/¸/g, "கீ");
	eelam = eelam.replace(/Ï/g, "கு");
	eelam = eelam.replace(/á/g, "கூ");
	eelam = eelam.replace(/ùL/g, "கெ");
	eelam = eelam.replace(/úL/g, "கே");
	eelam = eelam.replace(/ûL/g, "கை");
	eelam = eelam.replace(/d/g, "க்");
	eelam = eelam.replace(/L/g, "க");////////4

	eelam = eelam.replace(/ùM\[/g, "ஙௌ");
	eelam = eelam.replace(/úMô/g, "ஙோ");
	eelam = eelam.replace(/ùMô/g, "ஙொ");
	eelam = eelam.replace(/Mô/g, "ஙா");
	eelam = eelam.replace(/¢/g, "ஙி");
	eelam = eelam.replace(/¹/g, "ஙீ");
	eelam = eelam.replace(/Ð/g, "ஙு");
	eelam = eelam.replace(/â/g, "ஙூ");
	eelam = eelam.replace(/ùM/g, "ஙெ");
	eelam = eelam.replace(/úM/g, "ஙே");
	eelam = eelam.replace(/ûM/g, "ஙை");
	eelam = eelam.replace(/e/g, "ங்");
	eelam = eelam.replace(/M/g, "ங");////////4

	eelam = eelam.replace(/ùN\[/g, "சௌ");
	eelam = eelam.replace(/úNô/g, "சோ");
	eelam = eelam.replace(/ùNô/g, "சொ");
	eelam = eelam.replace(/Nô/g, "சா");
	eelam = eelam.replace(/£/g, "சி");
	eelam = eelam.replace(/º/g, "சீ");
	eelam = eelam.replace(/Ñ/g, "சு");
	eelam = eelam.replace(/ã/g, "சூ");
	eelam = eelam.replace(/ùN/g, "செ");
	eelam = eelam.replace(/úN/g, "சே");
	eelam = eelam.replace(/ûN/g, "சை");
	eelam = eelam.replace(/f/g, "ச்");
	eelam = eelam.replace(/N/g, "ச");////////4

	eelam = eelam.replace(/ùO\[/g, "ஞௌ");
	eelam = eelam.replace(/úOô/g, "ஞோ");
	eelam = eelam.replace(/ùOô/g, "ஞொ");
	eelam = eelam.replace(/Oô/g, "ஞா");
	eelam = eelam.replace(/¤/g, "ஞி");
	eelam = eelam.replace(/»/g, "ஞீ");
	eelam = eelam.replace(/Ò/g, "ஞு");
	eelam = eelam.replace(/ä/g, "ஞூ");
	eelam = eelam.replace(/ùO/g, "ஞெ");
	eelam = eelam.replace(/úO/g, "ஞே");
	eelam = eelam.replace(/ûO/g, "ஞை");
	eelam = eelam.replace(/g/g, "ஞ்");
	eelam = eelam.replace(/O/g, "ஞ");////////4

	eelam = eelam.replace(/ùP\[/g, "டௌ");
	eelam = eelam.replace(/úPô/g, "டோ");
	eelam = eelam.replace(/ùPô/g, "டொ");
	eelam = eelam.replace(/Pô/g, "டா");
	eelam = eelam.replace(/¥/g, "டி");
	eelam = eelam.replace(/¼/g, "டீ");
	eelam = eelam.replace(/Ó/g, "டு");
	eelam = eelam.replace(/å/g, "டூ");
	eelam = eelam.replace(/ùP/g, "டெ");
	eelam = eelam.replace(/úP/g, "டே");
	eelam = eelam.replace(/ûP/g, "டை");
	eelam = eelam.replace(/h/g, "ட்");
	eelam = eelam.replace(/P/g, "ட");////////4

	eelam = eelam.replace(/ùQ\[/g, "ணௌ");
	eelam = eelam.replace(/úQô/g, "ணோ");
	eelam = eelam.replace(/ùQô/g, "ணொ");
	eelam = eelam.replace(/Qô/g, "ணா");
	eelam = eelam.replace(/¦/g, "ணி");
	eelam = eelam.replace(/½/g, "ணீ");
	eelam = eelam.replace(/Ô/g, "ணு");
	eelam = eelam.replace(/æ/g, "ணூ");
	eelam = eelam.replace(/ùQ/g, "ணெ");
	eelam = eelam.replace(/úQ/g, "ணே");
	eelam = eelam.replace(/ûQ/g, "ணை");
	eelam = eelam.replace(/i/g, "ண்");
	eelam = eelam.replace(/Q/g, "ண");////////4

	eelam = eelam.replace(/ùR\[/g, "தௌ");
	eelam = eelam.replace(/úRô/g, "தோ");
	eelam = eelam.replace(/ùRô/g, "தொ");
	eelam = eelam.replace(/Rô/g, "தா");
	eelam = eelam.replace(/§/g, "தி");
	eelam = eelam.replace(/¾/g, "தீ");
	eelam = eelam.replace(/Õ/g, "து");
	eelam = eelam.replace(/ç/g, "தூ");
	eelam = eelam.replace(/ùR/g, "தெ");
	eelam = eelam.replace(/úR/g, "தே");
	eelam = eelam.replace(/ûR/g, "தை");
	eelam = eelam.replace(/j/g, "த்");
	eelam = eelam.replace(/R/g, "த");////////4

	eelam = eelam.replace(/ùS\[/g, "நௌ");
	eelam = eelam.replace(/úSô/g, "நோ");
	eelam = eelam.replace(/ùSô/g, "நொ");
	eelam = eelam.replace(/Sô/g, "நா");
	eelam = eelam.replace(/¨/g, "நி");
	eelam = eelam.replace(/¿/g, "நீ");
	eelam = eelam.replace(/Ö/g, "நு");
	eelam = eelam.replace(/è/g, "நூ");
	eelam = eelam.replace(/ùS/g, "நெ");
	eelam = eelam.replace(/úS/g, "நே");
	eelam = eelam.replace(/ûS/g, "நை");
	eelam = eelam.replace(/k/g, "ந்");
	eelam = eelam.replace(/S/g, "ந");////////4

	eelam = eelam.replace(/ù]\[/g, "னௌ");
	eelam = eelam.replace(/ú]ô/g, "னோ");
	eelam = eelam.replace(/ù]ô/g, "னொ");
	eelam = eelam.replace(/]ô/g, "னா");
	eelam = eelam.replace(/²/g, "னி");
	eelam = eelam.replace(/É/g, "னீ");
	eelam = eelam.replace(/à/g, "னு");
	eelam = eelam.replace(/ò/g, "னூ");
	eelam = eelam.replace(/ù]/g, "னெ");
	eelam = eelam.replace(/ú]/g, "னே");
	eelam = eelam.replace(/û]/g, "னை");
	eelam = eelam.replace(/u/g, "ன்");
	eelam = eelam.replace(/]/g, "ன");////////4

	eelam = eelam.replace(/ùT\[/g, "பௌ");
	eelam = eelam.replace(/úTô/g, "போ");
	eelam = eelam.replace(/ùTô/g, "பொ");
	eelam = eelam.replace(/Tô/g, "பா");
	eelam = eelam.replace(/©/g, "பி");
	eelam = eelam.replace(/À/g, "பீ");
	eelam = eelam.replace(/×/g, "பு");
	eelam = eelam.replace(/é/g, "பூ");
	eelam = eelam.replace(/ùT/g, "பெ");
	eelam = eelam.replace(/úT/g, "பே");
	eelam = eelam.replace(/ûT/g, "பை");
	eelam = eelam.replace(/l/g, "ப்");
	eelam = eelam.replace(/T/g, "ப");////////4

	eelam = eelam.replace(/ùU\[/g, "மௌ");
	eelam = eelam.replace(/úUô/g, "மோ");
	eelam = eelam.replace(/ùUô/g, "மொ");
	eelam = eelam.replace(/Uô/g, "மா");
	eelam = eelam.replace(/ª/g, "மி");
	eelam = eelam.replace(/Á/g, "மீ");
	eelam = eelam.replace(/Ø/g, "மு");
	eelam = eelam.replace(/ê/g, "மூ");
	eelam = eelam.replace(/ùU/g, "மெ");
	eelam = eelam.replace(/úU/g, "மே");
	eelam = eelam.replace(/ûU/g, "மை");
	eelam = eelam.replace(/m/g, "ம்");
	eelam = eelam.replace(/U/g, "ம");////////4

	eelam = eelam.replace(/ùV\[/g, "யௌ");
	eelam = eelam.replace(/úVô/g, "யோ");
	eelam = eelam.replace(/ùVô/g, "யொ");
	eelam = eelam.replace(/Vô/g, "யா");
	eelam = eelam.replace(/«/g, "யி");
	eelam = eelam.replace(/Â/g, "யீ");
	eelam = eelam.replace(/Ù/g, "யு");
	eelam = eelam.replace(/ë/g, "யூ");
	eelam = eelam.replace(/ùV/g, "யெ");
	eelam = eelam.replace(/úV/g, "யே");
	eelam = eelam.replace(/ûV/g, "யை");
	eelam = eelam.replace(/n/g, "ய்");
	eelam = eelam.replace(/V/g, "ய");////////4


	eelam = eelam.replace(/ùW\[/g, "ரௌ");
	eelam = eelam.replace(/úWô/g, "ரோ");
	eelam = eelam.replace(/ùWô/g, "ரொ");
	eelam = eelam.replace(/Wô/g, "ரா");
	eelam = eelam.replace(/¬/g, "ரி");
	eelam = eelam.replace(/Ã/g, "ரீ");
	eelam = eelam.replace(/Ú/g, "ரு");
	eelam = eelam.replace(/ì/g, "ரூ");
	eelam = eelam.replace(/ùW/g, "ரெ");
	eelam = eelam.replace(/úW/g, "ரே");
	eelam = eelam.replace(/ûW/g, "ரை");
	eelam = eelam.replace(/o/g, "ர்");
	eelam = eelam.replace(/W/g, "ர");////////4


	eelam = eelam.replace(/ùX\[/g, "லௌ");
	eelam = eelam.replace(/úXô/g, "லோ");
	eelam = eelam.replace(/ùXô/g, "லொ");
	eelam = eelam.replace(/Xô/g, "லா");
	eelam = eelam.replace(/#/g, "லி");
	eelam = eelam.replace(/\-/g, "லி");
	eelam = eelam.replace(/Ä/g, "லீ");
	eelam = eelam.replace(/Û/g, "லு");
	eelam = eelam.replace(/í/g, "லூ");
	eelam = eelam.replace(/ùX/g, "லெ");
	eelam = eelam.replace(/úX/g, "லே");
	eelam = eelam.replace(/ûX/g, "லை");
	eelam = eelam.replace(/p/g, "ல்");
	eelam = eelam.replace(/X/g, "ல");////////4


	eelam = eelam.replace(/ù\[\[/g, "ளௌ");
	eelam = eelam.replace(/ú\[ô/g, "ளோ");
	eelam = eelam.replace(/ù\[ô/g, "ளொ");
	eelam = eelam.replace(/°/g, "ளி");
	eelam = eelam.replace(/Ç/g, "ளீ");
	eelam = eelam.replace(/Þ/g, "ளு");
	eelam = eelam.replace(/ð/g, "ளூ");
	eelam = eelam.replace(/ù\[/g, "ளெ");
	eelam = eelam.replace(/ú\[/g, "ளே");
	eelam = eelam.replace(/s/g, "ள்");
	eelam = eelam.replace(/\[/g, "ள");
	eelam = eelam.replace(/ûள/g, "ளை");
	eelam = eelam.replace(/ளô/g, "ளா");
	////////4

	eelam = eelam.replace(/ùY\[/g, "வௌ");
	eelam = eelam.replace(/úYô/g, "வோ");
	eelam = eelam.replace(/ùYô/g, "வொ");
	eelam = eelam.replace(/Yô/g, "வா");
	eelam = eelam.replace(/®/g, "வி");
	eelam = eelam.replace(/Å/g, "வீ");
	eelam = eelam.replace(/Ü/g, "வு");
	eelam = eelam.replace(/î/g, "வூ");
	eelam = eelam.replace(/ùY/g, "வெ");
	eelam = eelam.replace(/úY/g, "வே");
	eelam = eelam.replace(/ûY/g, "வை");
	eelam = eelam.replace(/q/g, "வ்");
	eelam = eelam.replace(/Y/g, "வ");////////4

	eelam = eelam.replace(/ùZ\[/g, "ழௌ");
	eelam = eelam.replace(/úZô/g, "ழோ");
	eelam = eelam.replace(/ùZô/g, "ழொ");
	eelam = eelam.replace(/Zô/g, "ழா");
	eelam = eelam.replace(/¯/g, "ழி");
	eelam = eelam.replace(/Æ/g, "ழீ");
	eelam = eelam.replace(/Ý/g, "ழு");
	eelam = eelam.replace(/ï/g, "ழூ");
	eelam = eelam.replace(/ùZ/g, "ழெ");
	eelam = eelam.replace(/úZ/g, "ழே");
	eelam = eelam.replace(/ûZ/g, "ழை");
	eelam = eelam.replace(/r/g, "ழ்");
	eelam = eelam.replace(/Z/g, "ழ");////////4

	eelam = eelam.replace(/ù\\\[/g, "றௌ");
	eelam = eelam.replace(/ú\\ô/g, "றோ");
	eelam = eelam.replace(/ù\\ô/g, "றொ");
	eelam = eelam.replace(/\\ô/g, "றா");
	eelam = eelam.replace(/±/g, "றி");
	eelam = eelam.replace(/È/g, "றீ");
	eelam = eelam.replace(/ß/g, "று");
	eelam = eelam.replace(/ñ/g, "றூ");
	eelam = eelam.replace(/ù\\/g, "றெ");
	eelam = eelam.replace(/ú\\/g, "றே");
	eelam = eelam.replace(/û\\/g, "றை");
	eelam = eelam.replace(/t/g, "ற்");
	eelam = eelam.replace(/\\/g, "ற");////////4
	eelam = eelam.replace(/\^/g, "ஸ");
	eelam = eelam.replace(/ெஸள/g, "ஸௌ");
	eelam = eelam.replace(/ú^ô/g, "ஸோ");
	eelam = eelam.replace(/ù^ô/g, "ஸொ");
	eelam = eelam.replace(/ஸô/g, "ஸா");
	eelam = eelam.replace(/³/g, "ஸி");
	eelam = eelam.replace(/Ê/g, "ஸீ");
	eelam = eelam.replace(/ஸý/g, "ஸு");
	eelam = eelam.replace(/^þ/g, "ஸூ");
	eelam = eelam.replace(/ù^/g, "ஸெ");
	eelam = eelam.replace(/ú^/g, "ஸே");
	eelam = eelam.replace(/ûஸ/g, "ஸை");
	eelam = eelam.replace(/v/g, "ஸ்");////////4
	eelam = eelam.replace(/@/g, "அ");
	eelam = eelam.replace(/A/g, "ஆ");
	eelam = eelam.replace(/B/g, "இ");
	eelam = eelam.replace(/C/g, "ஈ");
	eelam = eelam.replace(/D/g, "உ");
	eelam = eelam.replace(/E/g, "ஊ");
	eelam = eelam.replace(/F/g, "எ");
	eelam = eelam.replace(/G/g, "ஏ");
	eelam = eelam.replace(/H/g, "ஐ");
	eelam = eelam.replace(/I/g, "ஒ")
	eelam = eelam.replace(/J/g, "ஓ");
	eelam = eelam.replace(/K/g, "ஃ");
	eelam = eelam.replace(/I\[/g, "ஔ");
	eelam = eelam.replace(/c/g, "ஸ்ரீ");
	eelam = eelam.replace(/a/g, "ஹ");
	eelam = eelam.replace(/ùஹ\[/g, "ஹௌ");
	eelam = eelam.replace(/úஹô/g, "ஹோ");
	eelam = eelam.replace(/ùஹô/g, "ஹொ");
	eelam = eelam.replace(/ஹô/g, "ஹா");
	eelam = eelam.replace(/¶/g, "ஹி");
	eelam = eelam.replace(/Í/g, "ஹீ");
	eelam = eelam.replace(/ஹý/g, "ஹு");
	eelam = eelam.replace(/ஹþ/g, "ஹூ");
	eelam = eelam.replace(/ùஹ/g, "ஹெ");
	eelam = eelam.replace(/úஹ/g, "ஹே");
	eelam = eelam.replace(/ûஹ/g, "ஹை");
	eelam = eelam.replace(/y/g, "ஹ்");////////4
	eelam = eelam.replace(/`/g, "ஷ");
	eelam = eelam.replace(/ˆ/g, "ஷ");
	eelam = eelam.replace(/ùஷ/g, "ஷெ");
	eelam = eelam.replace(/ùஷ\[/g, "ஷௌ");
	eelam = eelam.replace(/úஷô/g, "ஷோ");
	eelam = eelam.replace(/ùஷô/g, "ஷொ");
	eelam = eelam.replace(/ஷô/g, "ஷா");
	eelam = eelam.replace(/µ/g, "ஷி");
	eelam = eelam.replace(/Ì/g, "ஷீ");
	eelam = eelam.replace(/ஷý/g, "ஷு");
	eelam = eelam.replace(/ஷþ/g, "ஷூ");
	eelam = eelam.replace(/úஷ/g, "ஷே");
	eelam = eelam.replace(/ûஷ/g, "ஷை");
	eelam = eelam.replace(/x/g, "ஷ்");////////4
	eelam = eelam.replace(/\‘/g, "'");
	eelam = eelam.replace(/\’/g, "'");
	eelam = eelam.replace(/\“/g, "'");
	eelam = eelam.replace(/\”/g, "'");
	eelam = eelam.replace(/\"/g, "'");
	eelam = eelam.replace(/…/g, "...");

	return eelam;   
}  
function tanglish(ip) {   
	eelam = ip;
	eelam = eelam.replace(/njau/g, "ஞௌ");   
	eelam = eelam.replace(/njai/g, "ஞை");   
	eelam = eelam.replace(/njee/g, "ஞே");   
	eelam = eelam.replace(/njoo/g, "ஞோ");   
	eelam = eelam.replace(/njaa/g, "ஞா");   
	eelam = eelam.replace(/njuu/g, "ஞூ");   
	eelam = eelam.replace(/njii/g, "ஞீ");   
	eelam = eelam.replace(/nja/g, "ஞ");   
	eelam = eelam.replace(/nji/g, "ஞி");   
	eelam = eelam.replace(/njI/g, "ஞீ");   
	eelam = eelam.replace(/njA/g, "ஞா");   
	eelam = eelam.replace(/nje/g, "ஞெ");   
	eelam = eelam.replace(/njE/g, "ஞே");   
	eelam = eelam.replace(/njo/g, "ஞொ");   
	eelam = eelam.replace(/njO/g, "ஞோ");   
	eelam = eelam.replace(/nju/g, "ஞு");   
	eelam = eelam.replace(/njU/g, "ஞூ");   
	eelam = eelam.replace(/nj/g, "ஞ்");   
	eelam = eelam.replace(/ngau/g, "ஙௌ");   
	eelam = eelam.replace(/ngai/g, "ஙை");   
	eelam = eelam.replace(/ngee/g, "ஙே");   
	eelam = eelam.replace(/ngoo/g, "ஙோ");   
	eelam = eelam.replace(/ngaa/g, "ஙா");   
	eelam = eelam.replace(/nguu/g, "ஙூ");   
	eelam = eelam.replace(/ngii/g, "ஙீ");   
	eelam = eelam.replace(/nga/g, "ங");   
	eelam = eelam.replace(/ngi/g, "ஙி");   
	eelam = eelam.replace(/ngI/g, "ஙீ");   
	eelam = eelam.replace(/ngA/g, "ஙா");   
	eelam = eelam.replace(/nge/g, "ஙெ");   
	eelam = eelam.replace(/ngE/g, "ஙே");   
	eelam = eelam.replace(/ngo/g, "ஙொ");   
	eelam = eelam.replace(/ngO/g, "ஙோ");   
	eelam = eelam.replace(/ngu/g, "ஙு");   
	eelam = eelam.replace(/ngU/g, "ஙூ");   
	eelam = eelam.replace(/ng/g, "ங்");   
	eelam = eelam.replace(/shau/g, "ஷௌ");   
	eelam = eelam.replace(/shai/g, "ஷை");   
	eelam = eelam.replace(/shee/g, "ஷே");   
	eelam = eelam.replace(/shoo/g, "ஷோ");   
	eelam = eelam.replace(/shaa/g, "ஷா");   
	eelam = eelam.replace(/shuu/g, "ஷூ");   
	eelam = eelam.replace(/shii/g, "ஷீ");   
	eelam = eelam.replace(/sha/g, "ஷ");   
	eelam = eelam.replace(/shi/g, "ஷி");   
	eelam = eelam.replace(/shI/g, "ஷீ");   
	eelam = eelam.replace(/shA/g, "ஷா");   
	eelam = eelam.replace(/she/g, "ஷெ");   
	eelam = eelam.replace(/shE/g, "ஷே");   
	eelam = eelam.replace(/sho/g, "ஷொ");   
	eelam = eelam.replace(/shO/g, "ஷோ");   
	eelam = eelam.replace(/shu/g, "ஷு");   
	eelam = eelam.replace(/shU/g, "ஷூ");   
	eelam = eelam.replace(/sh/g, "ஷ்");   
	eelam = eelam.replace(/ nau/g, " நௌ");   
	eelam = eelam.replace(/ nai/g, " நை");   
	eelam = eelam.replace(/ nee/g, " நே");   
	eelam = eelam.replace(/ noo/g, " நோ");   
	eelam = eelam.replace(/ naa/g, " நா");   
	eelam = eelam.replace(/ nuu/g, " நூ");   
	eelam = eelam.replace(/ nii/g, " நீ");   
	eelam = eelam.replace(/ na/g, " ந");   
	eelam = eelam.replace(/ ni/g, " நி");   
	eelam = eelam.replace(/ nI/g, " நீ");   
	eelam = eelam.replace(/ nA/g, " நா");   
	eelam = eelam.replace(/ ne/g, " நெ");   
	eelam = eelam.replace(/ nE/g, " நே");   
	eelam = eelam.replace(/ no/g, " நொ");   
	eelam = eelam.replace(/ nO/g, " நோ");   
	eelam = eelam.replace(/ nu/g, " நு");   
	eelam = eelam.replace(/ nU/g, " நூ");   
	eelam = eelam.replace(/ nth/g, " ந்");   
	eelam = eelam.replace(/-nau/g, "நௌ");   
	eelam = eelam.replace(/-nai/g, "நை");   
	eelam = eelam.replace(/-nee/g, "நே");   
	eelam = eelam.replace(/-noo/g, "நோ");   
	eelam = eelam.replace(/-naa/g, "நா");   
	eelam = eelam.replace(/-nuu/g, "நூ");   
	eelam = eelam.replace(/-nii/g, "நீ");   
	eelam = eelam.replace(/-na/g, "ந");   
	eelam = eelam.replace(/-ni/g, "நி");   
	eelam = eelam.replace(/-nI/g, "நீ");   
	eelam = eelam.replace(/-nA/g, "நா");   
	eelam = eelam.replace(/-ne/g, "நெ");   
	eelam = eelam.replace(/-nE/g, "நே");   
	eelam = eelam.replace(/-no/g, "நொ");   
	eelam = eelam.replace(/-nO/g, "நோ");   
	eelam = eelam.replace(/-nu/g, "நு");   
	eelam = eelam.replace(/-nU/g, "நூ");   
	eelam = eelam.replace(/n-au/g, "நௌ");   
	eelam = eelam.replace(/n-ai/g, "நை");   
	eelam = eelam.replace(/n-ee/g, "நே");   
	eelam = eelam.replace(/n-oo/g, "நோ");   
	eelam = eelam.replace(/n-aa/g, "நா");   
	eelam = eelam.replace(/n-uu/g, "நூ");   
	eelam = eelam.replace(/n-ii/g, "நீ");   
	eelam = eelam.replace(/n-a/g, "ந");   
	eelam = eelam.replace(/n-i/g, "நி");   
	eelam = eelam.replace(/n-I/g, "நீ");   
	eelam = eelam.replace(/n-A/g, "நா");   
	eelam = eelam.replace(/n-e/g, "நெ");   
	eelam = eelam.replace(/n-E/g, "நே");   
	eelam = eelam.replace(/n-o/g, "நொ");   
	eelam = eelam.replace(/n-O/g, "நோ");   
	eelam = eelam.replace(/n-u/g, "நு");   
	eelam = eelam.replace(/n-U/g, "நூ");   
	eelam = eelam.replace(/wau/g, "நௌ");   
	eelam = eelam.replace(/wai/g, "நை");   
	eelam = eelam.replace(/wee/g, "நே");   
	eelam = eelam.replace(/woo/g, "நோ");   
	eelam = eelam.replace(/waa/g, "நா");   
	eelam = eelam.replace(/wuu/g, "நூ");   
	eelam = eelam.replace(/wii/g, "நீ");   
	eelam = eelam.replace(/wa/g, "ந");   
	eelam = eelam.replace(/wi/g, "நி");   
	eelam = eelam.replace(/wI/g, "நீ");   
	eelam = eelam.replace(/wA/g, "நா");   
	eelam = eelam.replace(/we/g, "நெ");   
	eelam = eelam.replace(/wE/g, "நே");   
	eelam = eelam.replace(/wo/g, "நொ");   
	eelam = eelam.replace(/wO/g, "நோ");   
	eelam = eelam.replace(/wu/g, "நு");   
	eelam = eelam.replace(/wU/g, "நூ");   
	eelam = eelam.replace(/ n/g, " ந்");   
	eelam = eelam.replace(/n-/g, "ந்");   
	eelam = eelam.replace(/-n/g, "ந்");   
	eelam = eelam.replace(/w/g, "ந்");   
	eelam = eelam.replace(/nthau/g, "ந்தௌ");   
	eelam = eelam.replace(/nthai/g, "ந்தை");   
	eelam = eelam.replace(/nthee/g, "ந்தே");   
	eelam = eelam.replace(/nthoo/g, "ந்தோ");   
	eelam = eelam.replace(/nthaa/g, "ந்தா");   
	eelam = eelam.replace(/nthuu/g, "ந்தூ");   
	eelam = eelam.replace(/nthii/g, "ந்தீ");   
	eelam = eelam.replace(/ntha/g, "ந்த");   
	eelam = eelam.replace(/nthi/g, "ந்தி");   
	eelam = eelam.replace(/nthI/g, "ந்தீ");   
	eelam = eelam.replace(/nthA/g, "ந்தா");   
	eelam = eelam.replace(/nthe/g, "ந்தெ");   
	eelam = eelam.replace(/nthE/g, "ந்தே");   
	eelam = eelam.replace(/ntho/g, "ந்தொ");   
	eelam = eelam.replace(/nthO/g, "ந்தோ");   
	eelam = eelam.replace(/nthu/g, "ந்து");   
	eelam = eelam.replace(/nthU/g, "ந்தூ");   
	eelam = eelam.replace(/nth/g, "ந்");   
	eelam = eelam.replace(/dhau/g, "தௌ");   
	eelam = eelam.replace(/dhai/g, "தை");   
	eelam = eelam.replace(/dhee/g, "தே");   
	eelam = eelam.replace(/dhoo/g, "தோ");   
	eelam = eelam.replace(/dhaa/g, "தா");   
	eelam = eelam.replace(/dhuu/g, "தூ");   
	eelam = eelam.replace(/dhii/g, "தீ");   
	eelam = eelam.replace(/dha/g, "த");   
	eelam = eelam.replace(/dhi/g, "தி");   
	eelam = eelam.replace(/dhI/g, "தீ");   
	eelam = eelam.replace(/dhA/g, "தா");   
	eelam = eelam.replace(/dhe/g, "தெ");   
	eelam = eelam.replace(/dhE/g, "தே");   
	eelam = eelam.replace(/dho/g, "தொ");   
	eelam = eelam.replace(/dhO/g, "தோ");   
	eelam = eelam.replace(/dhu/g, "து");   
	eelam = eelam.replace(/dhU/g, "தூ");   
	eelam = eelam.replace(/dh/g, "த்");   
	eelam = eelam.replace(/chau/g, "சௌ");   
	eelam = eelam.replace(/chai/g, "சை");   
	eelam = eelam.replace(/chee/g, "சே");   
	eelam = eelam.replace(/choo/g, "சோ");   
	eelam = eelam.replace(/chaa/g, "சா");   
	eelam = eelam.replace(/chuu/g, "சூ");   
	eelam = eelam.replace(/chii/g, "சீ");   
	eelam = eelam.replace(/cha/g, "ச");   
	eelam = eelam.replace(/chi/g, "சி");   
	eelam = eelam.replace(/chI/g, "சீ");   
	eelam = eelam.replace(/chA/g, "சா");   
	eelam = eelam.replace(/che/g, "செ");   
	eelam = eelam.replace(/chE/g, "சே");   
	eelam = eelam.replace(/cho/g, "சொ");   
	eelam = eelam.replace(/chO/g, "சோ");   
	eelam = eelam.replace(/chu/g, "சு");   
	eelam = eelam.replace(/chU/g, "சூ");   
	eelam = eelam.replace(/ch/g, "ச்");   
	eelam = eelam.replace(/zhau/g, "ழௌ");   
	eelam = eelam.replace(/zhai/g, "ழை");   
	eelam = eelam.replace(/zhee/g, "ழே");   
	eelam = eelam.replace(/zhoo/g, "ழோ");   
	eelam = eelam.replace(/zhaa/g, "ழா");   
	eelam = eelam.replace(/zhuu/g, "ழூ");   
	eelam = eelam.replace(/zhii/g, "ழீ");   
	eelam = eelam.replace(/zha/g, "ழ");   
	eelam = eelam.replace(/zhi/g, "ழி");   
	eelam = eelam.replace(/zhI/g, "ழீ");   
	eelam = eelam.replace(/zhA/g, "ழா");   
	eelam = eelam.replace(/zhe/g, "ழெ");   
	eelam = eelam.replace(/zhE/g, "ழே");   
	eelam = eelam.replace(/zho/g, "ழொ");   
	eelam = eelam.replace(/zhO/g, "ழோ");   
	eelam = eelam.replace(/zhu/g, "ழு");   
	eelam = eelam.replace(/zhU/g, "ழூ");   
	eelam = eelam.replace(/zh/g, "ழ்");   
	eelam = eelam.replace(/zau/g, "ழௌ");   
	eelam = eelam.replace(/zai/g, "ழை");   
	eelam = eelam.replace(/zee/g, "ழே");   
	eelam = eelam.replace(/zoo/g, "ழோ");   
	eelam = eelam.replace(/zaa/g, "ழா");   
	eelam = eelam.replace(/zuu/g, "ழூ");   
	eelam = eelam.replace(/zii/g, "ழீ");   
	eelam = eelam.replace(/za/g, "ழ");   
	eelam = eelam.replace(/zi/g, "ழி");   
	eelam = eelam.replace(/zI/g, "ழீ");   
	eelam = eelam.replace(/zA/g, "ழா");   
	eelam = eelam.replace(/ze/g, "ழெ");   
	eelam = eelam.replace(/zE/g, "ழே");   
	eelam = eelam.replace(/zo/g, "ழொ");   
	eelam = eelam.replace(/zO/g, "ழோ");   
	eelam = eelam.replace(/zu/g, "ழு");   
	eelam = eelam.replace(/zU/g, "ழூ");   
	eelam = eelam.replace(/z/g, "ழ்");   
	eelam = eelam.replace(/jau/g, "ஜௌ");   
	eelam = eelam.replace(/jai/g, "ஜை");   
	eelam = eelam.replace(/jee/g, "ஜே");   
	eelam = eelam.replace(/joo/g, "ஜோ");   
	eelam = eelam.replace(/jaa/g, "ஜா");   
	eelam = eelam.replace(/juu/g, "ஜூ");   
	eelam = eelam.replace(/jii/g, "ஜீ");   
	eelam = eelam.replace(/ja/g, "ஜ");   
	eelam = eelam.replace(/ji/g, "ஜி");   
	eelam = eelam.replace(/jI/g, "ஜீ");   
	eelam = eelam.replace(/jA/g, "ஜா");   
	eelam = eelam.replace(/je/g, "ஜெ");   
	eelam = eelam.replace(/jE/g, "ஜே");   
	eelam = eelam.replace(/jo/g, "ஜொ");   
	eelam = eelam.replace(/jO/g, "ஜோ");   
	eelam = eelam.replace(/ju/g, "ஜு");   
	eelam = eelam.replace(/jU/g, "ஜூ");   
	eelam = eelam.replace(/j/g, "ஜ்");   
	eelam = eelam.replace(/thau/g, "தௌ");   
	eelam = eelam.replace(/thai/g, "தை");   
	eelam = eelam.replace(/thee/g, "தே");   
	eelam = eelam.replace(/thoo/g, "தோ");   
	eelam = eelam.replace(/thaa/g, "தா");   
	eelam = eelam.replace(/thuu/g, "தூ");   
	eelam = eelam.replace(/thii/g, "தீ");   
	eelam = eelam.replace(/tha/g, "த");   
	eelam = eelam.replace(/thi/g, "தி");   
	eelam = eelam.replace(/thI/g, "தீ");   
	eelam = eelam.replace(/thA/g, "தா");   
	eelam = eelam.replace(/the/g, "தெ");   
	eelam = eelam.replace(/thE/g, "தே");   
	eelam = eelam.replace(/tho/g, "தொ");   
	eelam = eelam.replace(/thO/g, "தோ");   
	eelam = eelam.replace(/thu/g, "து");   
	eelam = eelam.replace(/thU/g, "தூ");   
	eelam = eelam.replace(/th/g, "த்");   
	eelam = eelam.replace(/-hau/g, "ஹௌ");   
	eelam = eelam.replace(/-hai/g, "ஹை");   
	eelam = eelam.replace(/-hee/g, "ஹே");   
	eelam = eelam.replace(/-hoo/g, "ஹோ");   
	eelam = eelam.replace(/-haa/g, "ஹா");   
	eelam = eelam.replace(/-huu/g, "ஹூ");   
	eelam = eelam.replace(/-hii/g, "ஹீ");   
	eelam = eelam.replace(/-ha/g, "ஹ");   
	eelam = eelam.replace(/-hi/g, "ஹி");   
	eelam = eelam.replace(/-hI/g, "ஹீ");   
	eelam = eelam.replace(/-hA/g, "ஹா");   
	eelam = eelam.replace(/-he/g, "ஹெ");   
	eelam = eelam.replace(/-hE/g, "ஹே");   
	eelam = eelam.replace(/-ho/g, "ஹொ");   
	eelam = eelam.replace(/-hO/g, "ஹோ");   
	eelam = eelam.replace(/-hu/g, "ஹு");   
	eelam = eelam.replace(/-hU/g, "ஹூ");   
	eelam = eelam.replace(/-h/g, "ஹ்");   
	eelam = eelam.replace(/hau/g, "கௌ");   
	eelam = eelam.replace(/hai/g, "கை");   
	eelam = eelam.replace(/hee/g, "கே");   
	eelam = eelam.replace(/hoo/g, "கோ");   
	eelam = eelam.replace(/haa/g, "கா");   
	eelam = eelam.replace(/huu/g, "கூ");   
	eelam = eelam.replace(/hii/g, "கீ");   
	eelam = eelam.replace(/ha/g, "க");   
	eelam = eelam.replace(/hi/g, "கி");   
	eelam = eelam.replace(/hI/g, "கீ");   
	eelam = eelam.replace(/hA/g, "கா");   
	eelam = eelam.replace(/he/g, "கெ");   
	eelam = eelam.replace(/hE/g, "கே");   
	eelam = eelam.replace(/ho/g, "கொ");   
	eelam = eelam.replace(/hO/g, "கோ");   
	eelam = eelam.replace(/hu/g, "கு");   
	eelam = eelam.replace(/hU/g, "கூ");   
	eelam = eelam.replace(/h/g, "க்");   
	eelam = eelam.replace(/kau/g, "கௌ");   
	eelam = eelam.replace(/kai/g, "கை");   
	eelam = eelam.replace(/kee/g, "கே");   
	eelam = eelam.replace(/koo/g, "கோ");   
	eelam = eelam.replace(/kaa/g, "கா");   
	eelam = eelam.replace(/kuu/g, "கூ");   
	eelam = eelam.replace(/kii/g, "கீ");   
	eelam = eelam.replace(/ka/g, "க");   
	eelam = eelam.replace(/ki/g, "கி");   
	eelam = eelam.replace(/kI/g, "கீ");   
	eelam = eelam.replace(/kA/g, "கா");   
	eelam = eelam.replace(/ke/g, "கெ");   
	eelam = eelam.replace(/kE/g, "கே");   
	eelam = eelam.replace(/ko/g, "கொ");   
	eelam = eelam.replace(/kO/g, "கோ");   
	eelam = eelam.replace(/ku/g, "கு");   
	eelam = eelam.replace(/kU/g, "கூ");   
	eelam = eelam.replace(/k/g, "க்");   
	eelam = eelam.replace(/-sau/g, "ஸௌ");   
	eelam = eelam.replace(/-sai/g, "ஸை");   
	eelam = eelam.replace(/-see/g, "ஸே");   
	eelam = eelam.replace(/-soo/g, "ஸோ");   
	eelam = eelam.replace(/-saa/g, "ஸா");   
	eelam = eelam.replace(/-suu/g, "ஸூ");   
	eelam = eelam.replace(/-sii/g, "ஸீ");   
	eelam = eelam.replace(/-sa/g, "ஸ");   
	eelam = eelam.replace(/-si/g, "ஸி");   
	eelam = eelam.replace(/-sI/g, "ஸீ");   
	eelam = eelam.replace(/-sA/g, "ஸா");   
	eelam = eelam.replace(/-se/g, "ஸெ");   
	eelam = eelam.replace(/-sE/g, "ஸே");   
	eelam = eelam.replace(/-so/g, "ஸொ");   
	eelam = eelam.replace(/-sO/g, "ஸோ");   
	eelam = eelam.replace(/-su/g, "ஸு");   
	eelam = eelam.replace(/-sU/g, "ஸூ");   
	eelam = eelam.replace(/-s/g, "ஸ்");   
	eelam = eelam.replace(/Sau/g, "ஸௌ");   
	eelam = eelam.replace(/Sai/g, "ஸை");   
	eelam = eelam.replace(/See/g, "ஸே");   
	eelam = eelam.replace(/Soo/g, "ஸோ");   
	eelam = eelam.replace(/Saa/g, "ஸா");   
	eelam = eelam.replace(/Suu/g, "ஸூ");   
	eelam = eelam.replace(/Sii/g, "ஸீ");   
	eelam = eelam.replace(/Sa/g, "ஸ");   
	eelam = eelam.replace(/Si/g, "ஸி");   
	eelam = eelam.replace(/SI/g, "ஸீ");   
	eelam = eelam.replace(/SA/g, "ஸா");   
	eelam = eelam.replace(/Se/g, "ஸெ");   
	eelam = eelam.replace(/SE/g, "ஸே");   
	eelam = eelam.replace(/So/g, "ஸொ");   
	eelam = eelam.replace(/SO/g, "ஸோ");   
	eelam = eelam.replace(/Su/g, "ஸு");   
	eelam = eelam.replace(/SU/g, "ஸூ");   
	eelam = eelam.replace(/S/g, "ஸ்");   
	eelam = eelam.replace(/rau/g, "ரௌ");   
	eelam = eelam.replace(/rai/g, "ரை");   
	eelam = eelam.replace(/ree/g, "ரே");   
	eelam = eelam.replace(/roo/g, "ரோ");   
	eelam = eelam.replace(/raa/g, "ரா");   
	eelam = eelam.replace(/ruu/g, "ரூ");   
	eelam = eelam.replace(/rii/g, "ரீ");   
	eelam = eelam.replace(/ra/g, "ர");   
	eelam = eelam.replace(/ri/g, "ரி");   
	eelam = eelam.replace(/rI/g, "ரீ");   
	eelam = eelam.replace(/rA/g, "ரா");   
	eelam = eelam.replace(/re/g, "ரெ");   
	eelam = eelam.replace(/rE/g, "ரே");   
	eelam = eelam.replace(/ro/g, "ரொ");   
	eelam = eelam.replace(/rO/g, "ரோ");   
	eelam = eelam.replace(/ru/g, "ரு");   
	eelam = eelam.replace(/rU/g, "ரூ");   
	eelam = eelam.replace(/r/g, "ர்");   
	eelam = eelam.replace(/Rau/g, "றௌ");   
	eelam = eelam.replace(/Rai/g, "றை");   
	eelam = eelam.replace(/Ree/g, "றே");   
	eelam = eelam.replace(/Roo/g, "றோ");   
	eelam = eelam.replace(/Raa/g, "றா");   
	eelam = eelam.replace(/Ruu/g, "றூ");   
	eelam = eelam.replace(/Rii/g, "றீ");   
	eelam = eelam.replace(/Ra/g, "ற");   
	eelam = eelam.replace(/Ri/g, "றி");   
	eelam = eelam.replace(/RI/g, "றீ");   
	eelam = eelam.replace(/RA/g, "றா");   
	eelam = eelam.replace(/Re/g, "றெ");   
	eelam = eelam.replace(/RE/g, "றே");   
	eelam = eelam.replace(/Ro/g, "றொ");   
	eelam = eelam.replace(/RO/g, "றோ");   
	eelam = eelam.replace(/Ru/g, "று");   
	eelam = eelam.replace(/RU/g, "றூ");   
	eelam = eelam.replace(/R/g, "ற்");   
	eelam = eelam.replace(/tau/g, "டௌ");   
	eelam = eelam.replace(/tai/g, "டை");   
	eelam = eelam.replace(/tee/g, "டே");   
	eelam = eelam.replace(/too/g, "டோ");   
	eelam = eelam.replace(/taa/g, "டா");   
	eelam = eelam.replace(/tuu/g, "டூ");   
	eelam = eelam.replace(/tii/g, "டீ");   
	eelam = eelam.replace(/ta/g, "ட");   
	eelam = eelam.replace(/ti/g, "டி");   
	eelam = eelam.replace(/tI/g, "டீ");   
	eelam = eelam.replace(/tA/g, "டா");   
	eelam = eelam.replace(/te/g, "டெ");   
	eelam = eelam.replace(/tE/g, "டே");   
	eelam = eelam.replace(/to/g, "டொ");   
	eelam = eelam.replace(/tO/g, "டோ");   
	eelam = eelam.replace(/tu/g, "டு");   
	eelam = eelam.replace(/tU/g, "டூ");   
	eelam = eelam.replace(/t/g, "ட்");   
	eelam = eelam.replace(/sau/g, "சௌ");   
	eelam = eelam.replace(/sai/g, "சை");   
	eelam = eelam.replace(/see/g, "சே");   
	eelam = eelam.replace(/soo/g, "சோ");   
	eelam = eelam.replace(/saa/g, "சா");   
	eelam = eelam.replace(/suu/g, "சூ");   
	eelam = eelam.replace(/sii/g, "சீ");   
	eelam = eelam.replace(/sa/g, "ச");   
	eelam = eelam.replace(/si/g, "சி");   
	eelam = eelam.replace(/sI/g, "சீ");   
	eelam = eelam.replace(/sA/g, "சா");   
	eelam = eelam.replace(/se/g, "செ");   
	eelam = eelam.replace(/sE/g, "சே");   
	eelam = eelam.replace(/so/g, "சொ");   
	eelam = eelam.replace(/sO/g, "சோ");   
	eelam = eelam.replace(/su/g, "சு");   
	eelam = eelam.replace(/sU/g, "சூ");   
	eelam = eelam.replace(/s/g, "ச்");   
	eelam = eelam.replace(/pau/g, "பௌ");   
	eelam = eelam.replace(/pai/g, "பை");   
	eelam = eelam.replace(/pee/g, "பே");   
	eelam = eelam.replace(/poo/g, "போ");   
	eelam = eelam.replace(/paa/g, "பா");   
	eelam = eelam.replace(/puu/g, "பூ");   
	eelam = eelam.replace(/pii/g, "பீ");   
	eelam = eelam.replace(/pa/g, "ப");   
	eelam = eelam.replace(/pi/g, "பி");   
	eelam = eelam.replace(/pI/g, "பீ");   
	eelam = eelam.replace(/pA/g, "பா");   
	eelam = eelam.replace(/pe/g, "பெ");   
	eelam = eelam.replace(/pE/g, "பே");   
	eelam = eelam.replace(/po/g, "பொ");   
	eelam = eelam.replace(/pO/g, "போ");   
	eelam = eelam.replace(/pu/g, "பு");   
	eelam = eelam.replace(/pU/g, "பூ");   
	eelam = eelam.replace(/p/g, "ப்");   
	eelam = eelam.replace(/bau/g, "பௌ");   
	eelam = eelam.replace(/bai/g, "பை");   
	eelam = eelam.replace(/bee/g, "பே");   
	eelam = eelam.replace(/boo/g, "போ");   
	eelam = eelam.replace(/baa/g, "பா");   
	eelam = eelam.replace(/buu/g, "பூ");   
	eelam = eelam.replace(/bii/g, "பீ");   
	eelam = eelam.replace(/ba/g, "ப");   
	eelam = eelam.replace(/bi/g, "பி");   
	eelam = eelam.replace(/bI/g, "பீ");   
	eelam = eelam.replace(/bA/g, "பா");   
	eelam = eelam.replace(/be/g, "பெ");   
	eelam = eelam.replace(/bE/g, "பே");   
	eelam = eelam.replace(/bo/g, "பொ");   
	eelam = eelam.replace(/bO/g, "போ");   
	eelam = eelam.replace(/bu/g, "பு");   
	eelam = eelam.replace(/bU/g, "பூ");   
	eelam = eelam.replace(/b/g, "ப்");   
	eelam = eelam.replace(/mau/g, "மௌ");   
	eelam = eelam.replace(/mai/g, "மை");   
	eelam = eelam.replace(/mee/g, "மே");   
	eelam = eelam.replace(/moo/g, "மோ");   
	eelam = eelam.replace(/maa/g, "மா");   
	eelam = eelam.replace(/muu/g, "மூ");   
	eelam = eelam.replace(/mii/g, "மீ");   
	eelam = eelam.replace(/ma/g, "ம");   
	eelam = eelam.replace(/mi/g, "மி");   
	eelam = eelam.replace(/mI/g, "மீ");   
	eelam = eelam.replace(/mA/g, "மா");   
	eelam = eelam.replace(/me/g, "மெ");   
	eelam = eelam.replace(/mE/g, "மே");   
	eelam = eelam.replace(/mo/g, "மொ");   
	eelam = eelam.replace(/mO/g, "மோ");   
	eelam = eelam.replace(/mu/g, "மு");   
	eelam = eelam.replace(/mU/g, "மூ");   
	eelam = eelam.replace(/m/g, "ம்");   
	eelam = eelam.replace(/yau/g, "யௌ");   
	eelam = eelam.replace(/yai/g, "யை");   
	eelam = eelam.replace(/yee/g, "யே");   
	eelam = eelam.replace(/yoo/g, "யோ");   
	eelam = eelam.replace(/yaa/g, "யா");   
	eelam = eelam.replace(/yuu/g, "யூ");   
	eelam = eelam.replace(/yii/g, "யீ");   
	eelam = eelam.replace(/ya/g, "ய");   
	eelam = eelam.replace(/yi/g, "யி");   
	eelam = eelam.replace(/yI/g, "யீ");   
	eelam = eelam.replace(/yA/g, "யா");   
	eelam = eelam.replace(/ye/g, "யெ");   
	eelam = eelam.replace(/yE/g, "யே");   
	eelam = eelam.replace(/yo/g, "யொ");   
	eelam = eelam.replace(/yO/g, "யோ");   
	eelam = eelam.replace(/yu/g, "யு");   
	eelam = eelam.replace(/yU/g, "யூ");   
	eelam = eelam.replace(/y/g, "ய்");   
	eelam = eelam.replace(/dau/g, "டௌ");   
	eelam = eelam.replace(/dai/g, "டை");   
	eelam = eelam.replace(/dee/g, "டே");   
	eelam = eelam.replace(/doo/g, "டோ");   
	eelam = eelam.replace(/daa/g, "டா");   
	eelam = eelam.replace(/duu/g, "டூ");   
	eelam = eelam.replace(/dii/g, "டீ");   
	eelam = eelam.replace(/da/g, "ட");   
	eelam = eelam.replace(/di/g, "டி");   
	eelam = eelam.replace(/dI/g, "டீ");   
	eelam = eelam.replace(/dA/g, "டா");   
	eelam = eelam.replace(/de/g, "டெ");   
	eelam = eelam.replace(/dE/g, "டே");   
	eelam = eelam.replace(/do/g, "டொ");   
	eelam = eelam.replace(/dO/g, "டோ");   
	eelam = eelam.replace(/du/g, "டு");   
	eelam = eelam.replace(/dU/g, "டூ");   
	eelam = eelam.replace(/d/g, "ட்");   
	eelam = eelam.replace(/nau/g, "னௌ");   
	eelam = eelam.replace(/nai/g, "னை");   
	eelam = eelam.replace(/nee/g, "னே");   
	eelam = eelam.replace(/noo/g, "னோ");   
	eelam = eelam.replace(/naa/g, "னா");   
	eelam = eelam.replace(/nuu/g, "னூ");   
	eelam = eelam.replace(/nii/g, "னீ");   
	eelam = eelam.replace(/na/g, "ன");   
	eelam = eelam.replace(/ni/g, "னி");   
	eelam = eelam.replace(/nI/g, "னீ");   
	eelam = eelam.replace(/nA/g, "னா");   
	eelam = eelam.replace(/ne/g, "னெ");   
	eelam = eelam.replace(/nE/g, "னே");   
	eelam = eelam.replace(/no/g, "னொ");   
	eelam = eelam.replace(/nO/g, "னோ");   
	eelam = eelam.replace(/nu/g, "னு");   
	eelam = eelam.replace(/nU/g, "னூ");   
	eelam = eelam.replace(/n/g, "ன்");   
	eelam = eelam.replace(/Nau/g, "ணௌ");   
	eelam = eelam.replace(/Nai/g, "ணை");   
	eelam = eelam.replace(/Nee/g, "ணே");   
	eelam = eelam.replace(/Noo/g, "ணோ");   
	eelam = eelam.replace(/Naa/g, "ணா");   
	eelam = eelam.replace(/Nuu/g, "ணூ");   
	eelam = eelam.replace(/Nii/g, "ணீ");   
	eelam = eelam.replace(/Na/g, "ண");   
	eelam = eelam.replace(/Ni/g, "ணி");   
	eelam = eelam.replace(/NI/g, "ணீ");   
	eelam = eelam.replace(/NA/g, "ணா");   
	eelam = eelam.replace(/Ne/g, "ணெ");   
	eelam = eelam.replace(/NE/g, "ணே");   
	eelam = eelam.replace(/No/g, "ணொ");   
	eelam = eelam.replace(/NO/g, "ணோ");   
	eelam = eelam.replace(/Nu/g, "ணு");   
	eelam = eelam.replace(/NU/g, "ணூ");   
	eelam = eelam.replace(/N/g, "ண்");   
	eelam = eelam.replace(/lau/g, "லௌ");   
	eelam = eelam.replace(/lai/g, "லை");   
	eelam = eelam.replace(/lee/g, "லே");   
	eelam = eelam.replace(/loo/g, "லோ");   
	eelam = eelam.replace(/laa/g, "லா");   
	eelam = eelam.replace(/luu/g, "லூ");   
	eelam = eelam.replace(/lii/g, "லீ");   
	eelam = eelam.replace(/la/g, "ல");   
	eelam = eelam.replace(/li/g, "லி");   
	eelam = eelam.replace(/lI/g, "லீ");   
	eelam = eelam.replace(/lA/g, "லா");   
	eelam = eelam.replace(/le/g, "லெ");   
	eelam = eelam.replace(/lE/g, "லே");   
	eelam = eelam.replace(/lo/g, "லொ");   
	eelam = eelam.replace(/lO/g, "லோ");   
	eelam = eelam.replace(/lu/g, "லு");   
	eelam = eelam.replace(/lU/g, "லூ");   
	eelam = eelam.replace(/l/g, "ல்");   
	eelam = eelam.replace(/Lau/g, "ளௌ");   
	eelam = eelam.replace(/Lai/g, "ளை");   
	eelam = eelam.replace(/Lee/g, "ளே");   
	eelam = eelam.replace(/Loo/g, "ளோ");   
	eelam = eelam.replace(/Laa/g, "ளா");   
	eelam = eelam.replace(/Luu/g, "ளூ");   
	eelam = eelam.replace(/Lii/g, "ளீ");   
	eelam = eelam.replace(/La/g, "ள");   
	eelam = eelam.replace(/Li/g, "ளி");   
	eelam = eelam.replace(/LI/g, "ளீ");   
	eelam = eelam.replace(/LA/g, "ளா");   
	eelam = eelam.replace(/Le/g, "ளெ");   
	eelam = eelam.replace(/LE/g, "ளே");   
	eelam = eelam.replace(/Lo/g, "ளொ");   
	eelam = eelam.replace(/LO/g, "ளோ");   
	eelam = eelam.replace(/Lu/g, "ளு");   
	eelam = eelam.replace(/LU/g, "ளூ");   
	eelam = eelam.replace(/L/g, "ள்");   
	eelam = eelam.replace(/vau/g, "வௌ");   
	eelam = eelam.replace(/vai/g, "வை");   
	eelam = eelam.replace(/vee/g, "வே");   
	eelam = eelam.replace(/voo/g, "வோ");   
	eelam = eelam.replace(/vaa/g, "வா");   
	eelam = eelam.replace(/vuu/g, "வூ");   
	eelam = eelam.replace(/vii/g, "வீ");   
	eelam = eelam.replace(/va/g, "வ");   
	eelam = eelam.replace(/vi/g, "வி");   
	eelam = eelam.replace(/vI/g, "வீ");   
	eelam = eelam.replace(/vA/g, "வா");   
	eelam = eelam.replace(/ve/g, "வெ");   
	eelam = eelam.replace(/vE/g, "வே");   
	eelam = eelam.replace(/vo/g, "வொ");   
	eelam = eelam.replace(/vO/g, "வோ");   
	eelam = eelam.replace(/vu/g, "வு");   
	eelam = eelam.replace(/vU/g, "வூ");   
	eelam = eelam.replace(/v/g, "வ்");   
	eelam = eelam.replace(/gau/g, "கௌ");   
	eelam = eelam.replace(/gai/g, "கை");   
	eelam = eelam.replace(/gee/g, "கே");   
	eelam = eelam.replace(/goo/g, "கோ");   
	eelam = eelam.replace(/gaa/g, "கா");   
	eelam = eelam.replace(/guu/g, "கூ");   
	eelam = eelam.replace(/gii/g, "கீ");   
	eelam = eelam.replace(/ga/g, "க");   
	eelam = eelam.replace(/gi/g, "கி");   
	eelam = eelam.replace(/gI/g, "கீ");   
	eelam = eelam.replace(/gA/g, "கா");   
	eelam = eelam.replace(/ge/g, "கெ");   
	eelam = eelam.replace(/gE/g, "கே");   
	eelam = eelam.replace(/go/g, "கொ");   
	eelam = eelam.replace(/gO/g, "கோ");   
	eelam = eelam.replace(/gu/g, "கு");   
	eelam = eelam.replace(/gU/g, "கூ");   
	eelam = eelam.replace(/g/g, "க்");   
	eelam = eelam.replace(/au/g, "ஔ");   
	eelam = eelam.replace(/ai/g, "ஐ");   
	eelam = eelam.replace(/aa/g, "ஆ");   
	eelam = eelam.replace(/ee/g, "ஏ");   
	eelam = eelam.replace(/ii/g, "ஈ");   
	eelam = eelam.replace(/uu/g, "ஊ");   
	eelam = eelam.replace(/oo/g, "ஓ");   
	eelam = eelam.replace(/-1000/g, "௲");   
	eelam = eelam.replace(/-100/g, "௱");   
	eelam = eelam.replace(/-10/g, "௰");   
	eelam = eelam.replace(/-1/g, "௧");   
	eelam = eelam.replace(/-2/g, "௨");   
	eelam = eelam.replace(/-3/g, "௩");   
	eelam = eelam.replace(/-4/g, "௪");   
	eelam = eelam.replace(/-5/g, "௫");   
	eelam = eelam.replace(/-6/g, "௬");   
	eelam = eelam.replace(/-7/g, "௭");   
	eelam = eelam.replace(/-8/g, "௮");   
	eelam = eelam.replace(/-9/g, "௯");   
	eelam = eelam.replace(/i/g, "இ");   
	eelam = eelam.replace(/I/g, "ஈ");   
	eelam = eelam.replace(/a/g, "அ");   
	eelam = eelam.replace(/A/g, "ஆ");   
	eelam = eelam.replace(/e/g, "எ");   
	eelam = eelam.replace(/E/g, "ஏ");   
	eelam = eelam.replace(/i/g, "இ");   
	eelam = eelam.replace(/I/g, "ஈ");   
	eelam = eelam.replace(/u/g, "உ");   
	eelam = eelam.replace(/U/g, "ஊ");   
	eelam = eelam.replace(/o/g, "ஒ");   
	eelam = eelam.replace(/O/g, "ஓ");   
	eelam = eelam.replace(/x/g, "௯");   
	eelam = eelam.replace(/q/g, "ஃ");

	return eelam;  
}
function t_serial_unicode(ip)
{
  
	eelam = ip;
	eelam = eelam.replace(/sp/g, "ளி");
	eelam = eelam.replace(/hp/g, "ரி");
	eelam = eelam.replace(/hP/g, "ரீ");
	eelam = eelam.replace(/uP/g, "ரீ");
	eelam = eelam.replace(/u;/g, "ர்");
	eelam = eelam.replace(/h;/g, "ர்");
	eelam = eelam.replace(/H/g, "ர்");
	eelam = eelam.replace(/\+/g, "10");


	eelam = eelam.replace(/nfs/g, "கௌ");
	eelam = eelam.replace(/Nfh/g, "கோ");
	eelam = eelam.replace(/nfh/g, "கொ");
	eelam = eelam.replace(/fh/g, "கா");
	eelam = eelam.replace(/fp/g, "கி");
	eelam = eelam.replace(/fP/g, "கீ");
	eelam = eelam.replace(/F/g, "கு");
	eelam = eelam.replace(/\$/g, "கூ");
	eelam = eelam.replace(/nf/g, "கெ");
	eelam = eelam.replace(/Nf/g, "கே");
	eelam = eelam.replace(/if/g, "கை");
	eelam = eelam.replace(/f;/g, "க்");
	eelam = eelam.replace(/f/g, "க");

	eelam = eelam.replace(/nqs/g, "ஙௌ");
	eelam = eelam.replace(/Nqh/g, "ஙோ");
	eelam = eelam.replace(/nqh/g, "ஙொ");
	eelam = eelam.replace(/qh/g, "ஙா");
	eelam = eelam.replace(/qp/g, "ஙி");
	eelam = eelam.replace(/qP/g, "ஙீ");
	eelam = eelam.replace(/nq/g, "ஙெ");
	eelam = eelam.replace(/Nq/g, "ஙே");
	eelam = eelam.replace(/iq/g, "ஙை");
	eelam = eelam.replace(/q;/g, "ங்");
	eelam = eelam.replace(/q/g, "ங");///

	eelam = eelam.replace(/nrs/g, "சௌ");
	eelam = eelam.replace(/Nrh/g, "சோ");
	eelam = eelam.replace(/nrh/g, "சொ");
	eelam = eelam.replace(/rh/g, "சா");
	eelam = eelam.replace(/rp/g, "சி");
	eelam = eelam.replace(/rP/g, "சீ");
	eelam = eelam.replace(/R/g, "சு");
	eelam = eelam.replace(/#/g, "சூ");
	eelam = eelam.replace(/nr/g, "செ");
	eelam = eelam.replace(/Nr/g, "சே");
	eelam = eelam.replace(/ir/g, "சை");
	eelam = eelam.replace(/r;/g, "ச்");
	eelam = eelam.replace(/r/g, "ச");//



	eelam = eelam.replace(/n\[s/g, "ஜௌ");
	eelam = eelam.replace(/N\[h/g, "ஜோ");
	eelam = eelam.replace(/n\[h/g, "ஜொ");
	eelam = eelam.replace(/\[h/g, "ஜா");
	eelam = eelam.replace(/\[p/g, "ஜி");
	eelam = eelam.replace(/\[P/g, "ஜீ");
	eelam = eelam.replace(/\[{/g, "ஜு");
	eelam = eelam.replace(/\[_/g, "ஜூ");//

	eelam = eelam.replace(/n\[/g, "ஜெ");
	eelam = eelam.replace(/N\[/g, "ஜே");
	eelam = eelam.replace(/i\[/g, "ஜை");
	eelam = eelam.replace(/\[;/g, "ஜ்");
	eelam = eelam.replace(/\[/g, "ஜ");//

	eelam = eelam.replace(/ஜ\{/g, "ஜு");
	eelam = eelam.replace(/ஜ_/g, "ஜூ");


	eelam = eelam.replace(/nQs/g, "ஞௌ");
	eelam = eelam.replace(/NQh/g, "ஞோ");
	eelam = eelam.replace(/nQh/g, "ஞொ");
	eelam = eelam.replace(/Qh/g, "ஞா");
	eelam = eelam.replace(/Qp/g, "ஞி");
	eelam = eelam.replace(/QP/g, "ஞீ");
	eelam = eelam.replace(/nQ/g, "ஞெ");
	eelam = eelam.replace(/NQ/g, "ஞே");
	eelam = eelam.replace(/iQ/g, "ஞை");
	eelam = eelam.replace(/Q;/g, "ஞ்");
	eelam = eelam.replace(/Q/g, "ஞ");///

	eelam = eelam.replace(/nls/g, "டௌ");
	eelam = eelam.replace(/Nlh/g, "டோ");
	eelam = eelam.replace(/nlh/g, "டொ");
	eelam = eelam.replace(/lp/g, "டி");
	eelam = eelam.replace(/lP/g, "டீ");
	eelam = eelam.replace(/lh/g, "டா");
	eelam = eelam.replace(/b/g, "டி");
	eelam = eelam.replace(/B/g, "டீ");
	eelam = eelam.replace(/L/g, "டு");
	eelam = eelam.replace(/\^/g, "டூ");
	eelam = eelam.replace(/nl/g, "டெ");
	eelam = eelam.replace(/Nl/g, "டே");
	eelam = eelam.replace(/il/g, "டை");
	eelam = eelam.replace(/l;/g, "ட்");
	eelam = eelam.replace(/l/g, "ட");////

	eelam = eelam.replace(/nzs/g, "ணௌ");
	eelam = eelam.replace(/Nzh/g, "ணோ");
	eelam = eelam.replace(/nzh/g, "ணொ");
	eelam = eelam.replace(/zh/g, "ணா");
	eelam = eelam.replace(/zp/g, "ணி");
	eelam = eelam.replace(/zP/g, "ணீ");


	eelam = eelam.replace(/Zh/g, "ணூ");
	eelam = eelam.replace(/Z}/g, "ணூ");

	eelam = eelam.replace(/nz/g, "ணெ");
	eelam = eelam.replace(/Nz/g, "ணே");
	eelam = eelam.replace(/iz/g, "ணை");


	eelam = eelam.replace(/z;/g, "ண்");
	eelam = eelam.replace(/Z/g, "ணு");
	eelam = eelam.replace(/z/g, "ண");////



	eelam = eelam.replace(/njs/g, "தௌ");
	eelam = eelam.replace(/Njh/g, "தோ");
	eelam = eelam.replace(/njh/g, "தொ");
	eelam = eelam.replace(/jh/g, "தா");
	eelam = eelam.replace(/jp/g, "தி");
	eelam = eelam.replace(/jP/g, "தீ");
	eelam = eelam.replace(/Jh/g, "தூ");
	eelam = eelam.replace(/Jh/g, "தூ");
	eelam = eelam.replace(/J}/g, "தூ");
	eelam = eelam.replace(/J/g, "து");
	eelam = eelam.replace(/nj/g, "தெ");
	eelam = eelam.replace(/Nj/g, "தே");
	eelam = eelam.replace(/ij/g, "தை");
	eelam = eelam.replace(/j;/g, "த்");
	eelam = eelam.replace(/j/g, "த");//

	eelam = eelam.replace(/nes/g, "நௌ");
	eelam = eelam.replace(/Neh/g, "நோ");
	eelam = eelam.replace(/neh/g, "நொ");
	eelam = eelam.replace(/eh/g, "நா");
	eelam = eelam.replace(/ep/g, "நி");
	eelam = eelam.replace(/eP/g, "நீ");
	eelam = eelam.replace(/E}/g, "நூ");
	eelam = eelam.replace(/Eh/g, "நூ");
	eelam = eelam.replace(/E/g, "நு");
	eelam = eelam.replace(/ne/g, "நெ");
	eelam = eelam.replace(/Ne/g, "நே");
	eelam = eelam.replace(/ie/g, "நை");
	eelam = eelam.replace(/e;/g, "ந்");
	eelam = eelam.replace(/e/g, "ந");//


	eelam = eelam.replace(/nds/g, "னௌ");
	eelam = eelam.replace(/Ndh/g, "னோ");
	eelam = eelam.replace(/ndh/g, "னொ");
	eelam = eelam.replace(/dh/g, "னா");
	eelam = eelam.replace(/dp/g, "னி");
	eelam = eelam.replace(/dP/g, "னீ");
	eelam = eelam.replace(/D}/g, "னூ");

	eelam = eelam.replace(/Dh/g, "னூ");
	eelam = eelam.replace(/D/g, "னு");
	eelam = eelam.replace(/nd/g, "னெ");
	eelam = eelam.replace(/Nd/g, "னே");
	eelam = eelam.replace(/id/g, "னை");
	eelam = eelam.replace(/d;/g, "ன்");
	eelam = eelam.replace(/d/g, "ன");//

	eelam = eelam.replace(/ngs/g, "பௌ");
	eelam = eelam.replace(/Ngh/g, "போ");
	eelam = eelam.replace(/ngh/g, "பொ");
	eelam = eelam.replace(/gh/g, "பா");
	eelam = eelam.replace(/gp/g, "பி");
	eelam = eelam.replace(/gP/g, "பீ");


	eelam = eelam.replace(/G/g, "பு");
	eelam = eelam.replace(/ng/g, "பெ");
	eelam = eelam.replace(/Ng/g, "பே");
	eelam = eelam.replace(/ig/g, "பை");
	eelam = eelam.replace(/g;/g, "ப்");
	eelam = eelam.replace(/g/g, "ப");//

	eelam = eelam.replace(/nks/g, "மௌ");
	eelam = eelam.replace(/Nkh/g, "மோ");
	eelam = eelam.replace(/nkh/g, "மொ");
	eelam = eelam.replace(/kh/g, "மா");
	eelam = eelam.replace(/kp/g, "மி");
	eelam = eelam.replace(/kP/g, "மீ");
	eelam = eelam.replace(/K/g, "மு");
	eelam = eelam.replace(/%/g, "மூ");
	eelam = eelam.replace(/nk/g, "மெ");
	eelam = eelam.replace(/Nk/g, "மே");
	eelam = eelam.replace(/ik/g, "மை");
	eelam = eelam.replace(/k;/g, "ம்");
	eelam = eelam.replace(/k/g, "ம");//


	eelam = eelam.replace(/nas/g, "யௌ");
	eelam = eelam.replace(/Nah/g, "யோ");
	eelam = eelam.replace(/nah/g, "யொ");
	eelam = eelam.replace(/ah/g, "யா");
	eelam = eelam.replace(/ap/g, "யி");
	eelam = eelam.replace(/aP/g, "யீ");
	eelam = eelam.replace(/A/g, "யு");
	eelam = eelam.replace(/A+/g, "யூ");
	eelam = eelam.replace(/na/g, "யெ");
	eelam = eelam.replace(/Na/g, "யே");
	eelam = eelam.replace(/ia/g, "யை");
	eelam = eelam.replace(/a;/g, "ய்");
	eelam = eelam.replace(/a/g, "ய");//

	eelam = eelam.replace(/nus/g, "ரௌ");
	eelam = eelam.replace(/Nuh/g, "ரோ");
	eelam = eelam.replace(/nuh/g, "ரொ");
	eelam = eelam.replace(/uh/g, "ரா");
	eelam = eelam.replace(/up/g, "ரி");


	eelam = eelam.replace(/U/g, "ரு");
	eelam = eelam.replace(/&/g, "ரூ");
	eelam = eelam.replace(/nu/g, "ரெ");
	eelam = eelam.replace(/Nu/g, "ரே");
	eelam = eelam.replace(/iu/g, "ரை");

	eelam = eelam.replace(/u/g, "ர");//

	eelam = eelam.replace(/nys/g, "லௌ");
	eelam = eelam.replace(/Nyh/g, "லோ");
	eelam = eelam.replace(/nyh/g, "லொ");
	eelam = eelam.replace(/yh/g, "லா");
	eelam = eelam.replace(/yp/g, "லி");
	eelam = eelam.replace(/yP/g, "லீ");
	eelam = eelam.replace(/Yh/g, "லூ");
	eelam = eelam.replace(/Y}/g, "லூ");
	eelam = eelam.replace(/Y/g, "லு");
	eelam = eelam.replace(/ny/g, "லெ");
	eelam = eelam.replace(/Ny/g, "லே");
	eelam = eelam.replace(/iy/g, "லை");
	eelam = eelam.replace(/y;/g, "ல்");
	eelam = eelam.replace(/y/g, "ல");//

	eelam = eelam.replace(/nss/g, "ளௌ");
	eelam = eelam.replace(/Nsh/g, "ளோ");
	eelam = eelam.replace(/nsh/g, "ளொ");
	eelam = eelam.replace(/sh/g, "ளா");

	eelam = eelam.replace(/sP/g, "ளீ");
	eelam = eelam.replace(/Sh/g, "ளூ");
	eelam = eelam.replace(/S/g, "ளு");
	eelam = eelam.replace(/ns/g, "ளெ");
	eelam = eelam.replace(/Ns/g, "ளே");
	eelam = eelam.replace(/is/g, "ளை");
	eelam = eelam.replace(/s;/g, "ள்");
	eelam = eelam.replace(/s/g, "ள");//


	eelam = eelam.replace(/ntt/g, "வௌ");
	eelam = eelam.replace(/Nth/g, "வோ");
	eelam = eelam.replace(/nth/g, "வொ");
	eelam = eelam.replace(/th/g, "வா");
	eelam = eelam.replace(/tp/g, "வி");
	eelam = eelam.replace(/tP/g, "வீ");




	eelam = eelam.replace(/nt/g, "வெ");
	eelam = eelam.replace(/Nt/g, "வே");
	eelam = eelam.replace(/it/g, "வை");

	eelam = eelam.replace(/t;/g, "வ்");
	eelam = eelam.replace(/t/g, "வ");//


	eelam = eelam.replace(/noo/g, "ழௌ");
	eelam = eelam.replace(/Noh/g, "ழோ");
	eelam = eelam.replace(/noh/g, "ழொ");
	eelam = eelam.replace(/oh/g, "ழா");
	eelam = eelam.replace(/op/g, "ழி");
	eelam = eelam.replace(/oP/g, "ழீ");
	eelam = eelam.replace(/\*/g, "ழூ");
	eelam = eelam.replace(/O/g, "ழு");
	eelam = eelam.replace(/no/g, "ழெ");
	eelam = eelam.replace(/No/g, "ழே");
	eelam = eelam.replace(/io/g, "ழை");
	eelam = eelam.replace(/o;/g, "ழ்");
	eelam = eelam.replace(/o/g, "ழ");//

	eelam = eelam.replace(/nws/g, "றௌ");
	eelam = eelam.replace(/Nwh/g, "றோ");
	eelam = eelam.replace(/nwh/g, "றொ");
	eelam = eelam.replace(/wh/g, "றா");
	eelam = eelam.replace(/wp/g, "றி");
	eelam = eelam.replace(/wP/g, "றீ");
	eelam = eelam.replace(/Wh/g, "றூ");
	eelam = eelam.replace(/W}/g, "றூ");

	eelam = eelam.replace(/W/g, "று");
	eelam = eelam.replace(/nw/g, "றெ");
	eelam = eelam.replace(/Nw/g, "றே");
	eelam = eelam.replace(/iw/g, "றை");
	eelam = eelam.replace(/w;/g, "ற்");
	eelam = eelam.replace(/w/g, "ற");//

	eelam = eelam.replace(/n``/g, "ஹௌ");
	eelam = eelam.replace(/N`h/g, "ஹோ");
	eelam = eelam.replace(/n`h/g, "ஹொ");
	eelam = eelam.replace(/`h/g, "ஹா");
	eelam = eelam.replace(/`p/g, "ஹி");
	eelam = eelam.replace(/`P/g, "ஹீ");

	eelam = eelam.replace(/n`/g, "ஹெ");
	eelam = eelam.replace(/N`/g, "ஹே");
	eelam = eelam.replace(/i`/g, "ஹை");
	eelam = eelam.replace(/`;/g, "ஹ்");
	eelam = eelam.replace(/`/g, "ஹ");//

	eelam = eelam.replace(/ஹ\{/g, "ஹு");
	eelam = eelam.replace(/ஹ_/g, "ஹூ");

	eelam = eelam.replace(/n\\s/g, "ஷௌ");
	eelam = eelam.replace(/N\\h/g, "ஷோ");
	eelam = eelam.replace(/n\\h/g, "ஷொ");
	eelam = eelam.replace(/\\h/g, "ஷா");
	eelam = eelam.replace(/\\p/g, "ஷி");
	eelam = eelam.replace(/\\P/g, "ஷீ");

	eelam = eelam.replace(/n\\/g, "ஷெ");
	eelam = eelam.replace(/N\\/g, "ஷே");
	eelam = eelam.replace(/i\\/g, "ஷை");
	eelam = eelam.replace(/\\;/g, "ஷ்");
	eelam = eelam.replace(/\\/g, "ஷ");//

	eelam = eelam.replace(/ஷ\{/g, "ஷு");
	eelam = eelam.replace(/ஷ_/g, "ஷூ");
	eelam = eelam.replace(/~/g, "'");
	eelam = eelam.replace(/~/g, "ஷ");



	eelam = eelam.replace(/n]s/g, "ஸௌ");
	eelam = eelam.replace(/N]h/g, "ஸோ");
	eelam = eelam.replace(/n]h/g, "ஸொ");
	eelam = eelam.replace(/]h/g, "ஸா");
	eelam = eelam.replace(/]p/g, "ஸி");
	eelam = eelam.replace(/]P/g, "ஸீ");

	eelam = eelam.replace(/n]/g, "ஸெ");
	eelam = eelam.replace(/N]/g, "ஸே");
	eelam = eelam.replace(/i]/g, "ஸை");
	eelam = eelam.replace(/];/g, "ஸ்");
	eelam = eelam.replace(/]/g, "ஸ");//

	eelam = eelam.replace(/ஸ\{/g, "ஸு");
	eelam = eelam.replace(/ஸ_/g, "ஸூ");


	eelam = eelam.replace(/>/g, "ää");
	eelam = eelam.replace(/m/g, "அ");
	eelam = eelam.replace(/M/g, "ஆ");
	eelam = eelam.replace(/</g, "ஈ");
	eelam = eelam.replace(/c/g, "உ");
	eelam = eelam.replace(/C/g, "ஊ");
	eelam = eelam.replace(/v/g, "எ");
	eelam = eelam.replace(/V/g, "ஏ");
	eelam = eelam.replace(/I/g, "ஐ");
	eelam = eelam.replace(/x/g, "ஒ")
	eelam = eelam.replace(/X/g, "ஓ");
	eelam = eelam.replace(/xs/g, "ஔ");



	eelam = eelam.replace(/\//g, "ஃ");

	eelam = eelam.replace(/@/g, "ளூ");

	eelam = eelam.replace(/,/g, "இ");

	eelam = eelam.replace(/=/g, "'");

	eelam = eelam.replace(/>/g, ",");

	eelam = eelam.replace(/T/g, "வு");

	eelam = eelam.replace(/சு10/g, "சூ");
	eelam = eelam.replace(/வு10/g, "வூ");
	eelam = eelam.replace(/வ10/g, "வூ");
	eelam = eelam.replace(/G\+/g, "பூ");
	eelam = eelam.replace(/ப10/g, "பூ");
	eelam = eelam.replace(/பு10/g, "பூ");
	eelam = eelam.replace(/A\+/g, "யூ");
	eelam = eelam.replace(/யு10/g, "யூ");
	eelam = eelam.replace(/ய10/g, "யூ");
	eelam = eelam.replace(/ää/g, ",");
	eelam = eelam.replace(/\"/g, "'");
	eelam = eelam.replace(/\‘/g, "'");
	eelam = eelam.replace(/\’/g, "'");
	eelam = eelam.replace(/\“/g, "'");
	eelam = eelam.replace(/\”/g, "'");
	eelam = eelam.replace(/…/g, "...");
	return eelam;
}   

function unicode2bamini(ip) 
{
	eelam = ip;
	eelam = eelam.replace(/,/g, ">");

	eelam = eelam.replace(/ஜௌ/g, "n\[s");
	eelam = eelam.replace(/ஜோ/g, "N\[h");
	eelam = eelam.replace(/ஜொ/g, "n\[h");
	eelam = eelam.replace(/ஜா/g, "\[h");
	eelam = eelam.replace(/ஜி/g, "\[p");
	eelam = eelam.replace(/ஜீ/g, "\[P");
	eelam = eelam.replace(/ஜு/g, "\[{");
	eelam = eelam.replace(/ஜூ/g, "\[_");
	eelam = eelam.replace(/ஜெ/g, "n\[");
	eelam = eelam.replace(/ஜே/g, "N\[");
	eelam = eelam.replace(/ஜை/g, "i\[");
	eelam = eelam.replace(/ஜ்/g, "\[;");
	eelam = eelam.replace(/ஜ/g, "\[");




	eelam = eelam.replace(/கௌ/g, "nfs");
	eelam = eelam.replace(/கோ/g, "Nfh");
	eelam = eelam.replace(/கொ/g, "nfh");
	eelam = eelam.replace(/கா/g, "fh");
	eelam = eelam.replace(/கி/g, "fp");
	eelam = eelam.replace(/கீ/g, "fP");
	eelam = eelam.replace(/கு/g, "F");
	eelam = eelam.replace(/கூ/g, "$");
	eelam = eelam.replace(/கெ/g, "nf");
	eelam = eelam.replace(/கே/g, "Nf");
	eelam = eelam.replace(/கை/g, "if");
	eelam = eelam.replace(/க்/g, "f;");
	eelam = eelam.replace(/க/g, "f");


	eelam = eelam.replace(/ஙௌ/g, "nqs");
	eelam = eelam.replace(/ஙோ/g, "Nqh");
	eelam = eelam.replace(/ஙொ/g, "nqh");
	eelam = eelam.replace(/ஙா/g, "qh");
	eelam = eelam.replace(/ஙி/g, "qp");
	eelam = eelam.replace(/ஙீ/g, "qP");
	eelam = eelam.replace(/ஙு/g, "*");
	eelam = eelam.replace(/ஙூ/g, "*");
	eelam = eelam.replace(/ஙெ/g, "nq");
	eelam = eelam.replace(/ஙே/g, "Nq");
	eelam = eelam.replace(/ஙை/g, "iq");
	eelam = eelam.replace(/ங்/g, "q;");
	eelam = eelam.replace(/ங/g, "q");



	eelam = eelam.replace(/சௌ/g, "nrs");
	eelam = eelam.replace(/சோ/g, "Nrh");
	eelam = eelam.replace(/சொ/g, "nrh");
	eelam = eelam.replace(/சா/g, "rh");
	eelam = eelam.replace(/சி/g, "rp");
	eelam = eelam.replace(/சீ/g, "rP");
	eelam = eelam.replace(/சு/g, "R");
	eelam = eelam.replace(/சூ/g, "R+");
	eelam = eelam.replace(/செ/g, "nr");
	eelam = eelam.replace(/சே/g, "Nr");
	eelam = eelam.replace(/சை/g, "ir");
	eelam = eelam.replace(/ச்/g, "r;");
	eelam = eelam.replace(/ச/g, "r");


	eelam = eelam.replace(/ஞௌ/g, "nQs");
	eelam = eelam.replace(/ஞோ/g, "NQh");
	eelam = eelam.replace(/ஞொ/g, "nQh");
	eelam = eelam.replace(/ஞா/g, "Qh");
	eelam = eelam.replace(/ஞி/g, "Qp");
	eelam = eelam.replace(/ஞீ/g, "QP");
	eelam = eelam.replace(/ஞு/g, "*");
	eelam = eelam.replace(/ஞூ/g, "*");
	eelam = eelam.replace(/ஞெ/g, "nQ");
	eelam = eelam.replace(/ஞே/g, "NQ");
	eelam = eelam.replace(/ஞை/g, "iQ");
	eelam = eelam.replace(/ஞ்/g, "Q;");
	eelam = eelam.replace(/ஞ/g, "Q");



	eelam = eelam.replace(/டௌ/g, "nls");
	eelam = eelam.replace(/டோ/g, "Nlh");
	eelam = eelam.replace(/டொ/g, "nlh");
	eelam = eelam.replace(/டா/g, "lh");
	eelam = eelam.replace(/டி/g, "b");
	eelam = eelam.replace(/டீ/g, "B");
	eelam = eelam.replace(/டு/g, "L");
	eelam = eelam.replace(/டூ/g, "^");
	eelam = eelam.replace(/டெ/g, "nl");
	eelam = eelam.replace(/டே/g, "Nl");
	eelam = eelam.replace(/டை/g, "il");
	eelam = eelam.replace(/ட்/g, "l;");
	eelam = eelam.replace(/ட/g, "l");


	eelam = eelam.replace(/ணௌ/g, "nzs");
	eelam = eelam.replace(/ணோ/g, "Nzh");
	eelam = eelam.replace(/ணொ/g, "nzh");
	eelam = eelam.replace(/ணா/g, "zh");
	eelam = eelam.replace(/ணி/g, "zp");
	eelam = eelam.replace(/ணீ/g, "zP");
	eelam = eelam.replace(/ணு/g, "Z");
	eelam = eelam.replace(/ணூ/g, "Z}");
	eelam = eelam.replace(/ணெ/g, "nz");
	eelam = eelam.replace(/ணே/g, "Nz");
	eelam = eelam.replace(/ணை/g, "iz");
	eelam = eelam.replace(/ண்/g, "z;");
	eelam = eelam.replace(/ண/g, "z");

	eelam = eelam.replace(/தௌ/g, "njs");
	eelam = eelam.replace(/தோ/g, "Njh");
	eelam = eelam.replace(/தொ/g, "njh");
	eelam = eelam.replace(/தா/g, "jh");
	eelam = eelam.replace(/தி/g, "jp");
	eelam = eelam.replace(/தீ/g, "jP");
	eelam = eelam.replace(/து/g, "J");
	eelam = eelam.replace(/தூ/g, "J}");
	eelam = eelam.replace(/தெ/g, "nj");
	eelam = eelam.replace(/தே/g, "Nj");
	eelam = eelam.replace(/தை/g, "ij");
	eelam = eelam.replace(/த்/g, "j;");
	eelam = eelam.replace(/த/g, "j");



	eelam = eelam.replace(/நௌ/g, "nes");
	eelam = eelam.replace(/நோ/g, "Neh");
	eelam = eelam.replace(/நொ/g, "neh");
	eelam = eelam.replace(/நா/g, "eh");
	eelam = eelam.replace(/நி/g, "ep");
	eelam = eelam.replace(/நீ/g, "eP");
	eelam = eelam.replace(/நு/g, "E");
	eelam = eelam.replace(/நூ/g, "E}");
	eelam = eelam.replace(/நெ/g, "ne");
	eelam = eelam.replace(/நே/g, "Ne");
	eelam = eelam.replace(/நை/g, "ie");
	eelam = eelam.replace(/ந்/g, "e;");
	eelam = eelam.replace(/ந/g, "e");


	eelam = eelam.replace(/னௌ/g, "nds");
	eelam = eelam.replace(/னோ/g, "Ndh");
	eelam = eelam.replace(/னொ/g, "ndh");
	eelam = eelam.replace(/னா/g, "dh");
	eelam = eelam.replace(/னி/g, "dp");
	eelam = eelam.replace(/னீ/g, "dP");
	eelam = eelam.replace(/னு/g, "D");
	eelam = eelam.replace(/னூ/g, "D}");
	eelam = eelam.replace(/னெ/g, "nd");
	eelam = eelam.replace(/னே/g, "Nd");
	eelam = eelam.replace(/னை/g, "id");
	eelam = eelam.replace(/ன்/g, "d;");
	eelam = eelam.replace(/ன/g, "d");


	eelam = eelam.replace(/பௌ/g, "ngs");
	eelam = eelam.replace(/போ/g, "Ngh");
	eelam = eelam.replace(/பொ/g, "ngh");
	eelam = eelam.replace(/பா/g, "gh");
	eelam = eelam.replace(/பி/g, "gp");
	eelam = eelam.replace(/பீ/g, "gP");
	eelam = eelam.replace(/பு/g, "G");
	eelam = eelam.replace(/பூ/g, "G+");
	eelam = eelam.replace(/பெ/g, "ng");
	eelam = eelam.replace(/பே/g, "Ng");
	eelam = eelam.replace(/பை/g, "ig");
	eelam = eelam.replace(/ப்/g, "g;");
	eelam = eelam.replace(/ப/g, "g");


	eelam = eelam.replace(/மௌ/g, "nks");
	eelam = eelam.replace(/மோ/g, "Nkh");
	eelam = eelam.replace(/மொ/g, "nkh");
	eelam = eelam.replace(/மா/g, "kh");
	eelam = eelam.replace(/மி/g, "kp");
	eelam = eelam.replace(/மீ/g, "kP");
	eelam = eelam.replace(/மு/g, "K");
	eelam = eelam.replace(/மூ/g, "%");
	eelam = eelam.replace(/மெ/g, "nk");
	eelam = eelam.replace(/மே/g, "Nk");
	eelam = eelam.replace(/மை/g, "ik");
	eelam = eelam.replace(/ம்/g, "k;");
	eelam = eelam.replace(/ம/g, "k");


	eelam = eelam.replace(/யௌ/g, "nas");
	eelam = eelam.replace(/யோ/g, "Nah");
	eelam = eelam.replace(/யொ/g, "nah");
	eelam = eelam.replace(/யா/g, "ah");
	eelam = eelam.replace(/யி/g, "ap");
	eelam = eelam.replace(/யீ/g, "aP");
	eelam = eelam.replace(/யு/g, "A");
	eelam = eelam.replace(/யூ/g, "A+");
	eelam = eelam.replace(/யெ/g, "na");
	eelam = eelam.replace(/யே/g, "Na");
	eelam = eelam.replace(/யை/g, "ia");
	eelam = eelam.replace(/ய்/g, "a;");
	eelam = eelam.replace(/ய/g, "a");

	eelam = eelam.replace(/ரௌ/g, "nus");
	eelam = eelam.replace(/ரோ/g, "Nuh");
	eelam = eelam.replace(/ரொ/g, "nuh");
	eelam = eelam.replace(/ரா/g, "uh");
	eelam = eelam.replace(/ரி/g, "up");
	eelam = eelam.replace(/ரீ/g, "uP");
	eelam = eelam.replace(/ரு/g, "U");
	eelam = eelam.replace(/ரூ/g, "\&");
	eelam = eelam.replace(/ரெ/g, "nu");
	eelam = eelam.replace(/ரே/g, "Nu");
	eelam = eelam.replace(/ரை/g, "iu");
	eelam = eelam.replace(/ர்/g, "u;");
	eelam = eelam.replace(/ர/g, "u");


	eelam = eelam.replace(/லௌ/g, "nys");
	eelam = eelam.replace(/லோ/g, "Nyh");
	eelam = eelam.replace(/லொ/g, "nyh");
	eelam = eelam.replace(/லா/g, "yh");
	eelam = eelam.replace(/லி/g, "yp");
	eelam = eelam.replace(/லீ/g, "yP");
	eelam = eelam.replace(/லு/g, "Y");
	eelam = eelam.replace(/லூ/g, "Y}");
	eelam = eelam.replace(/லெ/g, "ny");
	eelam = eelam.replace(/லே/g, "Ny");
	eelam = eelam.replace(/லை/g, "iy");
	eelam = eelam.replace(/ல்/g, "y;");
	eelam = eelam.replace(/ல/g, "y");


	eelam = eelam.replace(/ளௌ/g, "nss");
	eelam = eelam.replace(/ளோ/g, "Nsh");
	eelam = eelam.replace(/ளொ/g, "nsh");
	eelam = eelam.replace(/ளா/g, "sh");
	eelam = eelam.replace(/ளி/g, "sp");
	eelam = eelam.replace(/ளீ/g, "sP");
	eelam = eelam.replace(/ளு/g, "S");
	eelam = eelam.replace(/ளூ/g, "Sh");
	eelam = eelam.replace(/ளெ/g, "ns");
	eelam = eelam.replace(/ளே/g, "Ns");
	eelam = eelam.replace(/ளை/g, "is");
	eelam = eelam.replace(/ள்/g, "s;");
	eelam = eelam.replace(/ள/g, "s");

	eelam = eelam.replace(/வௌ/g, "nts");
	eelam = eelam.replace(/வோ/g, "Nth");
	eelam = eelam.replace(/வொ/g, "nth");
	eelam = eelam.replace(/வா/g, "th");
	eelam = eelam.replace(/வி/g, "tp");
	eelam = eelam.replace(/வீ/g, "tP");
	eelam = eelam.replace(/வு/g, "T");
	eelam = eelam.replace(/வூ/g, "T+");
	eelam = eelam.replace(/வெ/g, "nt");
	eelam = eelam.replace(/வே/g, "Nt");
	eelam = eelam.replace(/வை/g, "it");
	eelam = eelam.replace(/வ்/g, "t;");
	eelam = eelam.replace(/வ/g, "t");


	eelam = eelam.replace(/ழௌ/g, "nos");
	eelam = eelam.replace(/ழோ/g, "Noh");
	eelam = eelam.replace(/ழொ/g, "noh");
	eelam = eelam.replace(/ழா/g, "oh");
	eelam = eelam.replace(/ழி/g, "op");
	eelam = eelam.replace(/ழீ/g, "oP");
	eelam = eelam.replace(/ழு/g, "O");
	eelam = eelam.replace(/ழூ/g, "*");
	eelam = eelam.replace(/ழெ/g, "no");
	eelam = eelam.replace(/ழே/g, "No");
	eelam = eelam.replace(/ழை/g, "io");
	eelam = eelam.replace(/ழ்/g, "o;");
	eelam = eelam.replace(/ழ/g, "o");

	eelam = eelam.replace(/றௌ/g, "nws");
	eelam = eelam.replace(/றோ/g, "Nwh");
	eelam = eelam.replace(/றொ/g, "nwh");
	eelam = eelam.replace(/றா/g, "wh");
	eelam = eelam.replace(/றி/g, "wp");
	eelam = eelam.replace(/றீ/g, "wP");
	eelam = eelam.replace(/று/g, "W");
	eelam = eelam.replace(/றூ/g, "W}");
	eelam = eelam.replace(/றெ/g, "nw");
	eelam = eelam.replace(/றே/g, "Nw");
	eelam = eelam.replace(/றை/g, "iw");
	eelam = eelam.replace(/ற்/g, "w;");
	eelam = eelam.replace(/ற/g, "w");

	eelam = eelam.replace(/ஹௌ/g, "n`s");
	eelam = eelam.replace(/ஹோ/g, "N`h");
	eelam = eelam.replace(/ஹொ/g, "n`h");
	eelam = eelam.replace(/ஹா/g, "`h");
	eelam = eelam.replace(/ஹி/g, "`p");
	eelam = eelam.replace(/ஹீ/g, "`P");
	eelam = eelam.replace(/ஹு/g, "{`");
	eelam = eelam.replace(/ஹூ/g, "`_");
	eelam = eelam.replace(/ஹெ/g, "n`");
	eelam = eelam.replace(/ஹே/g, "N`");
	eelam = eelam.replace(/ஹை/g, "i`");
	eelam = eelam.replace(/ஹ்/g, "`;");
	eelam = eelam.replace(/ஹ/g, "`");

	eelam = eelam.replace(/ஷௌ/g, "n\\s");
	eelam = eelam.replace(/ஷோ/g, "N\\h");
	eelam = eelam.replace(/ஷொ/g, "n\\h");
	eelam = eelam.replace(/ஷா/g, "\\h");
	eelam = eelam.replace(/ஷி/g, "\\p");
	eelam = eelam.replace(/ஷீ/g, "\\P");
	eelam = eelam.replace(/ஷு/g, "\{");
	eelam = eelam.replace(/ஷூ/g, "\\\_");
	eelam = eelam.replace(/ஷெ/g, "n\\");
	eelam = eelam.replace(/ஷே/g, "N\\");
	eelam = eelam.replace(/ஷை/g, "i\\");
	eelam = eelam.replace(/ஷ்/g, "\\;");
	eelam = eelam.replace(/ஷ/g, "\\");

	eelam = eelam.replace(/ஸௌ/g, "n]s");
	eelam = eelam.replace(/ஸோ/g, "N]h");
	eelam = eelam.replace(/ஸொ/g, "n]h");
	eelam = eelam.replace(/ஸா/g, "]h");
	eelam = eelam.replace(/ஸி/g, "]p");
	eelam = eelam.replace(/ஸீ/g, "]P");
	eelam = eelam.replace(/ஸு/g, "]{");
	eelam = eelam.replace(/ஸூ/g, "]_");
	eelam = eelam.replace(/ஸெ/g, "n]");
	eelam = eelam.replace(/ஸே/g, "N]");
	eelam = eelam.replace(/ஸை/g, "i]");
	eelam = eelam.replace(/ஸ்/g, "];");
	eelam = eelam.replace(/ஸ/g, "]");


	eelam = eelam.replace(/அ/g, "m");
	eelam = eelam.replace(/ஆ/g, "M");
	eelam = eelam.replace(/இ/g, ",");
	eelam = eelam.replace(/ஈ/g, "<");
	eelam = eelam.replace(/உ/g, "c");
	eelam = eelam.replace(/ஊ/g, "C");
	eelam = eelam.replace(/எ/g, "v");
	eelam = eelam.replace(/ஏ/g, "V");
	eelam = eelam.replace(/ஐ/g, "I");
	eelam = eelam.replace(/ஒ/g, "x")
	eelam = eelam.replace(/ஓ/g, "X");
	eelam = eelam.replace(/ஔ/g, "xs");
	eelam = eelam.replace(/ஃ/g, "\/");
	eelam = eelam.replace(/ஸ்ரீ/g, "=");

	eelam = eelam.replace(/வூ/g, "t+");
	eelam = eelam.replace(/பூ/g, "G+");
	eelam = eelam.replace(/யூ/g, "A+");
	eelam = eelam.replace(/ஹு/g, "`{");
	eelam = eelam.replace(/ஜு/g, "[{");
	eelam = eelam.replace(/ஸு/g, "]{");
	eelam = eelam.replace(/ஷு/g, "\{");
	eelam = eelam.replace(/யூ/g, "A+");
	eelam = eelam.replace(/ா/g, "h");
	eelam = eelam.replace(/ெ/g, "n");
	eelam = eelam.replace(/ே/g, "N");
	eelam = eelam.replace(/ை/g, "i");
	eelam = eelam.replace(/ு/g, "{");
	eelam = eelam.replace(/ூ/g, "_");
	eelam = eelam.replace(/ி/g, "p");
	eelam = eelam.replace(/ீ/g, "P");

	return eelam;
}

var thamiz; 
function invert_comma_correction(ip) 
{   
/*
	ஆரம்பம் மற்றும் இறுதி குறியீடுகள் பெட்டி பெட்டியாக காட்சி தந்தால் உங்கள் செய்திகளை இங்கு இட்டு சரி செய்துக்கொள்ளுங்கள்.
	பிளாக்கர் வலைப்பதிவு செய்திகளை சீரமைக்க, Edit --> html (do not use compose)பகுதிக்கு சென்று, அங்குள்ள செய்திகளை முதல்பெட்டியில் இட்டு  சரிசெய்துக்கொள்ளுங்கள். 
	எழுத்துகள் மற்றும் Script ஆகியவற்றிற்கு எந்த பாதிப்பும் வராது.
*/
	thamiz = ip;
	thamiz = thamiz.replace(/\‘/g, "'");
	thamiz = thamiz.replace(/\’/g, "'");
	thamiz = thamiz.replace(/\“/g, "'");
	thamiz = thamiz.replace(/\”/g, "'");
	thamiz = thamiz.replace(/…/g, "...");
	return thamiz;  
}

function unicode2meezan(ip) 
{   
	eelam = ip;
	eelam = eelam.replace(";", "¢").replace(",", ">").replace("\\\\r\\\\n", " ").replace("ஜௌ", "n[s").replace("ஜோ", "N[h").replace("ஜொ", "n[h").replace("ஜா", "[h").replace("ஜி", "[p").replace("ஜீ", "[P").replace("ஜு", "[{").replace("ஜூ", "[_").replace("ஜெ", "n[").replace("ஜே", "N[").replace("ஜை", "i[").replace("ஜ்", "[;").replace("ஜ", "[").replace("கௌ", "nfs").replace("கோ", "Nfh").replace("கொ", "nfh").replace("கா", "fh").replace("கி", "fp").replace("கீ", "fP").replace("கு", "F").replace("கூ", "\\$").replace("கெ", "nf").replace("கே", "Nf").replace("கை", "if").replace("க்", "f;").replace("க", "f").replace("ஙௌ", "nqs").replace("ஙோ", "Nqh").replace("ஙொ", "nqh").replace("ஙா", "qh").replace("ஙி", "qp").replace("ஙீ", "qP").replace("ஙு", "*").replace("ஙூ", "*").replace("ஙெ", "nq").replace("ஙே", "Nq").replace("ஙை", "iq").replace("ங்", "q;").replace("ங", "q").replace("சௌ", "nrs").replace("சோ", "Nrh").replace("சொ", "nrh").replace("சா", "rh").replace("சி", "rp").replace("சீ", "rP").replace("சு", "R").replace("சூ", "#").replace("செ", "nr").replace("சே", "Nr").replace("சை", "ir").replace("ச்", "r;").replace("ச", "r").replace("ஞௌ", "nQs").replace("ஞோ", "NQh").replace("ஞொ", "nQh").replace("ஞா", "Qh").replace("ஞி", "Qp").replace("ஞீ", "QP").replace("ஞு", "*").replace("ஞூ", "*").replace("ஞெ", "nQ").replace("ஞே", "NQ").replace("ஞை", "iQ").replace("ஞ்", "Q;").replace("ஞ", "Q").replace("டௌ", "nls").replace("டோ", "Nlh").replace("டொ", "nlh").replace("டா", "lh").replace("டி", "b").replace("டீ", "B").replace("டு", "L").replace("டூ", "^").replace("டெ", "nl").replace("டே", "Nl").replace("டை", "il").replace("ட்", "l;").replace("ட", "l").replace("ணௌ", "nzs").replace("ணோ", "Nzh").replace("ணொ", "nzh").replace("ணா", "zh").replace("ணி", "zp").replace("ணீ", "zP").replace("ணு", "Z").replace("ணூ", "Z}").replace("ணெ", "nz").replace("ணே", "Nz").replace("ணை", "iz").replace("ண்", "z;").replace("ண", "z").replace("தௌ", "njs").replace("தோ", "Njh").replace("தொ", "njh").replace("தா", "jh").replace("தி", "jp").replace("தீ", "jP").replace("து", "J").replace("தூ", "J}").replace("தெ", "nj").replace("தே", "Nj").replace("தை", "ij").replace("த்", "j;").replace("த", "j").replace("நௌ", "nes").replace("நோ", "Neh").replace("நொ", "neh").replace("நா", "eh").replace("நி", "ep").replace("நீ", "eP").replace("நு", "E").replace("நூ", "E}").replace("நெ", "ne").replace("நே", "Ne").replace("நை", "ie").replace("ந்", "e;").replace("ந", "e").replace("னௌ", "nds").replace("னோ", "Ndh").replace("னொ", "ndh").replace("னா", "dh").replace("னி", "dp").replace("னீ", "dP").replace("னு", "D").replace("னூ", "D}").replace("னெ", "nd").replace("னே", "Nd").replace("னை", "id").replace("ன்", "d;").replace("ன", "d").replace("பௌ", "ngs").replace("போ", "Ngh").replace("பொ", "ngh").replace("பா", "gh").replace("பி", "gp").replace("பீ", "gP").replace("பு", "G").replace("பூ", "G+").replace("பெ", "ng").replace("பே", "Ng").replace("பை", "ig").replace("ப்", "g;").replace("ப", "g").replace("மௌ", "nks").replace("மோ", "Nkh").replace("மொ", "nkh").replace("மா", "kh").replace("மி", "kp").replace("மீ", "kP").replace("மு", "K").replace("மூ", "%").replace("மெ", "nk").replace("மே", "Nk").replace("மை", "ik").replace("ம்", "k;").replace("ம", "k").replace("யௌ", "nas").replace("யோ", "Nah").replace("யொ", "nah").replace("யா", "ah").replace("யி", "ap").replace("யீ", "aP").replace("யு", "A").replace("யூ", "A+").replace("யெ", "na").replace("யே", "Na").replace("யை", "ia").replace("ய்", "a;").replace("ய", "a").replace("ரௌ", "nus").replace("ரோ", "Nuh").replace("ரொ", "nuh").replace("ரா", "uh").replace("ரி", "up").replace("ரீ", "uP").replace("ரு", "U").replace("ரூ", "&").replace("ரெ", "nu").replace("ரே", "Nu").replace("ரை", "iu").replace("ர்", "u;").replace("ர", "u").replace("லௌ", "nys").replace("லோ", "Nyh").replace("லொ", "nyh").replace("லா", "yh").replace("லி", "yp").replace("லீ", "yP").replace("லு", "Y").replace("லூ", "Y}").replace("லெ", "ny").replace("லே", "Ny").replace("லை", "iy").replace("ல்", "y;").replace("ல", "y").replace("ளௌ", "nss").replace("ளோ", "Nsh").replace("ளொ", "nsh").replace("ளா", "sh").replace("ளி", "sp").replace("ளீ", "sP").replace("ளு", "S").replace("ளூ", "@").replace("ளெ", "ns").replace("ளே", "Ns").replace("ளை", "is").replace("ள்", "s;").replace("ள", "s").replace("வௌ", "nts").replace("வோ", "Nth").replace("வொ", "nth").replace("வா", "th").replace("வி", "tp").replace("வீ", "tP").replace("வு", "T").replace("வூ", "T+").replace("வெ", "nt").replace("வே", "Nt").replace("வை", "it").replace("வ்", "t;").replace("வ", "t").replace("ழௌ", "nos").replace("ழோ", "Noh").replace("ழொ", "noh").replace("ழா", "oh").replace("ழி", "op").replace("ழீ", "oP").replace("ழு", "O").replace("ழூ", "*").replace("ழெ", "no").replace("ழே", "No").replace("ழை", "io").replace("ழ்", "o;").replace("ழ", "o").replace("றௌ", "nws").replace("றோ", "Nwh").replace("றொ", "nwh").replace("றா", "wh").replace("றி", "wp").replace("றீ", "wP").replace("று", "W").replace("றூ", "W}").replace("றெ", "nw").replace("றே", "Nw").replace("றை", "iw").replace("ற்", "w;").replace("ற", "w").replace("ஹௌ", "n`s").replace("ஹோ", "N`h").replace("ஹொ", "n`h").replace("ஹா", "`h").replace("ஹி", "`p").replace("ஹீ", "`P").replace("ஹு", "`{").replace("ஹூ", "`_").replace("ஹெ", "n`").replace("ஹே", "N`").replace("ஹை", "i`").replace("ஹ்", "`;").replace("ஹ", "`").replace("ஷௌ", "n\\\\s").replace("ஷோ", "N\\\\h").replace("ஷொ", "n\\\\h").replace("ஷா", "\\\\h").replace("ஷி", "\\\\p").replace("ஷீ", "\\\\P").replace("ஷு", "\\\\{").replace("ஷூ", "\\\\_").replace("ஷெ", "n\\\\").replace("ஷே", "N\\\\").replace("ஷை", "i\\\\").replace("ஷ்", "\\\\;").replace("ஷ", "\\\\").replace("ஸௌ", "n]s").replace("ஸோ", "N]h").replace("ஸொ", "n]h").replace("ஸா", "]h").replace("ஸி", "]p").replace("ஸீ", "]P").replace("ஸு", "]{").replace("ஸூ", "]_").replace("ஸெ", "n]").replace("ஸே", "N]").replace("ஸை", "i]").replace("ஸ்", "];").replace("ஸ", "]").replace("அ", "m").replace("ஆ", "M").replace("இ", ",").replace("ஈ", "<").replace("உ", "c").replace("ஊ", "C").replace("எ", "v").replace("ஏ", "V").replace("ஐ", "I").replace("ஒ", "x").replace("ஓ", "X").replace("ஔ", "xs").replace("ஃ", "/").replace("ஸ்ரீ", "=").replace("பூ", "G+").replace("யூ", "A+").replace("ஹு", "`{").replace("ஜு", "[{").replace("ஸு", "]{").replace("ஷு", "\\\\{").replace("ா", "h").replace("ெ", "n").replace("ே", "N").replace("ை", "i").replace("ு", "{").replace("ூ", "_").replace("ி", "p").replace("ீ", "P");
	

	return eelam;
}	


function meezan2unicode(ip) 
{   
	eelam = ip; 

	eelam = eelam.replace("sp", "ளி").replace("hp", "ரி").replace("hP", "ரீ").replace("uP", "ரீ").replace("u;", "ர்").replace("h;", "ர்").replace("H", "ர்").replace("nfs", "கௌ").replace("Nfh", "கோ").replace("nfh", "கொ").replace("fh", "கா").replace("fp", "கி").replace("fP", "கீ").replace("F", "கு").replace("\\$", "கூ").replace("nf", "கெ").replace("Nf", "கே").replace("if", "கை").replace("f;", "க்").replace("f", "க").replace("nqs", "ஙௌ").replace("Nqh", "ஙோ").replace("nqh", "ஙொ").replace("qh", "ஙா").replace("qp", "ஙி").replace("qP", "ஙீ").replace("nq", "ஙெ").replace("Nq", "ஙே").replace("iq", "ஙை").replace("q;", "ங்").replace("q", "ங").replace("nrs", "சௌ").replace("Nrh", "சோ").replace("nrh", "சொ").replace("rh", "சா").replace("rp", "சி").replace("rP", "சீ").replace("R", "சு").replace("#", "சூ").replace("nr", "செ").replace("Nr", "சே").replace("ir", "சை").replace("r;", "ச்").replace("r", "ச").replace("n\\[s", "ஜௌ").replace("N\\[h", "ஜோ").replace("n\\[h", "ஜொ").replace("\\[h", "ஜா").replace("\\[p", "ஜி").replace("\\[P", "ஜீ").replace("\\[\\{", "ஜு").replace("\\[_", "ஜூ").replace("n\\[", "ஜெ").replace("N\\[", "ஜே").replace("i\\[", "ஜை").replace("\\[;", "ஜ்").replace("\\[", "ஜ").replace("ஜ\\{", "ஜு").replace("ஜ_", "ஜூ").replace("nQs", "ஞௌ").replace("NQh", "ஞோ").replace("nQh", "ஞொ").replace("Qh", "ஞா").replace("Qp", "ஞி").replace("QP", "ஞீ").replace("nQ", "ஞெ").replace("NQ", "ஞே").replace("iQ", "ஞை").replace("Q;", "ஞ்").replace("Q", "ஞ").replace("nls", "டௌ").replace("Nlh", "டோ").replace("nlh", "டொ").replace("lp", "டி").replace("lP", "டீ").replace("lh", "டா").replace("b", "டி").replace("B", "டீ").replace("L", "டு").replace("\\^", "டூ").replace("nl", "டெ").replace("Nl", "டே").replace("il", "டை").replace("l;", "ட்").replace("l", "ட").replace("nzs", "ணௌ").replace("Nzh", "ணோ").replace("nzh", "ணொ").replace("zh", "ணா").replace("zp", "ணி").replace("zP", "ணீ").replace("Zh", "ணூ").replace("Z\\}", "ணூ").replace("nz", "ணெ").replace("Nz", "ணே").replace("iz", "ணை").replace("z;", "ண்").replace("Z", "ணு").replace("z", "ண").replace("njs", "தௌ").replace("Njh", "தோ").replace("njh", "தொ").replace("jh", "தா").replace("jp", "தி").replace("jP", "தீ").replace("Jh", "தூ").replace("Jh", "தூ").replace("J\\}", "தூ").replace("J", "து").replace("nj", "தெ").replace("Nj", "தே").replace("ij", "தை").replace("j;", "த்").replace("j", "த").replace("nes", "நௌ").replace("Neh", "நோ").replace("neh", "நொ").replace("eh", "நா").replace("ep", "நி").replace("eP", "நீ").replace("E\\}", "நூ").replace("Eh", "நூ").replace("E", "நு").replace("ne", "நெ").replace("Ne", "நே").replace("ie", "நை").replace("e;", "ந்").replace("e", "ந").replace("nds", "னௌ").replace("Ndh", "னோ").replace("ndh", "னொ").replace("dh", "னா").replace("dp", "னி").replace("dP", "னீ").replace("D\\}", "னூ").replace("Dh", "னூ").replace("D", "னு").replace("nd", "னெ").replace("Nd", "னே").replace("id", "னை").replace("d;", "ன்").replace("d", "ன").replace("ngs", "பௌ").replace("Ngh", "போ").replace("ngh", "பொ").replace("gh", "பா").replace("gp", "பி").replace("gP", "பீ").replace("G\\+", "பூ").replace("G", "பு").replace("ng", "பெ").replace("Ng", "பே").replace("ig", "பை").replace("g;", "ப்").replace("g", "ப").replace("nks", "மௌ").replace("Nkh", "மோ").replace("nkh", "மொ").replace("kh", "மா").replace("kp", "மி").replace("kP", "மீ").replace("K", "மு").replace("%", "மூ").replace("nk", "மெ").replace("Nk", "மே").replace("ik", "மை").replace("k;", "ம்").replace("k", "ம").replace("nas", "யௌ").replace("Nah", "யோ").replace("nah", "யொ").replace("ah", "யா").replace("ap", "யி").replace("aP", "யீ").replace("A\\+", "யூ").replace("A", "யு").replace("na", "யெ").replace("Na", "யே").replace("ia", "யை").replace("a;", "ய்").replace("a", "ய").replace("nus", "ரௌ").replace("Nuh", "ரோ").replace("nuh", "ரொ").replace("uh", "ரா").replace("up", "ரி").replace("U", "ரு").replace("&", "ரூ").replace("nu", "ரெ").replace("Nu", "ரே").replace("iu", "ரை").replace("u", "ர").replace("nys", "லௌ").replace("Nyh", "லோ").replace("nyh", "லொ").replace("yh", "லா").replace("yp", "லி").replace("yP", "லீ").replace("Yh", "லூ").replace("Y\\}", "லூ").replace("Y", "லு").replace("ny", "லெ").replace("Ny", "லே").replace("iy", "லை").replace("y;", "ல்").replace("y", "ல").replace("nss", "ளௌ").replace("Nsh", "ளோ").replace("nsh", "ளொ").replace("sh", "ளா").replace("sP", "ளீ").replace("@", "ளூ").replace("S", "ளு").replace("ns", "ளெ").replace("Ns", "ளே").replace("is", "ளை").replace("s;", "ள்").replace("s", "ள").replace("t;", "வ்").replace("ntt", "வௌ").replace("Nth", "வோ").replace("nth", "வொ").replace("th", "வா").replace("tp", "வி").replace("tP", "வீ").replace("T\\+", "வூ").replace("T", "வு").replace("nt", "வெ").replace("Nt", "வே").replace("it", "வை").replace("t", "வ").replace("noo", "ழௌ").replace("Noh", "ழோ").replace("noh", "ழொ").replace("oh", "ழா").replace("op", "ழி").replace("oP", "ழீ").replace("\\*", "ழூ").replace("O", "ழு").replace("no", "ழெ").replace("No", "ழே").replace("io", "ழை").replace("o;", "ழ்").replace("o", "ழ").replace("nws", "றௌ").replace("Nwh", "றோ").replace("nwh", "றொ").replace("wh", "றா").replace("wp", "றி").replace("wP", "றீ").replace("Wh", "றூ").replace("W\\}", "றூ").replace("W", "று").replace("nw", "றெ").replace("Nw", "றே").replace("iw", "றை").replace("w;", "ற்").replace("w", "ற").replace("n`s", "ஹௌ").replace("N`h", "ஹோ").replace("n`h", "ஹொ").replace("`h", "ஹா").replace("`p", "ஹி").replace("`P", "ஹீ").replace("n`", "ஹெ").replace("N`", "ஹே").replace("i`", "ஹை").replace("`;", "ஹ்").replace("`", "ஹ").replace("ஹ\\{", "ஹு").replace("ஹ_", "ஹூ").replace("n\\s", "ஷௌ").replace("N\\\\h", "ஷோ").replace("n\\\\h", "ஷொ").replace("\\\\h", "ஷா").replace("\\\\p", "ஷி").replace("\\\\P", "ஷீ").replace("n\\\\", "ஷெ").replace("N\\\\", "ஷே").replace("i\\\\", "ஷை").replace("\\\\;", "ஷ்").replace("\\\\", "ஷ").replace("ஷ\\{", "ஷு").replace("ஷ_", "ஷூ").replace("~", "‘").replace("\\|", "’").replace("n]s", "ஸௌ").replace("N]h", "ஸோ").replace("n]h", "ஸொ").replace("]h", "ஸா").replace("]p", "ஸி").replace("]P", "ஸீ").replace("n]", "ஸெ").replace("N]", "ஸே").replace("i]", "ஸை").replace("];", "ஸ்").replace("]", "ஸ").replace("ஸ\\{", "ஸு").replace("ஸ_", "ஸூ").replace(">", "ää").replace("m", "அ").replace("M", "ஆ").replace("<", "ஈ").replace("c", "உ").replace("C", "ஊ").replace("v", "எ").replace("V", "ஏ").replace("I", "ஐ").replace("x", "ஒ").replace("X", "ஓ").replace("xs", "ஔ").replace("/", "ஃ").replace(",", "இ").replace("=", "ஸ்ரீ").replace(">", ",").replace("T", "வு").replace("ää", ",").replace("\"", "”").replace("'", "“").replace("…", "...").replace("¢", ";");
		
	return eelam;
}	