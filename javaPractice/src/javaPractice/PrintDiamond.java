//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/java

package javaPractice;

public class PrintDiamond {

	public static String print(int n) {
		if(n%2==0 || n<0) return null;
		 String str = "";   
		 
//		 str = new String(new char[4]).replace("\0", "*");
		 
		 for(int i = 0; i<n+1; i=i+2) {
			str += new String(new char[(n-i)/2]).replace("\0", " ")+new String(new char[i+1]).replace("\0","*")+"\n";
		 }
		 
		 for(int i=1; i<n; i=i+2){
				str += new String(new char[i/2 + 1]).replace("\0", " ")+new String(new char[n-1 - i]).replace("\0","*")+"\n";
			 }
	
		 //return "  *\n ***\n*****\n ***\n  *\n";
		 return str;
	}
	public static void main(String[] args) {
		
		System.out.println(print(51));

	}

}
