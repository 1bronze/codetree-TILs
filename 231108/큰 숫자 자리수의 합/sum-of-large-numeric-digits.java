import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int result = 0;
        int tmp = 1;
        for (int i = 0; i < 3; i++) {
            tmp *= Integer.parseInt(st.nextToken());
        }
        while (tmp > 0) {
            result += tmp % 10;
            tmp /= 10;
        }

        System.out.println(result);
    }
}