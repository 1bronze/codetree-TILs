import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String word1 = br.readLine();
        String word2 = br.readLine();

        String[] parsedWord1 = word1.split("");
        Arrays.sort(parsedWord1);
        String[] parsedWord2 = word2.split("");
        Arrays.sort(parsedWord2);

        int minLen = Math.min(parsedWord1.length, parsedWord2.length);
        boolean isSame = true;
        for (int i = 0; i < minLen; i++) {
            if (!parsedWord1[i].equals(parsedWord2[i])) {
                isSame = false;
            }
        }
        if (parsedWord1.length != parsedWord2.length) {
            isSame = false;
        }

        if (isSame) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}