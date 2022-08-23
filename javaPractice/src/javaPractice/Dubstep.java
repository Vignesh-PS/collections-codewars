//https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/java

package javaPractice;

import java.util.Arrays;

public class Dubstep {
    public static String SongDecoder(String song) {
        if (song == "" || song.length() > 200 || !song.equals(song.toUpperCase())) return null;

        String[] songArray = song.split("WUB");

        songArray = Arrays.stream(songArray).filter(x -> (x.length() > 0 && x != null)).toArray(String[]::new);

        return String.join(" ", songArray) + "     ".trim();
    }

    public static void main(String[] args) {
        System.out.println("args =" + SongDecoder("WUBWEWUBAREWUBWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
    }
}
