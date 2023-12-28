import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] tiles = new int[200000];
        int pos = 100000;

        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            char d = st.nextToken().charAt(0);

            for (int j = 0; j < x; j++) {
                if (d == 'L') {
                    tiles[pos] = 1;
                    if (j != x - 1) pos--;
                } else {
                    tiles[pos] = 2;
                    if (j != x - 1) pos++;
                }
            }
        }

        int black = 0;
        int white = 0;
        for (int i = 0; i < 200000; i++) {
            if (tiles[i] == 1) white++;
            else if (tiles[i] == 2) black++;
        }

        StringBuilder sb = new StringBuilder();
        sb.append(white);
        sb.append(" ");
        sb.append(black);
        System.out.println(sb);
    }
}