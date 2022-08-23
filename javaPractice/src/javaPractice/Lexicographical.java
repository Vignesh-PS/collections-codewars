//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/java

package javaPractice;

import java.util.Arrays;
import java.util.stream.Stream;

public class Lexicographical {

    public static String[] inArray(String[] array1, String[] array2) {
        Arrays.sort(array1);
        return Arrays.stream(array1)
                .filter(x -> Arrays.asList(array2).toString().indexOf(x) != -1)
                .toArray(String[]::new);
    }

    public static void main(String[] args) {

        String[] a = new String[] {"asf", "asf", "wr"};

        Arrays.stream(a).forEach(x-> {
            System.out.println("x = " + x);
        });
        
        inArray(new String[]{"sangs", "heaven", "hell"}, new String[]{"hello", "heaven", "sangs"});
    }
}
