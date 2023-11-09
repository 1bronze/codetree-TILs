import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> strs = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            strs.add(br.readLine());
        }

        Collections.sort(strs, (str1, str2) -> str1.compareTo(str2));
        strs.forEach((target) -> System.out.println(target));
    }
}