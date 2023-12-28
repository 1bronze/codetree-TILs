import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        char[] n = br.readLine().toCharArray();

        // a진수 n을 10진수로
        int decimal = 0;
        for (int i = 0; i < n.length; i++) {
            decimal = a * decimal + (n[i] - '0');
        }

        // 10진수를 b진수로
        int[] digits = new int[20];
        int cnt = 0;
        while (true) {
            if (decimal < b) {
                digits[cnt] = decimal;
                break;
            }

            digits[cnt++] = decimal % b;
            decimal /= b;
        }

        for (int i = cnt; i >= 0; i--) {
            System.out.print(digits[i]);
        }
    }
}