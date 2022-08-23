//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/java

package javaPractice;

import java.util.Arrays;

public class PhoneNumberFormat {

	
	 public static String createPhoneNumber(int[] numbers) {

		 String num[] = Arrays.stream(numbers).mapToObj(String::valueOf).toArray(String[]::new);
		 String numString = String.join("", num);
		 
		 return "("+numString.substring(0,3)+") "+numString.substring(3, 6)+"-"+numString.substring(6,10);
		  }
	 
	 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(createPhoneNumber(new int[] {1,2,3,4,5,6,7,8,9,2}));
	}

}
