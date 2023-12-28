import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] tiles = new int[200000];

        int position = 100000;
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            char d = st.nextToken().charAt(0);

            for (int j = 0; j < x; j++) {
                if (d == 'R') {
                    tiles[position] = (tiles[position] < 0) ? -1 * tiles[position] + 1 : tiles[position] + 1;
                    position++;
                    if (j == x - 1) position--;
                } else {
                    tiles[position] = (tiles[position] > 0) ? -1 * tiles[position] - 1 : tiles[position] - 1;
                    position--;
                    if (j == x - 1) position++;
                }
            }
        }

        int black = 0;
        int white = 0;
        int gray = 0;
        for (int i = 0; i < 200000; i++) {
            if (tiles[i] == 0) continue;

            if (tiles[i] > 0 && tiles[i] < 4) {
                black++;
            } else if (tiles[i] < 0 && tiles[i] > -4) {
                white++;
            } else {
                gray++;
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.append(white);
        sb.append(" ");
        sb.append(black);
        sb.append(" ");
        sb.append(gray);
        System.out.println(sb);
    }
}