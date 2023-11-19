import java.io.*;
import java.util.*;

public class Main {
    public static final List<Integer> DAYS = Arrays.asList(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    public static final List<String> WEEKS = Arrays.asList("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int m1 = Integer.parseInt(st.nextToken());
        int d1 = Integer.parseInt(st.nextToken());
        int m2 = Integer.parseInt(st.nextToken());
        int d2 = Integer.parseInt(st.nextToken());

        int gap = -1;
        if (m1 > m2 || (m1 == m2 && d1 > d2)) {
            gap = countReverse(m1, d1, m2, d2);
        } else {
            gap = count(m1, d1, m2, d2);
        }

        System.out.println(WEEKS.get(gap % 7));
    }

    public static int count(int m1, int d1, int m2, int d2) {
        int gap = 0;
        int curMonth = m1;
        int curDay = d1;
        while (curMonth != m2 || curDay != d2) {
            if (curDay == DAYS.get(curMonth)) {
                curMonth += 1;
                curDay = 1;
            } else {
                curDay += 1;
            }
            gap++;
        }
        return gap;
    }

    public static int countReverse(int m1, int d1, int m2, int d2) {
        int gap = 0;
        int curMonth = m1;
        int curDay = d1;
        while (curMonth != m2 || curDay != d2) {
            if (curDay == 1) {
                curMonth -= 1;
                curDay = DAYS.get(curMonth);
            } else {
                curDay -= 1;
            }
            gap = (gap == 0) ? 6 : gap-1;
        }
        return gap;
    }
}