import java.io.*;
import java.util.*;

public class Main {
    public static int recur(int n) {
        if (n == 1) {
            return 2;
        } else if (n == 2) {
            return 4;
        } else {
            return (recur(n - 1) * recur(n - 2)) % 100;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        System.out.println(recur(N));
    }
}