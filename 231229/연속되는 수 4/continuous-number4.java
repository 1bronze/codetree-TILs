import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int prev = -1, cur = -1;
        int cnt = 1, max = 1;
        for (int i = 0; i < N; i++) {
            cur = Integer.parseInt(br.readLine());

            if (i != 0 && prev < cur) cnt++;
            else cnt = 1;

            max = Math.max(max, cnt);
            prev = cur;
        }

        System.out.println(max);
    }
}