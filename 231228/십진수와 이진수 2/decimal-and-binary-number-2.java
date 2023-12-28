import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        char[] originDigits = br.readLine().toCharArray();
        int decimal = 0;
        for (int i = 0; i < originDigits.length; i++) {
            decimal = 2 * decimal + (originDigits[i] - '0');
        }
        decimal *= 17;

        int[] digits = new int[20];
        int cnt = 0;
        while (true) {
            if (decimal < 2) {
                digits[cnt] = decimal;
                break;
            }

            digits[cnt++] = decimal % 2;
            decimal /= 2;
        }

        for (int i = cnt; i >= 0; i--) {
            System.out.print(digits[i]);
        }
    }
}