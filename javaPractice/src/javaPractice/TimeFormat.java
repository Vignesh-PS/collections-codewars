package javaPractice;

public class TimeFormat {

    public static String formatDuration(int seconds) {
        int y, mon, d, h, min, s = 0;
//        String resultString = "";
//        String comma = "";
//        y = seconds/31536000;
//        mon = seconds/(2592000 * y);‬
//        d = seconds/(86400 * y * mon);
//        h = seconds/(3600*d*mon*y);
//        min = seconds/(60*h*d*mon*y);
//        s = seconds%60;


        boolean presentComma = false;
//        boolean boolMon = false;
//        boolean boolDays = false;
//        boolean boolHours = false;
//        boolean boolMinutes = false;
//        boolean boolSeconds = false;

        if(y==1) {
            presentComma = true;
            resultString = "1 year";
        } else if(y>1){
            presentComma = true;
            resultString = y+" years";
        }

        if(presentComma){
            comma = ",";
        }else{
            comma = "";
        }
        if(mon == 1){
            resultString += comma + "1 month";
            presentComma = true;
        }else if(mon > 1){
            resultString += comma + mon+" months";
            presentComma = true;
        }else{
            comma = "";
            presentComma = false;
        }

        if(presentComma){
            comma = ",";
        }
        if(d == 1){
            resultString += comma + "1 day";
            presentComma = true;
        }else if(d > 1){
            resultString += comma + d+" days";
            presentComma = true;
        }else{
            comma = "";
        }

        if(presentComma){
            comma = ",";
        }

        if(h == 1){
            resultString += comma + "1 hour";
            presentComma = true;
        }else if(mon > 1){
            resultString += comma + h+" hours";
            presentComma = true;
        }else{
            comma = "";
            presentComma = false;
        }

        if(presentComma){
            comma = ",";
        }
        if(min == 1){
            resultString += comma + "1 minute";
            presentComma = true;
        }else if(min > 1){
            resultString += comma + min+" minutes";
            presentComma = true;
        }else{
            presentComma = false;
            comma = "";
        }


        resultString += " and "+ s + " seconds";


        return resultString;
    }

    public static void main(String[] args) {
        System.out.println(formatDuration(1));
    }
}
