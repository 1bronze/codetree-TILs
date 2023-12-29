import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[][] arr = new int[2000][2000];
        int OFFSET = 1000;

        StringTokenizer st = new StringTokenizer(br.readLine());
        int x1_A = Integer.parseInt(st.nextToken()) + OFFSET;
        int y1_A = Integer.parseInt(st.nextToken()) + OFFSET;
        int x2_A = Integer.parseInt(st.nextToken()) + OFFSET;
        int y2_A = Integer.parseInt(st.nextToken()) + OFFSET;

        for (int y = y1_A; y < y2_A; y++)
            for (int x = x1_A; x < x2_A; x++)
                arr[y][x] = 1;

        st = new StringTokenizer(br.readLine());
        int x1_B = Integer.parseInt(st.nextToken()) + OFFSET;
        int y1_B = Integer.parseInt(st.nextToken()) + OFFSET;
        int x2_B = Integer.parseInt(st.nextToken()) + OFFSET;
        int y2_B = Integer.parseInt(st.nextToken()) + OFFSET;

        for (int y = y1_B; y < y2_B; y++)
            for (int x = x1_B; x < x2_B; x++)
                arr[y][x] = 1;

        st = new StringTokenizer(br.readLine());
        int x1_M = Integer.parseInt(st.nextToken()) + OFFSET;
        int y1_M = Integer.parseInt(st.nextToken()) + OFFSET;
        int x2_M = Integer.parseInt(st.nextToken()) + OFFSET;
        int y2_M = Integer.parseInt(st.nextToken()) + OFFSET;

        for (int y = y1_M; y < y2_M; y++)
            for (int x = x1_M; x < x2_M; x++)
                arr[y][x] = 0;

        int ans = 0;
        for (int y = 0; y < 2000; y++)
            for (int x = 0; x < 2000; x++)
                if (arr[y][x] == 1) ans++;

        System.out.println(ans);
    }
}