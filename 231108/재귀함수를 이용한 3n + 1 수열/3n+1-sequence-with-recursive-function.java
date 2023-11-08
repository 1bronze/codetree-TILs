import java.io.*;
import java.util.*;

public class Main {

    public static int recur(int n) {
        if (n == 1) {
            return 0;
        }

        if (n % 2 == 0) {
            return recur(n / 2) + 1;
        } else {
            return recur(3 * n + 1) + 1;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        System.out.println(recur(n));
    }
}