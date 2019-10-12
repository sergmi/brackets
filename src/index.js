module.exports = function check(str, bracketsConfig) {
let i,j=-1,l1=0,l2=0,l3=0,l4=0,l5=0,next=[];
for(i=0;i<str.length;i++){
	if(bracketsConfig[0]){
		if ((str[i]==bracketsConfig[0][0])&&(str[i]!=next[j])){		
			l1+=1;
			j++;
			next[j]=bracketsConfig[0][1];
		}
		else if (str[i]==bracketsConfig[0][1]){
			if(str[i]!=next[j]){return false;}
			l1-=1;
			j--;
			if (l1==-1){return false;}
		}
	}
	if(bracketsConfig[1]){
		if ((str[i]==bracketsConfig[1][0])&&(str[i]!=next[j])){			
			l2+=1;
			j++;
			next[j]=bracketsConfig[1][1];
		}
		else if (str[i]==bracketsConfig[1][1]){
			if(str[i]!=next[j]){return false;}
			l2-=1;
			j--;
			if (l2==-1){return false;}
		}
	}
	if(bracketsConfig[2]){
		if ((str[i]==bracketsConfig[2][0])&&(str[i]!=next[j])){	
			l3+=1;
			j++;
			next[j]=bracketsConfig[2][1];
		}
		else if (str[i]==bracketsConfig[2][1]){
			if(str[i]!=next[j]){return false;}
			l3-=1;
			j--;
			if (l3==-1){return false;}
		}
	}
	if(bracketsConfig[3]){
		if ((str[i]==bracketsConfig[3][0])&&(str[i]!=next[j])){	
			l4+=1;
			j++;
			next[j]=bracketsConfig[3][1];
		}
		else if (str[i]==bracketsConfig[3][1]){
			if(str[i]!=next[j]){return false;}
			l4-=1;
			j--;
			if (l4==-1){return false;}
		}
	}
	if(bracketsConfig[4]){
		if ((str[i]==bracketsConfig[4][0])&&(str[i]!=next[j])){	
			l5+=1;
			j++;
			next[j]=bracketsConfig[4][1];
		}
		else if (str[i]==bracketsConfig[4][1]){
			if(str[i]!=next[j]){return false;}
			l5-=1;
			j--;
			if (l5==-1){return false;}
		}
	}	
}
if(l1==0&&l2==0&&l3==0&&l4==0&&l5==0){return true;}
else {return false;}
}
