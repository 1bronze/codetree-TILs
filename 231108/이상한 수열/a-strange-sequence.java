import java.io.*;
import java.util.*;

public class Main {
    public static int recur(int N) {
        if (N == 1) {
            return 1;
        } else if (N == 2) {
            return 2;
        }
        return recur(N / 3) + recur(N - 1);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        System.out.println(recur(N));
    }
}