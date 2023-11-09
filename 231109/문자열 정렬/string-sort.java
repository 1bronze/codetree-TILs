import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();
        char[] chars = str.toCharArray();
        Arrays.sort(chars);

        String sortedStr = new String(chars);
        System.out.println(sortedStr);
    }
}