import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int cnt = 1, max = -1;
        int prev = -1, cur = -1;
        for (int i = 0; i < N; i++) {
            cur = Integer.parseInt(br.readLine());

            if (i != 0 && prev != cur) {
                cnt--;
                max = (max < cnt) ? cnt : max;
                cnt = 1;
            } else if (i == N - 1) {
                max = (max < cnt) ? cnt : max;
            }

            cnt++;
            prev = cur;
        }

        System.out.println(max);
    }
}