import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int[] slots = new int[N+1];
        for (int i = 0; i < K; i++) {
            st = new StringTokenizer(br.readLine());
            int A = Integer.parseInt(st.nextToken());
            int B = Integer.parseInt(st.nextToken());

            for (int j = A; j <= B; j++) {
                slots[j] += 1;
            }
        }

        int max = slots[0];
        for (int i = 1; i < slots.length; i++) {
            max = (max > slots[i]) ? max : slots[i];
        }

        System.out.println(max);
    }
}