package javaPractice;

import java.math.BigInteger;

public class Perimeter {
	
	public static BigInteger perimeter(BigInteger n) {
		
		BigInteger t1 = BigInteger.valueOf(0), t2 = BigInteger.valueOf(1), sum = BigInteger.valueOf(0), total = BigInteger.valueOf(1);
		
		for(int i=1; i <= n.intValue() ; i++) {
		sum = t1.add(t2); 
		total = total.add(sum);
		t1 = t2;
		t2 =  sum;
		}
		
		//System.out.println(total.toString().length());
		
		return BigInteger.valueOf(4).multiply(total);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(perimeter(BigInteger.valueOf(29690)));
	}

}
