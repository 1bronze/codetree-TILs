import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] developers = new int[6];
        int ans = 0, minValue = Integer.MAX_VALUE;

        for(int i = 0; i < 6; i ++) {
            developers[i] = sc.nextInt();
        }

        Arrays.sort(developers);

        int[] teams = new int[3];

        for(int i = 0; i < 3; i ++) {
            teams[i] += developers[i] + developers[5 - i];
        }

        int findMax = 0, findMin = Integer.MAX_VALUE;
        for(int i = 0; i < 3; i ++) {
            if(findMax < teams[i]) findMax = teams[i];
            if(findMin > teams[i]) findMin = teams[i];
        }

        minValue = Math.min(minValue, Math.abs(findMax - findMin));

        System.out.println(minValue);
    }
}