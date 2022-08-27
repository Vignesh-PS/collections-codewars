//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/java
package codewars;

import java.util.List;
import java.util.stream.Collectors;

public class InvertIntegerValues {
    public static void main(String[] args) {
        int[] result = invert(new int[]{1,2,3,4,5});

    }

    public static int[] invert(int[] array) {
        List<Integer> num = List.of(array).stream().map(x -> x * -1).collect(Collectors.toList());
        return null;
    }
}



//    Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
//        invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//        invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//        invert([]) == []
