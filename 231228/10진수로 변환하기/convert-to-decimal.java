import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        char[] binarys = br.readLine().toCharArray();
        
        int ans = 0;
        for (int i = 0; i < binarys.length; i++) {
            ans = ans * 2 + (binarys[i] - '0');
        }

        System.out.println(ans);
    }
}