package javaPractice;

public class JadenCase {
	
	public static String isJaden(String str) {
		if(str == null || str == "") {
			return null;
		}
		String stringArray[] = str.split(" ");
		//System.out.println(stringArray);
		//String convertedString[] = new String[stringArray.length];
		
		for(int i=0; i<stringArray.length; i++) {
			stringArray[i] = stringArray[i].substring(0,1).toUpperCase() + stringArray[i].substring(1).toLowerCase();
		}



//		System.out.println(Arrays.toString(convertedString));
		System.out.println(String.join(" ",stringArray));
		
		return String.join(" ",stringArray);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(isJaden("Lotus is my favourite flower"));
	}
	

}