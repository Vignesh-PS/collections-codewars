//https://www.codewars.com/kata/5340298112fa30e786000688/train/java
package javaPractice;
import java.util.*;
import java.util.stream.IntStream;

public class Differenceof2 {

    public static int[][] twosDifference(int[] array) {
       Arrays.sort(array);
       int[][] result = new int[array.length][2];
        for (int i = 0; i<array.length;i++){
            int finalI = i;
            if(IntStream.of(array).anyMatch(a -> array[finalI]+2 == a)){
                result[i] = new int[]{array[finalI], array[finalI]+2};
            }
       }
        result = Arrays.stream(result).filter(x -> (x[0]!=0 && x[0] !=0)).toArray(int[][]::new);

        return result;

    }
    public static void main(String[] args) {
    System.out.println(twosDifference(new int[]{1,4,3,2,5,6,7,8}));
    }
}
