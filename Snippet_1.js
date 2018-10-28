//Decodieren von einem Kontake.vcf File :)

//Beispiel  :  NCHARSET=UTF-8ENCODING=QUOTED-PRINTABLE:=53=75=70=70=6F=72=74=49=54=2D=41=75=73=72=C3=BC=73=74=75=6E=67


//Vorgehen
var str = "=53=75=70=70=6F=72=74=49=54=2D=41=75=73=72=C3=BC=73=74=75=6E=67";

//Hier werden einfach '=' durch '%' ersetzt! ;)
str = str.replace(/={1}/g, '%');

//Zwischen Ergebniss:
//"%53%75%70%70%6F%72%74%49%54%2D%41%75%73%72%C3%BC%73%74%75%6E%67"

//Jetzt ist es kompatibel für decodeURI()
str = decodeURI(str);

//Ergebniss  :  str = "SupportIT-Ausrüstung"
