//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/java

package javaPractice;

import java.math.BigInteger;

public class TrailingZeros {
    public static int zeros(int n) {
//        BigInteger b = BigInteger.ONE;

//        while(n>1){
//            b = b.multiply(BigInteger.valueOf(n)) ;
//            n--;
//        }
//
//        for(int i = 1; i<= n; i++){
//            b = b.multiply(BigInteger.valueOf(i)) ;
//        }
        int count = 0;

//        while (b.mod(BigInteger.valueOf(10)) == BigInteger.ZERO){
//            count++;
//            b = b.divide(BigInteger.valueOf(10));
//        }

        for(int i=5; n/i >=1; i*=5 ){
            count += n/i;
            //count++;
        }

        return count;
    }

    public static void main(String[] args) {
        System.out.println(zeros(1000));
    }
}
//200+40+8+1

//
//00, 01, 10, 11;
//    Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
//        N! = 1 * 2 * 3 * ... * N
//
//        Be careful 1000! has 2568 digits...
//
//        For more info, see: http://mathworld.wolfram.com/Factorial.html
//
//        Examples
//        zeros(6) = 1
//        # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
//
//        zeros(12) = 2
//        # 12! = 479001600 --> 2 trailing zeros
//        Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.