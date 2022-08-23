package codewars;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SortandStar {
    public static String twoSort(String[] s) {
        Arrays.sort(s);
        String selectedString = s[0];

        List<String> selectedStrList = Arrays.asList(selectedString.split(""));

        String resultStr = selectedStrList.stream().map(x -> "***"+x).collect(Collectors.joining(""));

        return resultStr.substring(3);
    }

    public static void main(String[] args) {
        String[] strArray = new String[] {"take", "over", "the", "world", "maybe", "who", "knows", "perhaps"};
        System.out.println(twoSort(strArray));
    }
}
//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/java
//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//The returned value must be a string, and have "***" between each of its letters.
//
//You should not remove or add elements from/to the array.