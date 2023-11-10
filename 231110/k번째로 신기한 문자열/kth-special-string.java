import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> words = new ArrayList<>();

        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        String T = st.nextToken();

        for (int i = 0; i < n; i++) {
            words.add(br.readLine());
        }

        Collections.sort(words);

        int startIdx = 0;
        while (true) {
            if ((T.length() <= words.get(startIdx).length()) 
                    && words.get(startIdx).substring(0, T.length()).equals(T)) {
                break;
            }
            startIdx++;
        }

        System.out.println(words.get(startIdx + k - 1));
    }
}