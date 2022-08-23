package javaPractice;
public class AtmPin
{
	 public boolean validatePin(String Pin) 
	 {
		   int n=Pin.length();
		   char s[]= Pin.toCharArray();
		   boolean b = true;
		   
		   if (n==4 || n==6)
		   {
			 for (int i=0;i<n; i++)
			 {
			   // CHECKING FOR DIGITS 
//			   if (s[i] >= 48 && s[i] <= 57)
//			       {
//				   //System.out.println(s[i]);
//				   //return false;
//				   //b = true;
//			       }
//			   else
				   if ((s[i] >= 65 && s[i] <= 90)   || (s[i] >= 97 && s[i] <= 122) )
			   	   {
				   //System.out.println(s[i]); 
			       return false;
			   	   }  // OTHERWISE SPECIAL CHARACTER 
			   else
			   	   {    
				   //System.out.println(s[i]); 
				   return false;
			       }
		      }
			
		   } else {
			   
			   return false;
			}
		   
		   return b;
	  }
	public static void main(String[] args) {
		
		AtmPin a = new AtmPin();
		System.out.println(a.validatePin("123431"));
	}

}
