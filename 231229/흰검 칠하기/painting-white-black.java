import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] whites = new int[200000];
        int[] blacks = new int[200000];

        int position = 100000;
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            char d = st.nextToken().charAt(0);

            for (int j = 0; j < x; j++) {
                if (d == 'R') {
                    blacks[position] = (blacks[position] < 0) ? -1 * blacks[position] + 1 : blacks[position] + 1;
                    whites[position] = (whites[position] > 0) ? -1 * whites[position] : whites[position];
                    position++;
                    if (j == x - 1) position--;
                } else {
                    blacks[position] = (blacks[position] > 0) ? -1 * blacks[position] : blacks[position];
                    whites[position] = (whites[position] < 0) ? -1 * whites[position] + 1 : whites[position] + 1;
                    position--;
                    if (j == x - 1) position++;
                }
            }
        }

        int black = 0;
        int white = 0;
        int gray = 0;
        for (int i = 0; i < 200000; i++) {
            if (whites[i] == 0 && blacks[i] == 0) continue;
            else if (whites[i] >= 2 && blacks[i] <= -2) gray++;
            else if (blacks[i] >= 2 && whites[i] <= -2) gray++;
            else if (whites[i] > blacks[i]) white++;
            else black++;
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