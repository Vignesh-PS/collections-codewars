//https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
package hackerrank;
import java.util.Scanner;


public class ScannerUsage {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
