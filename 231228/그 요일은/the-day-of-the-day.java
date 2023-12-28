import java.io.*;
import java.util.*;

public class Main {
    public static List<Integer> MONTH_DAYS = new ArrayList<>(Arrays.asList(0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31));
    public static Map<String, Integer> DAYS = new HashMap<>();

    public static void main(String[] args) throws IOException {
        DAYS.put("Mon", 0);
        DAYS.put("Tue", 1);
        DAYS.put("Wed", 2);
        DAYS.put("Thu", 3);
        DAYS.put("Fri", 4);
        DAYS.put("Sat", 5);
        DAYS.put("Sun", 6);

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int m1 = Integer.parseInt(st.nextToken());
        int d1 = Integer.parseInt(st.nextToken());
        int m2 = Integer.parseInt(st.nextToken());
        int d2 = Integer.parseInt(st.nextToken());

        List<Integer> dayCounts = new ArrayList<>(Arrays.asList(0, 0, 0, 0, 0, 0, 0));
        int pointer = 0;
        while (!(m1 == m2 && d1 == d2)) {
            dayCounts.set(pointer, dayCounts.get(pointer)+1);
            
            d1 = d1 + 1;
            if (d1 > MONTH_DAYS.get(m1)) {
                d1 = 1;
                m1 = m1 + 1;
            }
            
            pointer = (pointer + 1) % 7;
        }
        dayCounts.set(pointer, dayCounts.get(pointer)+1);

        System.out.println(DAYS.get(br.readLine()));
    }
}