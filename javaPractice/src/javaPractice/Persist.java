package javaPractice;

import java.util.stream.IntStream;

public class Persist {
    public static long persistence(long n) {
        int count = 0;

        while (n >= 10) {
            n = iterationCounter(n);
            count++;
        }

        return count;

    }

    public static int iterationCounter(long num) {

        IntStream a = Long.toString(num).chars();

        System.out.println(a);
        String[] numArray = Long.toString(num).split("");

        int calculate = 1;

        for (String s : numArray) {
            calculate = calculate * Integer.parseInt(s);
        }
        return calculate;
    }

    public static void main(String[] args) {
        System.out.println(persistence(39));
        System.out.println("Persistence");
    }
}
