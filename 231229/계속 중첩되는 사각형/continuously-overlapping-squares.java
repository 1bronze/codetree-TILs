import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int OFFSET = 100;
        int[][] arr = new int[200][200];

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            int color = (i % 2 == 0) ? 1 : 2;

            StringTokenizer st = new StringTokenizer(br.readLine());
            int x1 = Integer.parseInt(st.nextToken()) + OFFSET;
            int y1 = Integer.parseInt(st.nextToken()) + OFFSET;
            int x2 = Integer.parseInt(st.nextToken()) + OFFSET;
            int y2 = Integer.parseInt(st.nextToken()) + OFFSET;

            for (int y = y1; y < y2; y++)
                for (int x = x1; x < x2; x++)
                    arr[y][x] = color;
        }

        int ans = 0;
        for (int y = 0; y < 200; y++)
                for (int x = 0; x < 200; x++)
                    if (arr[y][x] == 2) ans++;
        
        System.out.println(ans);
    }
}