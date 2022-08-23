package javaPractice;

public class SimpleEncryption {

	 public static String encrypt(final String text, final int n) {
		 if(n<=0) return text;
		 int iteration = n;
		 String stringArray[] = text.split("");
		 while(iteration > 0) {
			 String evenArray[] = new String[stringArray.length/2 + (stringArray.length %2 != 0 ? 1 : 0) ];
			 String oddArray[] = new String[stringArray.length - evenArray.length];

			 System.out.println(oddArray.length);
			 System.out.println(evenArray.length);
			 System.out.println(stringArray.length);
			 
			 for(int i = 0; i< stringArray.length; i++) {
				if(i%2 == 0) {
					evenArray[i/2] = stringArray[i];
				}else {
					oddArray[(i-1)/2] = stringArray[i];
				}
			 }
			 System.arraycopy(oddArray, 0, stringArray, 0, oddArray.length);
			 System.arraycopy(evenArray, 0, stringArray, oddArray.length, evenArray.length);  
			 iteration--;
		 }
		 return String.join("",stringArray);
		}
		  
	 
	 
	 
	 
	 
	 public static String decrypt(final String encryptedText, final int n) {
		 if(n<=0) return encryptedText;
		 int iteration = n;
		 String stringArray[] = encryptedText.split("");
		 int isOdd = stringArray.length % 2 == 0 ? 0 : 1;
		 
		 while(iteration > 0) {
			 String oddArray[] = new String[stringArray.length/2 + (stringArray.length %2 == 0 ? 1 : 0)];
			 String evenArray[] = new String[stringArray.length - oddArray.length];

			 System.arraycopy(stringArray, 0, oddArray, 0, oddArray.length);
			 System.arraycopy(stringArray, oddArray.length, evenArray, 0, evenArray.length);

			 for(int i=0; i<(oddArray.length + evenArray.length)/2 + isOdd; i++) {
				 stringArray[2*i] = evenArray[i];
				 
				 if(i < stringArray.length /2) {
					 stringArray[2*i+1] = oddArray[i];

				 }
			 }
			 			 
			 iteration--;
		 }
		 		 
		 return String.join("",stringArray);
		  }
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(	encrypt("This kata is very interesting!", 1));
		//System.out.println(	encrypt("This is a test!", 1));

		//System.out.println(	decrypt("s eT ashi tist!", 2));
	}

}
