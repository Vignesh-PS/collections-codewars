package javaPractice;

import java.util.Arrays;

public class FindOdd {
	
	public int findOddInteger(int arr[], int n) 
	{ 
	    boolean visited[] = new boolean[n]; 
	      
	    Arrays.fill(visited, false); 
	  
	    int numberArray[] = new int[n] ;
	    // Traverse through array elements and 
	    // count frequencies 
	    for (int i = 0; i < n; i++) {
	  
	        // Skip this element if already processed 
	        //if (visited[i] == true) 
	        //    continue; 
	  
	        // Count frequency 
	        int count = 0; 
	        
	        for (int j = 0; j < n; j++) { 
	            if (arr[i] == arr[j]) { 
	                visited[j] = true; 
	                count++; 
	            } 
	        } 
	        
	        numberArray[i] = count;
	        //System.out.println(arr[i] + " " + count); 
	    } 
	    
	    for (int i = 0; i < n; i++) {
	    	
	    	//return numberArray[i] % 2 == 1 ?  numberArray[i] : 0;
	    	if(numberArray[i] % 2 == 1) {
	    		return numberArray[i];
	    	}else {
	    		return 0;
	    	}
	    }
	    return 10;
	} 
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FindOdd f = new FindOdd();
		int arr[] = new int[]{ 10, 20, 20, 10, 10, 20, 5, 20 }; 
		int n = arr.length; 
		    
		int oddNumber = f.findOddInteger(arr, n);
		System.out.println(oddNumber);
		
	}

}
