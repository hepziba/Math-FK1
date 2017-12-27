//KYMPPI
//Muista että tämä korjaus on aineistokohtainen.
function createjs_fontfix(mainItem){ //obj on createjs:n luoma exportRoot muuttuja	
    var vainOsoitetut = true; //tehdään rivimuutos vain movieclipeille, joissa on muuttuja "this.fontfix = true;"
    var rivitoleranssi = 3;
    var valitoleranssi = 5;
    
    //siirtää kaikkia tekstejä oikealle
    var siirra_x = 2;
        
    //korvattavat fontit
    var korvattavat = {
		"'Myriad Pro'" : "'myriad-pro', 'Myriad Pro'"
    };

	//siirtää Y:pistettä
	var tekstisiirrotY = {
    	ie : {
			"'UusiTekstaus'": 1.5/30,
			"'Myriad Pro'": 2.5/30,
			"'Tavutus'": 3.5/30,
            "'Arial'": 4/30
    	},
		firefox : {
			"'UusiTekstaus'": 5.5/30,
			"'Myriad Pro'": 9.5/30,
            "'Tavutus'": 9/30,
            "'Arial'": 9/30
    	},
    	chrome : {
			"'UusiTekstaus'": 1/30,
			"'Myriad Pro'": 2.5/30,
            "'Tavutus'": 4/30,
            "'Arial'": 5/30
    	},
		opera : {
			"'UusiTekstaus'": 1/30,
			"'Myriad Pro'": 2.5/30,
            "'Tavutus'": 4/30,
            "'Arial'": 5/30
		},
		safari : {
			"'UusiTekstaus'": 1/30,
			"'Myriad Pro'": 3/30,
            "'Tavutus'": 10/30,
            "'Arial'": 3/30
    	}
    };
	
	 //skaalaa tekstikentän leveyttä
    var tekstiskaalaukset = {
        ie : {
			
        },
        firefox : { 
			
        },
		chrome : {
            
        },
        opera : {
			
        },
		safari : {
            
        }
    }
    
    //tähän selaimen tunnistus jonka avulla määritetään käytettävä kerrointaulu
    if(bowser){
        if(bowser.msie){
            tekstisiirrotY = tekstisiirrotY.ie;
            tekstiskaalaukset = tekstiskaalaukset.ie;
        }
		else if(bowser.firefox){
            tekstisiirrotY = tekstisiirrotY.firefox;
            tekstiskaalaukset = tekstiskaalaukset.firefox;
        }
        else if(bowser.safari || verIos != undefined){
            tekstisiirrotY = tekstisiirrotY.safari;
            tekstiskaalaukset = tekstiskaalaukset.safari;
        }
        else if(bowser.chrome){
            tekstisiirrotY = tekstisiirrotY.chrome;
            tekstiskaalaukset = tekstiskaalaukset.chrome;
        }
        else if(bowser.opera){
            tekstisiirrotY = tekstisiirrotY.opera;
            tekstiskaalaukset = tekstiskaalaukset.opera;
        }
		else{
			tekstisiirrotY = {};
			tekstiskaalaukset = {};
		}
    }
	else{
		tekstisiirrotY = {};
		tekstiskaalaukset = {};
	}
    
    etsiText(mainItem);
    
    //--
    
    function etsiText(item){
        var kaikkiTekstit = [];
        
        $.each(item, function(key, child){
            if(child == null || child == undefined){
            
            }
            else if(child.getNumChildren && key != 'parent'){
                etsiText(child);
            }
            else if(child.font){
                kaikkiTekstit.push( tekstiObjekti(child) );
                siirraTekstia( kaikkiTekstit[kaikkiTekstit.length-1] );
                korvaaFontti( kaikkiTekstit[kaikkiTekstit.length-1] );
            }
        });
        
        if(vainOsoitetut){
            if(item.fontfix === true)
                jarjestaTekstit(kaikkiTekstit);
        }
        else{
            jarjestaTekstit(kaikkiTekstit);    
        }
		
		alleviivaaTekstit(kaikkiTekstit);
    }
    
    //--- Määritellään objekti
    
    function tekstiObjekti(item){
        var arr, tyyli, koko, fontti, alleviivaus, mitat;
        
        //tyyli, koko, fontti
        arr = item.font.split('px ');
        arr = (arr[0].split(' ')).concat(arr[1]);
        if(arr.length == 2)
            arr.splice(0,0,'');
        
        tyyli = arr[0];
        koko = parseFloat(arr[1].replace('px', ''));
        fontti = arr[2];
        
        //alleviivaus
        alleviivaus = false;
        if(item.text.indexOf('<u>') > -1){
            alleviivaus = true;
            item.text = item.text.replace('<u>', '');
        }
        
        mitat = item.getTransformedBounds();
        
        return {item:item, x:item.x, y:item.y, width:mitat.width, height:mitat.height, scaleX:item.scaleX, scaleY:item.scaleX, text:item.text, style:tyyli, size:koko, font:fontti, underline:alleviivaus}
    }
    
    //---
    
    function siirraTekstia(obj){
        var koko, fontti, mitat, kerroinY, skaalausX;
        
        koko = obj.size;
        fontti = obj.font;
        
        //paikka
        kerroinY = 0;
        if(tekstisiirrotY[fontti])
            kerroinY = tekstisiirrotY[fontti];
        
		if(!isNaN(koko) && !isNaN(kerroinY))
			obj.y = obj.item.y += kerroinY * koko;
		
		if(siirra_x)
			obj.x = obj.item.x += siirra_x;
        
        
        //skaalaus
        skaalausX = 1;
        if(tekstiskaalaukset[fontti])
            skaalausX = tekstiskaalaukset[fontti];
        
        obj.scaleX *= skaalausX;
        obj.item.scaleX *= obj.scaleX;
        
        mitat = obj.item.getTransformedBounds();
        obj.width = mitat.width;
        obj.height = mitat.height;
    }
    
    function korvaaFontti(obj){
        var tyyli, koko, fontti, uusiFontti, uusiTyyli;
        
        tyyli = obj.style;
        koko = obj.size;
        fontti = obj.font;
        
        //korvataan fontti
        uusiFontti = korvattavat[fontti];
        uusiTyyli = tyyli+' ';
        
        if(uusiFontti){
            if(uusiFontti.indexOf('|bold') > -1){
                uusiFontti = uusiFontti.replace('|bold', '');
                if(tyyli.indexOf('bold') === -1)
                    uusiTyyli += 'bold ';
            }
            if(uusiFontti.indexOf('|italic') > -1){
                uusiFontti = uusiFontti.replace('|italic', '');
                if(tyyli.indexOf('italic') === -1)
                    uusiTyyli += 'italic ';
            }
        
            obj.item.font = uusiTyyli + koko+'px ' + uusiFontti;
            
            mitat = obj.item.getTransformedBounds();
            obj.width = mitat.width;
            obj.height = mitat.height;
        }
    }
    
    function jarjestaTekstit(arr){
        if(arr.length == 0)
            return;
        
        var alkumerkit = ' ';
        var loppumerkit = '.,?!>–•';
        
        var i;
        objSort(arr, 'y');
        arr.reverse();

        var yPos = arr[0].y;

        var rivit = [];
        var rivi = 0;
        rivit[rivi] = [];

        for(i=0; i<arr.length; i++){
            obj = arr[i];
            
            if(yPos-rivitoleranssi <= obj.y && obj.y <= yPos+rivitoleranssi){
                rivit[rivi].push(obj);
            }
            else{
                objSort(rivit[rivi], 'x');

                rivi++;
                rivit[rivi] = [];
                rivit[rivi].push(obj);
                yPos = obj.y;
            }
        }

        objSort(rivit[rivi], 'x');
        
        var xPos, valitse, alkumerkki, loppumerkki;
        for(i=0; i<rivit.length; i++){
            rivi = rivit[i];
            xPos = rivi[0].x + rivi[0].width;
            var tempRivi = [rivi[0]];
            var tempStr = rivi[0].contents;
            valitse = false;
            if(rivi.length>1){
                for(a=1; a<rivi.length; a++){
                    alkumerkki = alkumerkit.indexOf(rivi[a].item.text.charAt(0)) > -1;
                    loppumerkki = loppumerkit.indexOf(rivi[a-1].item.text.charAt(rivi[a-1].item.text.length-1)) > -1;
                    var saaYhdistaa = !loppumerkki || alkumerkki;
                    if(vainOsoitetut){//ei valitoleranssia vainOsoitetut-moodissa
                        if(saaYhdistaa){
                            tempRivi.push(rivi[a]);
                        }
                        else{
                            jarjestaRivi(tempRivi);

                            tempRivi = [rivi[a]];
                            valitse = false;
                        }
                    }
                    else if(xPos+valitoleranssi >= rivi[a].x && saaYhdistaa){
                        tempRivi.push(rivi[a]);
                    }
                    else{
                        jarjestaRivi(tempRivi);

                        tempRivi = [rivi[a]];
                        valitse = false;
                    }

                    xPos = rivi[a].x + rivi[a].width;
                }
                if(tempRivi.length > 0){
                    jarjestaRivi(tempRivi);
                }
            }
        }
        
        function jarjestaRivi(arr){
            var _x = undefined;
            var _y = undefined;
            
            //Välilyonti
			if(window.debugJS === true){
            	var edellinenTekstiEiTyhja = false;
            	var tekstiLista = '';
			}
            //Välilyonti
            
            $.each(arr, function(i, obj){
                _x == undefined ? _x = obj.x:null;
                _y == undefined ? _y = obj.y:null;
                
                obj.item.x = obj.x = _x;
                obj.item.y = obj.y = _y;
                
                _x = obj.x + obj.width;
                
                
                //Välilyonti
				if(window.debugJS === true){
					if((' .,!?)-').indexOf(obj.text.charAt(0)) == -1 && edellinenTekstiEiTyhja){
						tekstiLista = tekstiLista == '' ? obj.text : (tekstiLista + '<br>' + obj.text);
						obj.item.color = '#ff0000';
					}
					if(obj.text.charAt(obj.text.length-1) != ' ')
						edellinenTekstiEiTyhja = true;
					else
						edellinenTekstiEiTyhja = false;
				}
                //Välilyonti
            });
            
            //Välilyonti
			if(window.debugJS === true){
            	if(tekstiLista != '')
                	trace(tekstiLista + '<br>');
			}
            //Välilyonti
        }
        
        //--
        
        function objSort() {
            var args = arguments,
                array = args[0],
                case_sensitive, keys_length, key, desc, a, b, i;

            if (typeof arguments[arguments.length-1] === 'boolean') {
                case_sensitive = arguments[arguments.length-1];
                keys_length = arguments.length - 1;
            }
            else {
                case_sensitive = false;
                keys_length = arguments.length;
            }

            return array.sort(function (obj1, obj2) {
                for (i = 1; i < keys_length; i++) {
                    key = args[i];
                    if (typeof key !== 'string') {
                        desc = key[1];
                        key = key[0];
                        a = obj1[args[i][0]];
                        b = obj2[args[i][0]];
                    } else {
                        desc = false;
                        a = obj1[args[i]];
                        b = obj2[args[i]];
                    }

                    if (case_sensitive === false && typeof a === 'string') {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                    }

                    if (! desc) {
                        if (a < b) return -1;
                        if (a > b) return 1;
                    } else {
                        if (a > b) return -1;
                        if (a < b) return 1;
                    }
                }
                return 0;
            });
            
        }
    }
	function alleviivaaTekstit(arr){
        $.each(arr, function(a, obj){
			if(obj.underline){
				var item = obj.item;
				var koko = obj.size;
				var marg = 1.5*koko/15;
				
				var gr = new createjs.Graphics();
				gr.setStrokeStyle(1);
				gr.beginStroke(item.color==undefined ? '#000' : item.color);
				gr.moveTo(obj.x, obj.y+obj.height-marg).lineTo(obj.x+obj.width, obj.y+obj.height-marg);
				gr.endStroke();
				
				var viiva = new createjs.Shape(gr);
				item.parent.addChildAt(viiva,0);
			}
        });
    }
}