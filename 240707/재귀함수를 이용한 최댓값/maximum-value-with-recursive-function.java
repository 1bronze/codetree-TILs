import java.util.Scanner;

public class Main {

    // 공유하는 변수이므로 static으로 선언 
    public static int[] arr = new int[101]; // 최대 100개
    public static int cnt = 0; // 비교횟수

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }

        System.out.println(findMax(n));
    }

    // 최대값을 반환하는 함수
    public static int findMax(int n){
        int num = arr[cnt];
        // 비교당할 수 num

        // 비교한 횟수가 n과 같게되면 비교를 끝냄 (종료조건)
        if (cnt == n){
            return n; // 가장 큰 수가 반환되게 됨
        }
        
        // 비교해서 큰 수를 재귀함수의 파라미터로 넘겨준다
        if (num > n){
            cnt++;
            return findMax(num);
        }else{
            cnt++;
            return findMax(n);
        }  
    }
}