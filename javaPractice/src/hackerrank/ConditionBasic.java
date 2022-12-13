//https://www.hackerrank.com/challenges/java-if-else/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

package hackerrank;

import java.util.Scanner;

public class ConditionBasic {

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        if(N %2==1 || (6 <= N && N <=20)){
            System.out.println("Weird");
        }else if (2 <= N && N<=5){
            System.out.println("Not Weird");
        }else{
            System.out.println("Not Weird");
        }

        scanner.close();
    }
}
//
//Task
//        Given an integer, , perform the following conditional actions:
//
//        If  is odd, print Weird
//        If  is even and in the inclusive range of  to , print Not Weird
//        If  is even and in the inclusive range of  to , print Weird
//        If  is even and greater than , print Not Weird
//        Complete the stub code provided in your editor to print whether or not  is weird.
//
//        Input Format
//
//        A single line containing a positive integer, .
//
//        Constraints
//
//        Output Format
//
//        Print Weird if the number is weird; otherwise, print Not Weird.
//
//        Sample Input 0
//
//        3
//        Sample Output 0
//
//        Weird
//        Sample Input 1
//
//        24
//        Sample Output 1
//
//        Not Weird
//        Explanation
//
//        Sample Case 0:
//        is odd and odd numbers are weird, so we print Weird.
//
//        Sample Case 1:
//        and  is even, so it isn't weird. Thus, we print Not Weird.