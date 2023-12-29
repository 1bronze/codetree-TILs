import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int t = Integer.parseInt(st.nextToken());

        int cur;
        int cnt = 0, max = 0;

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            cur = Integer.parseInt(st.nextToken());

            if (cur > t) cnt++;
            else cnt = 0;

            max = Math.max(max, cnt);
        }

        System.out.println(max);
    }
}