import java.io.*;
import java.util.*;

public class Main {
    public static int getGcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return getGcd(b, a % b);
    }

    public static int getLcm(List<Integer> numbers, int n) {
        if (n == 0) {
            return numbers.get(0);
        }

        int a = getLcm(numbers, n-1);
        int b = numbers.get(n);
        int gcd = getGcd(a, b);
        return a * b / gcd;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        List<Integer> numbers = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            numbers.add(Integer.parseInt(st.nextToken()));
        }
        
        System.out.println(getLcm(numbers, n-1));
    }
}