//https://www.codewars.com/kata/553e0c3c8b8c2e1745000005/train/java

package javaPractice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Flames {

    public static String showRelationship(String male, String female) {
        String[] maleName = male.toLowerCase().split("");
        String[] femaleName = female.toLowerCase().split("");
        for (int i = 0; i < maleName.length; i++) {
            for (int j = 0; j < femaleName.length; j++) {
                if (femaleName[j].equals(maleName[i])) {
                    femaleName[j] = maleName[i] = "";
                }
            }
        }
        List<String> ar = new ArrayList(Arrays.asList("Friendship", "Love", "Affection", "Marriage", "Enemies", "Siblings"));
        int num = (String.join("", maleName) + String.join("", femaleName)).length();
        int step = 1;
        for (int x = 6; x > 1; x--) {
            int g = ((num % x) + step) - 1;
            if (g > x) {
                g = g % x;
            }
            if (g == 0) {
                g = ar.size();
            }
            ar.remove(ar.get(g - 1));
            step = g;
        }
        return ar.get(0);
    }

    public static void main(String[] args) {
        System.out.println(showRelationship("Sangs", "Devs"));
    }
}
