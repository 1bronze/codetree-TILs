import java.io.*;
import java.util.*;

public class Main {
    public static class Number {
        int index;
        int value;
        int orderedIndex;

        public Number(int index, int value) {
            this.index = index;
            this.value = value;
            this.orderedIndex = -1;
        }

        public void setOrderedIndex(int orderedIndex) {
            this.orderedIndex = orderedIndex;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Number> numbers = new ArrayList<>();

        int n = Integer.parseInt(br.readLine().split(" ")[0]);
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= n; i++) {
            int value = Integer.parseInt(st.nextToken());
            numbers.add(new Number(i, value));
        }

        Collections.sort(numbers, (n1, n2) -> n1.value - n2.value);
        for (int i = 0; i < n; i++) {
            numbers.get(i).setOrderedIndex(i+1);
        }

        Collections.sort(numbers, (n1, n2) -> n1.index - n2.index);
        for (Number number : numbers) {
            System.out.print(number.orderedIndex + " ");
        }
    }
}