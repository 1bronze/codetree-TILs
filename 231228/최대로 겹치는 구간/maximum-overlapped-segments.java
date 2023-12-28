import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        // -100~100 -> 0~200
        int[] line = new int[200];

        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x1 = Integer.parseInt(st.nextToken()) + 100;
            int x2 = Integer.parseInt(st.nextToken()) + 100;

            for (int j = x1; j < x2; j++) {
                line[j] += 1;
            }
        }

        int max = 0;
        for(int l : line) {
            max = (max > l) ? max : l;
        }

        System.out.println(max);
    }
}