import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int N = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());

        int[] digits = new int[20];
        int cnt = 0;
        while (true) {
            if (N < B) {
                digits[cnt] = N;
                break;
            }

            digits[cnt++] = N % B;
            N /= B;
        }

        for (int i = cnt; i >= 0; i--) {
            System.out.print(digits[i]);
        }
    }
}