import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int OFFSET = 1000;
        int [][] arr = new int[2000][2000];

        StringTokenizer st = new StringTokenizer(br.readLine());
        int x1 = Integer.parseInt(st.nextToken()) + OFFSET;
        int y1 = Integer.parseInt(st.nextToken()) + OFFSET;
        int x2 = Integer.parseInt(st.nextToken()) + OFFSET;
        int y2 = Integer.parseInt(st.nextToken()) + OFFSET;

        for (int y = y1; y < y2; y++)
            for (int x = x1; x < x2; x++)
                arr[y][x] = 1;
        
        st = new StringTokenizer(br.readLine());
        x1 = Integer.parseInt(st.nextToken()) + OFFSET;
        y1 = Integer.parseInt(st.nextToken()) + OFFSET;
        x2 = Integer.parseInt(st.nextToken()) + OFFSET;
        y2 = Integer.parseInt(st.nextToken()) + OFFSET;

        for (int y = y1; y < y2; y++)
            for (int x = x1; x < x2; x++)
                arr[y][x] = 0;

        x1 = 2000; x2 = 0; y1 = 2000; y2 = 0;
        for (int y = 0; y < 2000; y++) {
            for (int x = 0; x < 2000; x++) {
                if (arr[y][x] == 0) continue;
                x1 = (x1 < x) ? x1 : x;
                y1 = (y1 < y) ? y1 : y;
                x2 = (x2 > x) ? x2 : x;
                y2 = (y2 > y) ? y2 : y;
            }
        }

        int ans = (y2 - y1 + 1) * (x2 - x1 + 1);
        if (ans == 3996001) ans = 0;
        System.out.println(ans);
    }
}