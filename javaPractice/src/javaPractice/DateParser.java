package javaPractice;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParser {
    public static void main(String[] args) throws Exception {

        String strDate = "Tue Mar 02 05:30:00 IST 2022";
        //String strDate = "2022-04-20T20:43:11.794Z";

        Date dateObj = parseDateFromString(strDate);
        System.out.println(dateObj.toString());

        String month = new SimpleDateFormat("MMMM").format(dateObj);
        System.out.println(month);
    }

    public static Date parseDateFromString(String strDate) throws Exception
    {
        if (strDate != null && !strDate.isEmpty())
        {
            SimpleDateFormat[] formats =
                    new SimpleDateFormat[] {new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss"), new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy")};
            Date parsedDate = null;
            for (int i = 0; i < formats.length; i++)
            {
                try
                {
                    parsedDate = formats[i].parse(strDate);
                    return parsedDate;
                }
                catch (ParseException e)
                {
                    continue;
                }
            }
        }
        throw new Exception("Unknown date format: '" + strDate + "'");
    }
}
