import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int OFFSET = 100;
        int LENGTH = 8;
        int[][] arr = new int[200][200];

        int N = Integer.parseInt(br.readLine());
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x1 = Integer.parseInt(st.nextToken()) + OFFSET;
            int y1 = Integer.parseInt(st.nextToken()) + OFFSET;
            int x2 = x1 + LENGTH;
            int y2 = y1 + LENGTH;

            for (int y = y1; y < y2; y++)
                for (int x = x1; x < x2; x++)
                    arr[y][x] = 1;
        }

        int ans = 0;
        for (int y = 0; y < 200; y++)
            for (int x = 0; x < 200; x++)
                if (arr[y][x] == 1) ans++;
        
        System.out.println(ans);
    }
}