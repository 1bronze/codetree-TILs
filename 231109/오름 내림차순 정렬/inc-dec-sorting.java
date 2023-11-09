import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Integer> numbers = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            numbers.add(Integer.parseInt(st.nextToken()));
        }

        Collections.sort(numbers, (n1, n2) -> n1 - n2);
        numbers.forEach((target) -> System.out.print(target + " "));
        System.out.println();

        Collections.sort(numbers, (n1, n2) -> n2 - n1);
        numbers.forEach((target) -> System.out.print(target + " "));
        System.out.println();
    }
}