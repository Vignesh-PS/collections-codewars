package javaPractice;

import java.util.Arrays;

public class PangramChecker {

	public static boolean check(String sentence) {
		String charArray = "abcdefghijklmnopqrstuvwxyz .";
		Boolean presentArray[] = new Boolean[28];
		Arrays.fill(presentArray, false);
		int index;
		for(int i=0; i<sentence.length(); i++) {
			
		index =	charArray.indexOf(sentence.toLowerCase().trim().toCharArray()[i]);			
		if(index != -1) {
			presentArray[index] = true;
		} else {
			return false;
		}	
		}
		
		for(int i=0; i<28; i++) {
			if(presentArray[i] == false) return false;
		}
		
		return true;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(check("pdldqkohsjavmv sgfzkacype nxtrfwibu"));
	}

}
