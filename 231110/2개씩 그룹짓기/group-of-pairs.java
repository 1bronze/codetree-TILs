import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Integer> numbers = new ArrayList<>();

        int groupCount = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < 2 * groupCount; i++) {
            numbers.add(Integer.parseInt(st.nextToken()));
        }

        Collections.sort(numbers);
        int max = 0;
        for (int i = 0; i < groupCount; i++) {
            int n1 = numbers.get(i);
            int n2 = numbers.get(2 * groupCount - i - 1);
            max = max < n1 + n2 ? n1 + n2 : max;
        }

        System.out.println(max);
    }
}