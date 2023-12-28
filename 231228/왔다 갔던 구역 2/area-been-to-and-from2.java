import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] line = new int[2000];
        int position = 1000;
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            char d = st.nextToken().charAt(0);

            for (int j = 0; j < x; j++) {
                if (d == 'R') {
                    line[position++] += 1;
                } else {
                    line[--position] += 1;
                }
            }
        }

        int ans = 0;
        for (int l : line) {
            if (l >= 2) ans++;
        } 

        System.out.println(ans);
    }
}