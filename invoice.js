var headers=["No","Item","Qty","Price","Total"]
var items=["basta","sonkor","saliid","bur","bariis","makrooni"]
var others=["Grand total","discount","balance","paid","remainder"]
document.write("<table>");
document.write("<thead><tr>")
for(let i=0; i<headers.length; i+=1)
	document.write("<th>"+headers[i]+"</th>")
document.write("</tr></thead>")
document.write("<tbody>")
	for(let i=0; i<items.length; i+=1)
		document.write("<tr><td>"+(i+1)+"</td><td>"+items[i]+"</td>"+"<td class='qty' contenteditable='true'></td><td class='price' contenteditable='true'></td><td class='total'></td></tr>")
	document.write("<tr><th colspan='3' rowspan='6'>Signature</th>")
		for(var x=0; x<others.length; x+=1){
		document.write("<tr>")
		if(!(x%2==0))
			document.write("<td>"+others[x]+"</td><td contenteditable='true' class='cal'></td>")
		else
			document.write("<td>"+others[x]+"</td><td class='cal'></td>")
		document.write("</tr>")
	}
	document.write("</tr>")
document.write("</tbody>")
document.write("</table>");

var qty=document.getElementsByClassName("qty")
var pr=document.getElementsByClassName("price")
var total=document.getElementsByClassName("total")
var cal=document.getElementsByClassName("cal");
var sum=0;
for(var i=0; i<pr.length; i+=1){
	(function(x){
		pr[x].addEventListener("blur",function(){
			total[x].innerHTML=parseInt(qty[x].innerHTML)*parseInt(pr[x].innerHTML)
			sum+=parseInt(qty[x].innerHTML)*parseInt(pr[x].innerHTML)
			cal[0].innerHTML=sum;
		})
	})(i)
}

for(let y=1; y<cal.length; y+=2){
	(function(b){
		cal[b].addEventListener("blur",function(){
			cal[b+1].innerHTML=parseInt(cal[b-1].innerHTML)-parseInt(cal[b].innerHTML);
		})
	})(y)
}
